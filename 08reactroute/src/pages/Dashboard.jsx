import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <div className="flex gap-4 mb-6">
        <Link to="profile" className="text-blue-600 hover:underline">Profile</Link>
        <Link to="settings" className="text-blue-600 hover:underline">Settings</Link>
      </div>

      <Outlet />
    </div>
  );
}
