const loadData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const saveData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export { saveData, loadData };
