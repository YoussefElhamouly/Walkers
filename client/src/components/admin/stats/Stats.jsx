import styles from './Stats.module.scss';
import {
  MdAttachMoney,
  MdPeople,
  MdShoppingBag,
  MdShowChart,
} from 'react-icons/md';

const statsData = [
  {
    title: 'Total Sales',
    value: '21,324',
    change: '+2.031',
    icon: <MdShoppingBag />,
  },
  {
    title: 'Total Income',
    value: '$221,324.50',
    change: '-$2,201',
    icon: <MdAttachMoney />,
  },
  {
    title: 'Total Sessions',
    value: '16,703',
    change: '+3,392',
    icon: <MdPeople />,
  },
  {
    title: 'Conversion Rate',
    value: '12.8%',
    change: '-1.22%',
    icon: <MdShowChart />,
  },
];

const Stats = () => {
  return (
    <div className={styles.stats}>
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`${styles.statCard} ${stat.dark ? styles.dark : ''}`}
        >
          <div className={styles.icon}>{stat.icon}</div>
          <div className={styles.info}>
            <p>{stat.title}</p>
            <h3>{stat.value}</h3>
            <span>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
