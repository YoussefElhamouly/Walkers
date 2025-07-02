'use client';
import { useState, useContext } from 'react';
import styles from './LoginForm.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      // Redirect to home page on successful login
      router.push('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    // Redirect to Google OAuth
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <form className={styles.formBox} onSubmit={handleLogin}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.title}>Login to your account</h2>
          <p className={styles.subtitle}>
            Enter your email below to login to your account
          </p>
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          autoComplete="email"
          required
          className={styles.input}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.formGroup} style={{ marginBottom: 0 }}>
        <div className={styles.labelRow}>
          <label htmlFor="password">Password</label>
          <Link href="/forgot-password" className={styles.forgotLink}>
            Forgot your password?
          </Link>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder=""
          autoComplete="current-password"
          required
          className={styles.input}
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className={styles.loginBtn} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <button
        type="button"
        onClick={handleGoogle}
        className={styles.googleBtn}
        disabled={loading}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
        />
        Login with Google
      </button>
    </form>
  );
}
