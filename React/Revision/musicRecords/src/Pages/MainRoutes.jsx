import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MusicRecords } from './MusicRecords';
import { Login } from './Login';
import { EditMusicRecords } from './EditMusicRecords';
import { SingleMusicRecords } from './SingleMusicRecords';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecords />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/editMusicRecords" element={<EditMusicRecords />}></Route>
      <Route
        path="/singleMusicRecords"
        element={<SingleMusicRecords />}
      ></Route>
    </Routes>
  );
};
