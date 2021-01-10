export const getMatchingData = (text, data, key) => {
  return data.filter((item) =>
    item[key].toLowerCase().includes(text.toLowerCase())
  );
};
