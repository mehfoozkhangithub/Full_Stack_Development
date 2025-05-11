export const SearchParams = (url, param) => {
  const u = new URL(url);

  const params = new URLSearchParams(u.searchParams);

  const dataSearch = params.get(param);

  return dataSearch;
};
