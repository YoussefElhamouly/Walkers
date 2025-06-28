import styles from './AdminHeader.module.scss';
import { MdNotifications, MdPerson } from 'react-icons/md';

const AdminHeader = ({ title }) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.user}>
        <div className={styles.notification}>
          <MdNotifications />
          <span>2</span>
        </div>
        <div className={styles.profile}>
          <MdPerson />
          <div>
            <p>Renee McKelvey</p>
            <span>Product Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
