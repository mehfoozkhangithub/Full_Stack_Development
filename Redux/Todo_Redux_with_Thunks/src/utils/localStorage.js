/**
 *
 * @param{String} key
 *
 */

const loadData = (key) => {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  return data;
};

/**
 *
 * @param{key, data} (string, any)
 *
 */

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeData = (key) => {
  localStorage.removeItem(key);
};

export { loadData, saveData, removeData };
