export const SearchParams = (url, param) => {
  const u = new URL(url);
  console.log(" u:", u);

  const params = new URLSearchParams(u.searchParams);
  console.log(" params:", params);

  const dataSearch = params.get(param);
  console.log(" dataSearch:", dataSearch);

  return dataSearch;
};
