import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  UserBox,
  UserInfo,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <CardBody>
        <CardPoster src={avatar} alt="User avatar" />
        <CardTitle>{username}</CardTitle>
        <Tag>@{tag}</Tag>
        <CardText>{location}</CardText>
      </CardBody>

      <UserBox>
        <UserInfo>
          <CardText>Followers</CardText>
          <CardFooter>{stats.followers}</CardFooter>
        </UserInfo>
        <UserInfo>
          <CardText>Views</CardText>
          <CardFooter>{stats.views}</CardFooter>
        </UserInfo>
        <UserInfo>
          <CardText>Likes</CardText>
          <CardFooter>{stats.likes}</CardFooter>
        </UserInfo>
      </UserBox>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
