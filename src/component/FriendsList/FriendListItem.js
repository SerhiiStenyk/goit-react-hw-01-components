import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import defaultAvatar from '../defaultImg.jpg';

const FriendsListItem = ({ name, avatar = defaultAvatar, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.status}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendsListItem;
