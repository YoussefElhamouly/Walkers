'use client';
import { useState, useContext, useRef } from 'react';
import styles from './LoginForm.module.scss';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { register } = useContext(AuthContext) || {};
  const [fieldErrors, setFieldErrors] = useState({});
  const formRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      errors.email = 'Invalid email';
    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 6)
      errors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword)
      errors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      if (register) {
        await register({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        });
        router.push('/');
      } else {
        // Placeholder: handle registration logic here
        router.push('/');
      }
    } catch (error) {
      if (error.message && error.message.includes('email')) {
        setFieldErrors((prev) => ({ ...prev, email: error.message }));
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles.formBox}
      onSubmit={handleRegister}
      ref={formRef}
      style={loading ? { opacity: 0.8, pointerEvents: 'none' } : {}}
    >
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.title}>Create your account</h2>
          <p className={styles.subtitle}>
            Enter your details below to create a new account
          </p>
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formGroup}>
        <label htmlFor="firstName">
          First Name{' '}
          {fieldErrors.firstName && (
            <span
              style={{
                color: '#dc2626',
                fontWeight: 500,
                fontSize: '0.95em',
                marginLeft: 6,
              }}
            >
              {fieldErrors.firstName}
            </span>
          )}
        </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="lastName">
          Last Name{' '}
          {fieldErrors.lastName && (
            <span
              style={{
                color: '#dc2626',
                fontWeight: 500,
                fontSize: '0.95em',
                marginLeft: 6,
              }}
            >
              {fieldErrors.lastName}
            </span>
          )}
        </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">
          Email{' '}
          {fieldErrors.email && (
            <span
              style={{
                color: '#dc2626',
                fontWeight: 500,
                fontSize: '0.95em',
                marginLeft: 6,
              }}
            >
              {fieldErrors.email}
            </span>
          )}
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">
          Password{' '}
          {fieldErrors.password && (
            <span
              style={{
                color: '#dc2626',
                fontWeight: 500,
                fontSize: '0.95em',
                marginLeft: 6,
              }}
            >
              {fieldErrors.password}
            </span>
          )}
        </label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          type="password"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">
          Confirm Password{' '}
          {fieldErrors.confirmPassword && (
            <span
              style={{
                color: '#dc2626',
                fontWeight: 500,
                fontSize: '0.95em',
                marginLeft: 6,
              }}
            >
              {fieldErrors.confirmPassword}
            </span>
          )}
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          type="password"
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.loginBtn} disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>

      <button
        type="button"
        onClick={() => {
          window.location.href = 'http://localhost:5000/auth/google';
        }}
        className={styles.googleBtn}
        disabled={loading}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
        />
        Sign up with Google
      </button>
    </form>
  );
}
