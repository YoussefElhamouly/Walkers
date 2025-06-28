import AdminSidebar from '@/components/admin/sidebar/AdminSidebar';
import styles from './adminLayout.module.scss';
const AdminLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AdminSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default AdminLayout;
