export const dataSave = (key, value) => {
  return localStorage.setItem(key, value);
};

export const dataLoad = (key) => {
  return localStorage.getItem(key);
};

export const removedata = (key) => {
  return localStorage.removeItem(key);
};
