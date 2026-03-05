import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicSuccess } from '../Redux/actionType';
import { useLocation, useSearchParams } from 'react-router-dom';

export const MusicAlbums = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const musicData = useSelector((store) => store.musicRecords);

  useEffect(() => {
    if (location || musicData.length === 0) {
      const genre = searchParams.getAll('genre');
      const queryParams = {
        params: {
          genre: genre,
          _sort: searchParams.get('sortBy') && 'year',
          _order: searchParams.get('sortBy'),
        },
      };
      dispatch(getMusicSuccess(queryParams));
    }
  }, [location.search]);
  return (
    <>
      {musicData.length > 0 &&
        musicData.map((album) => {
          return (
            <div key={album.id}>
              <div>{album.name}</div>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <div>{album.genre}</div>
              <div>{album.year}</div>
            </div>
          );
        })}
    </>
  );
};
