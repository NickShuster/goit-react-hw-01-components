import React, { Component } from 'react';
import Profile from './Profile/Profile'; 
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../components/data/user.json'; 
import data from '../components/data/data.json';
import transactions from '../components/data/transactions.json';
import friends from '../components/data/friends.json'; 

class App extends Component {
  render() {
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

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </div>
    );
  }
}

export default App;