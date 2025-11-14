function cleanAndParseJson(str) {
  if (!str) return null;
  const cleaned = str
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

export default cleanAndParseJson;
