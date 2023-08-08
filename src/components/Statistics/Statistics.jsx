import { StatItem } from './StatItem';
import { StatTitle } from './StatTitle';
import { StatSect, StatListEl, StatItemEl } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSect>
      {title && <StatTitle title={title} />}

      <StatListEl>
        {stats.map(stat => (
          <StatItemEl key={stat.id} perc={stat.percentage}>
            <StatItem stat={stat} />
          </StatItemEl>
        ))}
      </StatListEl>
    </StatSect>
  );
};
