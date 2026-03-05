import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const FilterSort = () => {
  //here we have the functionality to achive,
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = React.useState(
    searchParams.getAll('genre') || [],
  );

  const [sortBy, setSortBy] = React.useState(searchParams.get('sortBy') || '');

  /* 
1. The user should be able to toggle the checkbox 
2. The user should be able to update that data inthe URL Search Params 
3. The checkbox should remain selected (if it was already selected), when the page refreshes.
*/

  const handleFilter = (e) => {
    const option = e.target.value;

    let newCategory = [...category];
    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  // console.log(category);

  React.useEffect(() => {
    const params = {};
    category && (params.genre = category);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);

  return (
    <>
      <h1>filter</h1>
      <div>
        <input
          defaultChecked={category.includes('K-Pop')}
          type="checkbox"
          value="K-Pop"
          onChange={handleFilter}
        />
        <label htmlFor="">K-Pop</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes('Pop')}
          type="checkbox"
          value="Pop"
          onChange={handleFilter}
        />
        <label htmlFor="">Pop</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes('Country')}
          type="checkbox"
          value="Country"
          onChange={handleFilter}
        />
        <label htmlFor="">Country</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes('Heavy Metals')}
          type="checkbox"
          value="Heavy Metals"
          onChange={handleFilter}
        />
        <label htmlFor="">Heavy Metals</label>
      </div>

      <h2>sort by</h2>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === 'asc'}
          />
          <label htmlFor="">Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sortBy === 'desc'}
          />
          <label htmlFor="">Descending</label>
        </div>
      </div>
    </>
  );
};
