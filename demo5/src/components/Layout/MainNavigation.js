import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>DemoBlog!</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink to='/auth'>Login</NavLink>
            </li>
          )}
        {isLoggedIn && (   
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              Alle Beiträge
            </NavLink>
          </li>
           )}
          {isLoggedIn && (  
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Beitrag hinzufügen
            </NavLink>
          </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
