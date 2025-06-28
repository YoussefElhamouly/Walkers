import AdminHeader from '@/components/admin/header/AdminHeader';
import CategoriesChart from '@/components/admin/charts/CategoriesChart';
import SalesChart from '@/components/admin/charts/SalesChart';
import Stats from '@/components/admin/stats/Stats';
import styles from './Dashboard.module.scss';

const DashboardPage = () => {
  return (
    <section className={styles.container}>
      <AdminHeader title="Dashboard" />
      <Stats />
      <div className={styles.charts}>
        <SalesChart />
        <CategoriesChart />
      </div>
    </section>
  );
};

export default DashboardPage;
