import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashBoardPage } from './pages/DashBoardPage/DashBoardPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
