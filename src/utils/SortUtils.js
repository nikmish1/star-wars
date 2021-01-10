export const Sort = (data, key) => {
  data.sort((a, b) => {
    return b[key] - a[key];
  });
};
