import React, { useContext, useEffect } from 'react';

import Context from '../../Context';

import './styles.scss';

const Status = () => {
  const [isLogged] = useContext(Context);

  useEffect(() => {},[isLogged]); 

  return(
    <div className="user-status-menu">
      Olá, {isLogged.username}
    </div>
  );
};

export default Status;