import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

class FriendList extends Component {
  render() {
    const { friends } = this.props;

    return (
      <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </ul>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;