export const Load_data = (key) => {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  return data;
};

export const save_data = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
