import RegisterForm from '@/components/Auth/RegisterForm';
import styles from '../login/LoginPage.module.scss';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className={styles.bg}>
      <div className={styles.card} style={{ maxWidth: '1100px' }}>
        <div className={styles.left} style={{ maxWidth: '650px' }}>
          <Image src="/favicon.ico" alt="Logo" width={44} height={44} />
          <h2 className={styles.brand}>Walkers</h2>
          <p className={styles.cheesy}>
            "Step up your style, one step at a time."
          </p>
        </div>
        <div className={styles.right} style={{ flex: '1 1 500px' }}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
