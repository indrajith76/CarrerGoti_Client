const getMatchPercentage = (jobSkills, userSkills) => {
  if (!jobSkills || jobSkills.length === 0) return 0;

  const matched = jobSkills.filter((skill) => userSkills.includes(skill));

  return Math.round((matched.length / jobSkills.length) * 100);
};

export default getMatchPercentage;
