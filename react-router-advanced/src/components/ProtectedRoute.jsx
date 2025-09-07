import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;

<Route path="details" element={<ProfileDetails />} />
<Route path="settings" element={<ProfileSettings />} />