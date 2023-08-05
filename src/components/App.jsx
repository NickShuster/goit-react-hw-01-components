
import React from 'react';
import Profile from './Profile/Profile';
import user from '../components/user.json'; 

const App = () => {
  return (
    <div>
      <h1>My Social Media Profile</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default App;