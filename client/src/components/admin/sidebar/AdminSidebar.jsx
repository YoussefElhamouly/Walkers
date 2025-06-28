'use client';
import Link from 'next/link';
import styles from './AdminSidebar.module.scss';
import {
  MdDashboard,
  MdShoppingCart,
  MdList,
  MdLocalOffer,
  MdPeople,
} from 'react-icons/md';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: <MdDashboard />, label: 'Dashboard' },
  {
    href: '/dashboard/products',
    icon: <MdShoppingCart />,
    label: 'Products',
  },
  { href: '/dashboard/orders', icon: <MdList />, label: 'Orders' },
  { href: '/dashboard/coupons', icon: <MdLocalOffer />, label: 'Coupons' },
  { href: '/dashboard/users', icon: <MdPeople />, label: 'Users' },
];

const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/dashboard">Your Company</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={
                pathname === item.href ||
                (item.href !== '/dashboard' && pathname.startsWith(item.href))
                  ? styles.active
                  : ''
              }
            >
              <Link href={item.href}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
