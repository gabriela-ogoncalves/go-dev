import React, { useContext } from 'react';
import Context from '../../Context.js';
import LoginForm from '../Login/LoginForm.js';

const ProfileInfo = () => {
  const [user] = useContext(Context);

  if (user) {
    return (
      <div className="container">
        <header className="jumbotron">
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
        </header>
      </div>  
    );
  } else {
    window.location = '/login';
    return <LoginForm />;
  }

};

export default ProfileInfo;