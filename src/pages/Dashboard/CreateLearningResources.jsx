import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import privateAxios from "../../api/privateAxios";
import { toast } from "sonner";

const CreateLearningResources = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [loader, setLoader] = useState(false);
  const navigation = useNavigate();

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const CreateLearningResourcesPostHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;
    const title = form.title.value;
    const platform = form.platform.value;
    const url = form.url.value;
    const image = form.image.value;
    const cost = form.cost.value;

    const data = {
      title,
      platform,
      url,
      image,
      relatedSkills: skills,
      cost,
    };

    try {

      const res = await privateAxios.post("/api/Resource", data);
      if (res.data.success) {
        toast.success(res.data.message);
        form.reset();
        setLoader(false);
        navigation("/dashboard/ManageLearningResources");
      }
    } catch (error) {
      console.log(error);

    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold">Create Learning Resource</h2>

      <form
        onSubmit={CreateLearningResourcesPostHandler}
        className="grid md:grid-cols-2 gap-5 mt-10"
      >
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input w-full border rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="platform" className="block font-medium mb-1">
            Platform
          </label>
          <input
            type="text"
            id="platform"
            name="platform"
            className="input w-full border rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block font-medium mb-1">
            URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            className="input w-full border rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="input w-full border rounded-lg p-2"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="relatedSkills" className="block font-medium mb-1">
            Related Skills
          </label>

          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-1 bg-primary/20 text-primary px-2 py-1 rounded-full text-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="hover:text-red-500"
                >
                  <FaTimes size={12} />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              id="relatedSkills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="input w-full border rounded-lg p-2"
              placeholder="Enter a skill"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="p-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="cost" className="block font-medium mb-1">
            Cost
          </label>
          <input
            type="text"
            id="cost"
            name="cost"
            className="input w-full border rounded-lg p-2"
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="btn btn-primary md:col-span-2 bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition"
        >
          {loader ? "loading..." : "Publish Resource"}
        </button>
      </form>
    </div>
  );
};

export default CreateLearningResources;
