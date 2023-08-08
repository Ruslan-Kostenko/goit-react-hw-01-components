import { SpanEl } from './FriendList.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <SpanEl isOn={isOnline}>{isOnline}</SpanEl>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
