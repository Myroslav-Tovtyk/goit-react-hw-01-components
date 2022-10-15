import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

import { Profile } from "./profile/Profile";
import { Section } from './section/Section';
import { StatisticsList } from './statisticsList/StatisticsList';
import { Friendslist } from './Friendslist/Friendslist';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
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
    </div>  
  );
};
