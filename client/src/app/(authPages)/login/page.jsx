import LoginForm from '@/components/Auth/LoginForm';
import styles from './LoginPage.module.scss';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <div className={styles.left}>
          <Image src="/favicon.ico" alt="Logo" width={44} height={44} />
          <h2 className={styles.brand}>Walkers</h2>
          <p className={styles.cheesy}>
            "Step up your style, one step at a time."
          </p>
        </div>
        <div className={styles.right}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
