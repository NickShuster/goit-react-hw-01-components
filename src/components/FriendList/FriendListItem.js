import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

class FriendListItem extends Component {
  render() {
    const { avatar, name, isOnline } = this.props;

    return (
      <li className={styles.item}>
        <span className={isOnline ? styles.friendStatus + ' ' + styles.online : styles.friendStatus + ' ' + styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    );
  }
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;