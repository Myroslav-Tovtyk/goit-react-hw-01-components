import PropTypes from "prop-types";
import { Label, Volume } from "./Statistics.styled";

export const Statistics = ({labelData, percentage, title}) => {
    return (
        <div>
            <h2>{title}</h2>            
            <div>                     
                <Label>{labelData}</Label>
                <Volume>{percentage}</Volume>     
            </div>
        </div>    
    );
};

Statistics.propTypes = {
    title:PropTypes.string,
    labelDta: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};