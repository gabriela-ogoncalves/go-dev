import React, { useState, useEffect } from 'react';
import ProfileService from '../../services/Profile.js';

const ProfileInfo = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    ProfileService.getUserProfile().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  console.log('content: ', content);

  return (
    <div className="container">
      <header className="jumbotron">
        <p>username: {content.username}</p>
        <p>email: {content.email}</p>
      </header>
    </div>
  );
};

export default ProfileInfo;