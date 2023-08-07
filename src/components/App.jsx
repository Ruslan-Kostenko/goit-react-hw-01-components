import { Profile } from "./Profile/Profile";
import userCard from "../user.json";
import { Statistics } from "./Statistics/Statistics";
import dataStat from "../data.json";
import { FriendList } from "./FriendList/FriendList";
import dataFriends from "../friends.json";
import { TransactionHistory } from "./Transaction/TransactionHistory";
import dataTrans from "../transactions.json";



export const App = () => {
  return (
    <div >
      <Profile user={userCard} />
      <Statistics title="Upload stats" stats={dataStat}/>
      <FriendList friends={dataFriends}/>
      <TransactionHistory items={dataTrans}/>
    </div>
  );
};



// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}