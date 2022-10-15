import PropTypes from "prop-types";
import { Friends } from "../Friends/Friends";
import { StatsList } from "./Friendslist.styled";

export const Friendslist = ({ friends }) => {
    return (        
        <StatsList>            
            {friends.map(item => (
                <li key={item.id}>

                    <Friends
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                </li>
            ))}
        </StatsList>
    );
};

Friendslist.propTypes = {
 items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};