import { styled } from 'styled-components';

import { FilterSort } from '../Components/FilterSort';
import { MusicAlbums } from '../Components/MusicAlbums';

export const MusicRecords = () => {
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
