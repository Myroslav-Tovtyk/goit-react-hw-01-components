import { StatisticList } from './StatisticsList.styled';
import { Statistics } from 'components/statistics/Statistics';
import PropTypes from 'prop-types';

export const StatisticsList = ({ items }) => {
  return (
    <StatisticList>
      {items.map(item => (
        <li key={item.id}>
          <Statistics
            title={item.title}
            labelData={item.label}
            percentage={item.percentage}
          />
        </li>
      ))}
    </StatisticList>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
