import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './profile/Profile';
import { Section } from './section/Section';
import { StatisticsList } from './statisticsList/StatisticsList';
import { Friendslist } from './Friendslist/Friendslist';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <StatisticsList items={data} />
      </Section>
      <Friendslist friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
