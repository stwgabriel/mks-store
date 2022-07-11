import { Route, Routes } from 'react-router-dom';

// components
import Home from './pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
