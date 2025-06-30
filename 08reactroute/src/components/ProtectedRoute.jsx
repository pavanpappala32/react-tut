import { Navigate } from 'react-router-dom';

// Checks if user is logged in before accessing route
export default function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
