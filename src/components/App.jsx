import { Profile } from './Profile/Profile';
import userCard from '../Data/user.json';
import { Statistics } from './Statistics/Statistics';
import dataStat from '../Data/data.json';
import { FriendList } from './FriendList/FriendList';
import dataFriends from '../Data/friends.json';
import { TransactionHistory } from './Transaction/TransactionHistory';
import dataTrans from '../Data/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={userCard} />
      <Statistics title="Upload stats" stats={dataStat} />
      <FriendList friends={dataFriends} />
      <TransactionHistory items={dataTrans} />
      <GlobalStyle />
    </div>
  );
};
