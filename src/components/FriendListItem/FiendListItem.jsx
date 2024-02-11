import css from './FriendListItem.module.css';
export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};
