/* eslint-disable no-unused-vars */
/**
 * @param {string} key
 *
 * @returns {JSON.parsr(data)}
 *
 */

const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
};

/**
 * @param {any} data
 *
 * @set into local-storage the key and data
 *
 */

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { loadData, saveData };
