import PropTypes from 'prop-types';
import { Friends } from '../Friends/Friends';

import { LeaderBoard } from './Friendslist.styled';

export const Friendslist = ({ friends }) => {
  return (
    <LeaderBoard>
      {friends.map(item => (
        <li key={item.id}>
          <Friends
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </LeaderBoard>
  );
};

Friendslist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
