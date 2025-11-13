import React from "react";

const CreateLearningResources = () => {
  const CreateLearningResourcesPostHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const platform = form.platform.value;
    const url = form.url.value;
    const image = form.image.value;
    const relatedSkills = form.relatedSkills.value;
    const cost = form.cost.value;

    console.log({ title, platform, url, image, relatedSkills, cost });
  };

  /*  
 title
platform
url
image
relatedSkills
cost
 */

  return (
    <div className="mb-10">
      <h2 className="text-2xl">Create Learning Resources</h2>

      <form
        onSubmit={CreateLearningResourcesPostHandler}
        className="grid md:grid-cols-2 gap-5 mt-10"
      >
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input w-full border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="platform" className="block">
            Platform
          </label>
          <input
            type="text"
            id="platform"
            name="platform"
            className="input w-full border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="url" className="block">
            URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            className="input w-full border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="image" className="block">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="input w-full border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="relatedSkills" className="block">
            Related Skills
          </label>
          <input
            type="text"
            id="relatedSkills"
            name="relatedSkills"
            className="input w-full border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="cost" className="block">
            Cost
          </label>
          <input
            type="text"
            id="cost"
            name="cost"
            className="input w-full border rounded-lg"
          />
        </div>

        <button type="submit" className="btn btn-primary md:col-span-2">
          Publish Resource
        </button>
      </form>
    </div>
  );
};

export default CreateLearningResources;
