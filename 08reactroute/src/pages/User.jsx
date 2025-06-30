import { useParams } from 'react-router-dom';

export default function User() {
  // useParams gets the route parameter from URL
  const { username } = useParams();

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <p>This page is loaded dynamically using the URL.</p>
    </div>
  );
}
