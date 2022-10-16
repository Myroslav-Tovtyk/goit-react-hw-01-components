import PropTypes from 'prop-types';
import { FriendsItem, Avatar, Name, Status } from './Friends.styled';

export const Friends = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status>{isOnline ? 'Online' : 'Offline'}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
