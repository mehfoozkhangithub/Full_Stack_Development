export const filter = (data, id) => {
  const items = data.find((el) => {
    return el.id === id;
  });
  return items;
};
