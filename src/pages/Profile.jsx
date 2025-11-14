import React, { useState, useEffect } from "react";
import useAuth from "../context/useAuth";
import pdfToText from "react-pdftotext";
import { toast } from "sonner";
import axios from "../api/axios";
import cleanAndParseJson from "../utils/cleanParseJson";

export default function Profile() {
  const { user } = useAuth();

  const [mode, setMode] = useState("pdf");
  const [loader, setLoader] = useState(false);
  const [generateData, setGenerateData] = useState(null);

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

  const saveAllInfo = () => {
    const finalData = {
      name: mergedData.name || "",
      email: mergedData.email || "",
      phone: mergedData.phone || "",
      educationLevel: mergedData.educationLevel || "",
      preferredCareerTrack: mergedData.preferredCareerTrack || "",
      experience: mergedData.experience || [],
      image: mergedData.image || null,
      skills,
      experienceList: allExperience,
      projects: allProject,
    };
    console.log("Saved:", finalData);
    toast.success("Profile saved successfully!");
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
        const prompt = `Extract structured user profile data from this resume text. Respond ONLY with a json data exactly in this format: { name: "", email: "", phone: "", educationLevel: "", preferredCareerTrack: "", skills: [], experience: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], experienceList: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], projects: [{projectTitle:"", projectDesc:""}], image: null }. If data exists, fill it. If not, use null for fields or empty arrays for lists. Do not add extra fields, comments, or explanation. Resume text: "${text}"`;

        try {
          const res = await axios.post("/api/generate", { prompt });
          const data = cleanAndParseJson(res.data.data);
          console.log(data);
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
        toast.error("Failed to extract text from pdf");
        console.log(error);
        setLoader(false);
      });
  };

  const hanleResumeTextToData = async (event) => {
    event.preventDefault();
    setLoader(true);
    const text = event.target.elements.text.value.trim();

    const prompt = `Extract structured user profile data from this resume text. Respond ONLY with a json data exactly in this format: { name: "", email: "", phone: "", educationLevel: "", preferredCareerTrack: "", skills: [], experience: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], experienceList: [{jobTitle:"", companyName:"", duration:"", jobDesc:""}], projects: [{projectTitle:"", projectDesc:""}], image: null }. If data exists, fill it. If not, use null for fields or empty arrays for lists. Do not add extra fields, comments, or explanation. Resume text: "${text}"`;

    try {
      const res = await axios.post("/api/generate", { prompt });
      const data = cleanAndParseJson(res.data.data);
      console.log(data);
      setGenerateData(data);
      document.getElementById('profile_modal_1').close();
    } catch (error) {
      console.error(error);
      toast.error("Failed to extract text from pdf");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="my-5">
      {/* CV Upload Modal */}
      <div className="flex items-center justify-end gap-5 px-5">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("profile_modal_1").showModal()}
        >
          Upload Your CV
        </button>

        <dialog id="profile_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-center">Upload Your CV</h3>

            <div className="flex justify-center mt-4 mb-6 gap-3">
              <button
                className={`btn ${mode === "pdf" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setMode("pdf")}
              >
                PDF Upload
              </button>
              <button
                className={`btn ${mode === "text" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setMode("text")}
              >
                Text Input
              </button>
            </div>

            {mode === "pdf" && (
              <form
                onSubmit={extractText}
                className="my-5 flex w-full gap-3 items-center"
              >
                <input
                  type="file"
                  accept="application/pdf"
                  name="file"
                  className="file-input file-input-bordered file-input-primary w-full"
                />
                <button disabled={loader} type="submit" className="btn btn-primary">
                  {loader ? "Loading..." : "Analyze PDF"}
                </button>
              </form>
            )}

            {mode === "text" && (
              <form
                onSubmit={hanleResumeTextToData}>
                <p className="text-center">-------- or ---------</p>
                <div className="my-5 flex gap-3 items-center">
                  <textarea
                    name="text"
                    className="textarea textarea-bordered w-full h-40"
                    placeholder="Paste Your CV Text Content"
                  ></textarea>
                  <button disabled={loader} className="btn btn-primary">{loader ? "Loading..." : "Analyze Text"}</button>
                </div>
              </form>
            )}
          </div>
        </dialog>
      </div>

      {/* Profile Form */}
      <div className="md:flex flex-col items-center mx-auto mt-5 px-5 py-10">
        <img
          className="w-28 mx-auto rounded-full"
          src={
            mergedData.image ||
            "https://www.cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg"
          }
        />

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {/* Pre-filled Inputs */}
          {[
            { label: "Full Name", key: "name" },
            { label: "Email", key: "email" },
            { label: "Education Level", key: "educationLevel" },
            { label: "Experience Level", key: "experience" },
            { label: "Preferred Career Track", key: "preferredCareerTrack" },
          ].map((item) => (
            <div className="my-5" key={item.key}>
              <label className="block">{item.label}</label>
              <input defaultValue={mergedData[item.key] || ""} className="input w-full" />
            </div>
          ))}

          {/* Skills */}
          <div className="my-5 md:col-span-3">
            <label className="block">Add Skills</label>
            <div className="flex gap-2">
              <input
                className="input w-full"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
              <button className="btn" onClick={addSkill}>
                Add
              </button>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="md:col-span-3 my-3">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="badge badge-outline mr-2 cursor-pointer"
                  onClick={() => removeSkill(i)}
                >
                  {s} ✕
                </span>
              ))}
            </div>
          )}

          {/* Experience Section */}
          <h3 className="text-xl">Experience</h3>
          <hr className="md:col-span-3" />

          {allExperience.length > 0 && (
            <div className="md:col-span-3 grid grid-cols-3 gap-3">
              {allExperience.map((exp, i) => (
                <div className="p-3 border rounded-lg" key={i}>
                  <strong>{exp.jobTitle}</strong>
                  <p>{exp.companyName}</p>
                  <p>{exp.duration}</p>
                  <small>{exp.jobDesc}</small>
                  <button
                    className="btn btn-xs btn-error mt-2"
                    onClick={() => removeExperience(i)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Experience Inputs */}
          <div className="md:col-span-3 grid grid-cols-3 gap-3">
            {[{ key: "jobTitle", label: "Job Title" },
            { key: "companyName", label: "Company Name" },
            { key: "duration", label: "Duration" }].map((field) => (
              <div key={field.key}>
                <label>{field.label}</label>
                <input
                  className="input w-full"
                  value={experience[field.key]}
                  onChange={(e) =>
                    setExperience({ ...experience, [field.key]: e.target.value })
                  }
                />
              </div>
            ))}
            <div className="col-span-3">
              <label>Description</label>
              <textarea
                className="textarea w-full"
                value={experience.jobDesc}
                onChange={(e) =>
                  setExperience({ ...experience, jobDesc: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <button className="btn md:col-span-3" onClick={addExperience}>
            Add Experience
          </button>

          {/* Projects Section */}
          <h3 className="text-xl md:col-span-3">Projects</h3>
          <hr className="md:col-span-3" />

          {allProject.length > 0 && (
            <div className="md:col-span-3 grid grid-cols-3 gap-3">
              {allProject.map((p, i) => (
                <div className="p-3 border rounded-lg" key={i}>
                  <strong>{p.projectTitle}</strong>
                  <p>{p.projectDesc}</p>
                  <button
                    className="btn btn-xs btn-error mt-2"
                    onClick={() => removeProject(i)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Project Inputs */}
          <div className="md:col-span-3">
            <label>Project Title</label>
            <input
              className="input w-full"
              value={project.projectTitle}
              onChange={(e) =>
                setProject({ ...project, projectTitle: e.target.value })
              }
            />
            <label className="mt-3 block">Project Description</label>
            <textarea
              className="textarea w-full"
              value={project.projectDesc}
              onChange={(e) =>
                setProject({ ...project, projectDesc: e.target.value })
              }
            ></textarea>
          </div>
          <button className="btn md:col-span-3" onClick={addProject}>
            Add Project
          </button>
        </div>

        <button className="btn btn-primary mt-5" onClick={saveAllInfo}>
          Save All Info
        </button>
      </div>
    </div>
  );
}
