import friends from './friends.json';
import user from './user.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';
import FriendList from './component/FriendsList/FriendList';
import Profile from './component/SocialProfile/Profile';
import Statistics from './component/Statistics/Statistics';
import TransactionHistory from './component/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <FriendList friends={friends} />

      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
