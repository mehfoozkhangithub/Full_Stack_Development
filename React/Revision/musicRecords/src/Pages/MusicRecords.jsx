import { styled } from 'styled-components';

import { FilterSort } from '../Components/FilterSort';
import { MusicAlbums } from '../Components/MusicAlbums';
import { useSelector } from 'react-redux';

export const MusicRecords = () => {
  const musicDataError = useSelector((store) => store.AppReducer.isError);

  if (musicDataError.status) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
          // border: '2px solid red',
        }}
      >
        <h1>404 page not found 🤡</h1>
        <h2>
          {musicDataError.msg.message} & {musicDataError.msg.name}
        </h2>
      </div>
    );
  }

  return (
    <Wrapper color="green">
      <WrapperFilterSort>
        <FilterSort />
      </WrapperFilterSort>

      <WrapperMusicAlbum>
        <MusicAlbums />
      </WrapperMusicAlbum>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: ${(color) => `1px solid ${color}`};
  display: flex;
  ${'' /* height: 90vh; */}
`;

const WrapperFilterSort = styled.div`
  border: 1px solid green;
  padding: 0.4rem;
  width: 20%;
`;

const WrapperMusicAlbum = styled.div`
  border: 1px solid pink;
  padding: 0.4rem;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center;
  gap: 1rem;
`;
