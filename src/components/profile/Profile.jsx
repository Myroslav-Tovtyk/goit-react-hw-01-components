import PropTypes from 'prop-types';
import { AvatarImg, Container, Label, Located, Name, StatsItem, StatsList, Tag, Volume, Wrapper } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Container>
            <Wrapper>
                <AvatarImg
                    src={avatar}
                    alt="User avatar"                    
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Located>{location}</Located>
            </Wrapper>

            <StatsList>
                <StatsItem>
                    <Label>Followers</Label>
                    <Volume>{stats.followers}</Volume>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Volume>{stats.views}</Volume>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Volume>{stats.likes}</Volume>
                </StatsItem>
            </StatsList>
        </Container>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};