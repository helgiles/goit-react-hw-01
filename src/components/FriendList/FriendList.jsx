import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FiendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
};
