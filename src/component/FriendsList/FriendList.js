import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;