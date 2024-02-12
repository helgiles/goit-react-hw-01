import css from './FriendListItem.module.css';
export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  const status = isOnline ? 'Online' : 'Offline';
  return (
    <div>
      <img src={avatar} alt="Avatar" width="86" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>{status}</p>
    </div>
  );
};
