import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Import pages
// import Home from '../pages/Home/Home';
// import Login from '../pages/Login/Login';
// import Dashboard from '../pages/Dashboard/Dashboard';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> */}

        {/* Protected routes */}
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
};
