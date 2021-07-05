import { useContext } from 'react';

import classes from './StartingPageContent.module.css';

import AuthContext from '../../store/auth-context';

const StartingPageContent = () => {

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <section className={classes.starting}>
      
      {!isLoggedIn && (
            <div><h1>DemoBlog!</h1><h2>Bitte melden Sie sich an.</h2></div>
          )}
      {isLoggedIn && (
            <div><h1>DemoBlog!</h1><h2>Willkommen im Blog.</h2></div>
          )}
        
    </section>
  );
};

export default StartingPageContent;
