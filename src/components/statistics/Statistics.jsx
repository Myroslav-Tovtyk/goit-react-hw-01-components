import PropTypes from 'prop-types';

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './Statistics.styled';

export const Statistics = ({ labelData, percentage, title }) => {
  return (
    <StatisticBox>
      <h2>{title}</h2>
      <div>
        <StatisticText>{labelData}</StatisticText>
        <StatisticCounter>{percentage}</StatisticCounter>
      </div>
    </StatisticBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  labelData: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
