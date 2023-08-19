import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Feed, VideoDetail, SearchFeed } from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: 'black' }} >
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/videos/:id' element={<VideoDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box >
    </BrowserRouter>
  );
}

export default App;
