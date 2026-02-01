export const ADDTODOS = 'ADDTODOS';
export const EDITTODOS = 'EDITTODOS';
export const DELETETODOS = 'DELETETODOS';

export const CONFIRMTODOS = 'CONFIRMTODOS';
export const CANCELTODOS = 'CANCELTODOS';

const addTodo = (data) => {
  return { type: ADDTODOS, payload: data };
};

export { addTodo };
