import React, { useState, useEffect } from "react";
import useAuth from "../context/useAuth";
import pdfToText from "react-pdftotext";
import { toast } from "sonner";
import axios from "../api/axios";
import cleanAndParseJson from "../utils/cleanParseJson";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, token, login } = useAuth();

  const [mode, setMode] = useState("pdf");
  const [loader, setLoader] = useState(false);
  const [generateData, setGenerateData] = useState(null);
  const navigation = useNavigate();

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(user?.skills || []);

  const [experience, setExperience] = useState({
    jobTitle: "",
    companyName: "",
    duration: "",
    jobDesc: "",
  });
  const [allExperience, setAllExperience] = useState(user?.experienceList || []);

  const [project, setProject] = useState({ projectTitle: "", projectDesc: "" });
  const [allProject, setAllProject] = useState(user?.projects || []);

  const mergedData = generateData || user || {};

  useEffect(() => {
    if (generateData) {
      setSkills(generateData.skills || []);
      setAllExperience(generateData.experienceList || []);
      setAllProject(generateData.projects || []);
    }
  }, [generateData]);

  const addSkill = () => {
    if (skill.trim() === "") return;
    setSkills([...skills, skill.trim()]);
    setSkill("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    setAllExperience([...allExperience, experience]);
    setExperience({ jobTitle: "", companyName: "", duration: "", jobDesc: "" });
  };

  const removeExperience = (index) => {
    setAllExperience(allExperience.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setAllProject([...allProject, project]);
    setProject({ projectTitle: "", projectDesc: "" });
  };

  const removeProject = (index) => {
    setAllProject(allProject.filter((_, i) => i !== index));
  };

  const saveAllInfo = async () => {
    setLoader(true);
    const finalData = {
      name: mergedData.name || user.name || "",
      email: user.email || "",
      phone: mergedData.phone || user.phone || "",
      educationLevel: mergedData.educationLevel || user.educationLevel || "",
      preferredCareerTrack: mergedData.preferredCareerTrack || user.preferredCareerTrack || "",
      experience: mergedData.experience || user.experience || [],
      image: mergedData.image || user.image || null,
      skills: skills || user.skills || [],
      experienceList: allExperience || user.experienceList || [],
      projects: allProject || user.projects || [],
    };
    try {
      const res = await axios.put(`/api/auth/users/${user._id}`, finalData);
      if (res.data.success) {
        const newData = { ...res.data.data, token, _id: user._id };
        console.log(newData);

        login(token, newData);
        toast.success("Profile updated successfully!");
        setLoader(false);
        navigation("/Profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setLoader(false);
    }
  };

  const extractText = async (event) => {
    event.preventDefault();
    setLoader(true);
    const file = event.target.elements.file.files[0];
    if (!file) {
      toast.error("No file selected!");
      setLoader(false);
      return;
    }

    pdfToText(file)
      .then(async (text) => {
        const prompt = `Extract structured user profile data from this resume text. Respond ONLY with a json data exactly in this format: { name: "", email: "", phone: "", educationLevel: "", preferredCareerTrack: "", skills: [], experience: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], experienceList: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], projects: [{projectTitle:"", projectDesc:""}], image: null }. If data exists, fill it. If not, use null for fields or empty arrays for lists. Resume text: "${text}"`;

        try {
          const res = await axios.post("/api/generate", { prompt });
          const data = cleanAndParseJson(res.data.data);
          setGenerateData(data);
          document.getElementById('profile_modal_1').close();
        } catch (error) {
          console.error(error);
          toast.error("Failed to extract text from pdf");
        } finally {
          setLoader(false);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to extract text from pdf");
        setLoader(false);
      });
  };

  const handleResumeTextToData = async (event) => {
    event.preventDefault();
    setLoader(true);
    const text = event.target.elements.text.value.trim();

    const prompt = `Extract structured user profile data from this resume text. Respond ONLY with a json data exactly in this format: { name: "", email: "", phone: "", educationLevel: "", preferredCareerTrack: "", skills: [], experience: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], experienceList: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], projects: [{projectTitle:"", projectDesc:""}], image: null }. If data exists, fill it. If not, use null for fields or empty arrays for lists. Resume text: "${text}"`;

    try {
      const res = await axios.post("/api/generate", { prompt });
      const data = cleanAndParseJson(res.data.data);
      setGenerateData(data);
      document.getElementById('profile_modal_1').close();
    } catch (error) {
      toast.error("Failed to extract text");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="my-8">

      {/* Upload Button */}
      <div className="flex justify-end px-6">
        <button
          className="btn btn-primary shadow-md hover:shadow-xl transition-all"
          onClick={() => document.getElementById("profile_modal_1").showModal()}
        >
          Upload Your CV
        </button>
      </div>

      {/* MODAL */}
      <dialog id="profile_modal_1" className="modal">
        <div className="modal-box shadow-xl border border-primary/20 rounded-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <h3 className="text-xl font-bold text-primary text-center">Upload Your CV</h3>

          <div className="flex justify-center mt-4 mb-5 gap-3">
            <button className={`btn ${mode === "pdf" ? "btn-primary" : "btn-outline"}`} onClick={() => setMode("pdf")}>PDF</button>
            <button className={`btn ${mode === "text" ? "btn-primary" : "btn-outline"}`} onClick={() => setMode("text")}>Text</button>
          </div>

          {/* PDF Upload */}
          {mode === "pdf" && (
            <form onSubmit={extractText} className="flex gap-3 items-center">
              <input type="file" accept="application/pdf" name="file" className="file-input file-input-primary w-full" />
              <button disabled={loader} className="btn btn-primary">{loader ? "Loading..." : "Analyze"}</button>
            </form>
          )}

          {/* TEXT Upload */}
          {mode === "text" && (
            <form onSubmit={handleResumeTextToData}>
              <textarea name="text" placeholder="Paste Resume Text" className="textarea textarea-primary w-full h-40"></textarea>
              <button disabled={loader} className="btn btn-primary w-full mt-3">{loader ? "Loading..." : "Analyze"}</button>
            </form>
          )}
        </div>
      </dialog>

      {/* PROFILE SECTION */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-2xl border border-primary/20">

        <div className="flex flex-col items-center">
          <img
            src={mergedData.image || "https://www.cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg"}
            className="w-28 h-28 rounded-full shadow-lg border-2 border-primary"
          />

          <h2 className="text-2xl font-bold text-primary mt-3">Profile Information</h2>
        </div>

        {/* SWE STYLE FORM GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="p-4 rounded-xl shadow bg-base-200 border border-primary/10">
            <label className="text-primary font-semibold">Email</label>
            <input defaultValue={user?.email || ""} className="input input-bordered w-full mt-1" />
          </div>
          {[
            { label: "Full Name", key: "name" },
            { label: "Phone", key: "phone" },
            { label: "Education Level", key: "educationLevel" },
            { label: "Preferred Career Track", key: "preferredCareerTrack" },
          ].map(item => (
            <div key={item.key} className="p-4 rounded-xl shadow bg-base-200 border border-primary/10">
              <label className="text-primary font-semibold">{item.label}</label>
              <input defaultValue={mergedData[item.key] || ""} className="input input-bordered w-full mt-1" />
            </div>
          ))}


        </div>

        {/* SKILLS */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary mb-3">Skills</h3>
          <div className="flex gap-3">
            <input className="input input-primary w-full" value={skill} onChange={(e) => setSkill(e.target.value)} />
            <button className="btn btn-primary shadow" onClick={addSkill}>Add</button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="badge badge-primary p-3 cursor-pointer hover:badge-secondary"
                onClick={() => removeSkill(i)}>
                {s} ✕
              </span>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary">Experience</h3>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {allExperience.map((exp, i) => (
              <div key={i} className="bg-base-200 p-4 rounded-xl shadow border border-primary/10">
                <strong className="text-primary">{exp.jobTitle}</strong>
                <p>{exp.companyName}</p>
                <p>{exp.duration}</p>
                <small className="block mt-2">{exp.jobDesc}</small>
                <button className="btn btn-xs btn-error mt-3" onClick={() => removeExperience(i)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Add Experience */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <input placeholder="Job Title" className="input input-bordered" value={experience.jobTitle} onChange={(e) => setExperience({ ...experience, jobTitle: e.target.value })} />
            <input placeholder="Company Name" className="input input-bordered" value={experience.companyName} onChange={(e) => setExperience({ ...experience, companyName: e.target.value })} />
            <input placeholder="Duration" className="input input-bordered" value={experience.duration} onChange={(e) => setExperience({ ...experience, duration: e.target.value })} />

            <textarea className="textarea textarea-bordered col-span-3" placeholder="Job Description"
              value={experience.jobDesc} onChange={(e) => setExperience({ ...experience, jobDesc: e.target.value })}>
            </textarea>
          </div>
          <button className="btn btn-primary mt-3 shadow" onClick={addExperience}>Add Experience</button>
        </div>

        {/* PROJECTS */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary">Projects</h3>

          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {allProject.map((p, i) => (
              <div key={i} className="bg-base-200 p-4 rounded-xl shadow border border-primary/10">
                <strong className="text-primary">{p.projectTitle}</strong>
                <p>{p.projectDesc}</p>
                <button className="btn btn-xs btn-error mt-2" onClick={() => removeProject(i)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <input placeholder="Project Title" className="input input-bordered w-full"
              value={project.projectTitle} onChange={(e) => setProject({ ...project, projectTitle: e.target.value })} />

            <textarea placeholder="Project Description" className="textarea textarea-bordered w-full mt-3"
              value={project.projectDesc} onChange={(e) => setProject({ ...project, projectDesc: e.target.value })}>
            </textarea>
          </div>

          <button className="btn btn-primary mt-3 shadow" onClick={addProject}>Add Project</button>
        </div>

        {/* SAVE BUTTON */}
        <div className="mt-10 text-center">
          <button className="btn btn-primary w-48 shadow-xl hover:shadow-2xl" onClick={saveAllInfo}>
            Save All Info
          </button>
        </div>

      </div>

    </div>
  );
}
