'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import SearchBar from '../../ui/searchbar/SearchBar';
import { usePathname } from 'next/navigation';
import { useNavigationLoading } from '../../hooks/useNavigationLoading';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const { isLoading, progress, startLoading } = useNavigationLoading();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      {isLoading && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMenu}>
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileMenuLogo}>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={60}
                  height={45}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <button className={styles.closeMenuBtn} onClick={closeMenu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul className={styles.mobileMenuList}>
              <li>
                <Link
                  className={`${styles.mobileNavLink} ${pathname === '/' ? styles.mobileLinksActive : ''}`}
                  href="/"
                  onClick={() => {
                    startLoading();
                    closeMenu();
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.mobileNavLink} ${pathname.startsWith('/products') ? styles.mobileLinksActive : ''}`}
                  href="/products"
                  onClick={() => {
                    startLoading();
                    closeMenu();
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.mobileNavLink} ${pathname === '/account' ? styles.mobileLinksActive : ''}`}
                  href="/account"
                  onClick={() => {
                    startLoading();
                    closeMenu();
                  }}
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.mobileNavLink} ${pathname === '/cart' ? styles.mobileLinksActive : ''}`}
                  href="/cart"
                  onClick={() => {
                    startLoading();
                    closeMenu();
                  }}
                >
                  My Cart
                </Link>
              </li>
              <li>
                <Link
                  className={styles.mobileNavLink}
                  href="#"
                  onClick={() => {
                    startLoading();
                    closeMenu();
                  }}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <nav className={styles.navbar}>
        {/* Hamburger Menu Button */}
        <button className={styles.hamburgerBtn} onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" onClick={startLoading}>
          <div className={styles.logo}>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={80}
              height={60}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          <li>
            <Link
              className={`${styles.navLink} ${pathname === '/' ? styles.linksActive : ''}`}
              href="/"
              onClick={startLoading}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${pathname.startsWith('/products') ? styles.linksActive : ''}`}
              href="/products"
              onClick={startLoading}
            >
              Products
            </Link>
          </li>
        </ul>

        {/* Search Bar - Always Visible */}
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>

        {/* Desktop Actions */}
        <ul className={styles.actions}>
          <li>
            <Link
              className={`${styles.navLink} ${pathname === '/account' ? styles.linksActive : ''}`}
              href="/account"
              onClick={startLoading}
            >
              Account
              <div className={`iconWrapper ${styles.iconWrapper}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.006,12.309c3.611-.021,5.555-1.971,5.622-5.671-.062-3.56-2.111-5.614-5.634-5.637-3.561,.022-5.622,2.122-5.622,5.672s2.062,5.615,5.634,5.636Z" />
                  <path d="M11.994,13.661c-5.328,.034-8.195,2.911-8.291,8.322-.004,.268,.099,.527,.287,.718s.445,.299,.713,.299h14.595c.268,0,.525-.108,.713-.299,.188-.191,.291-.45,.287-.718-.092-5.333-3.036-8.288-8.304-8.322Z" />
                </svg>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${pathname === '/cart' ? styles.linksActive : ''}`}
              href="/cart"
              onClick={startLoading}
            >
              My Cart
              <div className={`iconWrapper ${styles.iconWrapper}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Filled"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077Z" />
                  <circle cx={7} cy={22} r={2} />
                  <circle cx={17} cy={22} r={2} />
                </svg>
              </div>
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#" onClick={startLoading}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
