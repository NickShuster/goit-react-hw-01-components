
import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile'; 
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory';

import user from '../components/user.json'; 
import data from '../components/data.json';
import transactions from '../components/transactions.json';
import friends from '../components/friends.json'; 

const App = () => {
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    setFriendsData(friends);
  }, []);

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

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;