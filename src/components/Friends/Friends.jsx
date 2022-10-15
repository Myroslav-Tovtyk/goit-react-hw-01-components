import PropTypes from "prop-types";

export const Friends = ({avatar, name, isOnline}) => {
    return (                           
        <div>                     
            <span>{isOnline ? 'Online' : 'Offline'}</span>
            <img src={avatar} alt={name} width='48' />
            <span>{name}</span>
        </div>        
    );
};

Friends.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
};