import { NavLink } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Movies">Movies</NavLink>
    </nav>
  );
};
export default SharedLayout;
