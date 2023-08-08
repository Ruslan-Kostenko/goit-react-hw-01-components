import { FriendListItem } from './FriendListItem';
import { ListEl, ItemEl } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListEl>
      {friends.map(friend => (
        <ItemEl key={friend.id}>
          <FriendListItem friend={friend} />
        </ItemEl>
      ))}
    </ListEl>
  );
};
