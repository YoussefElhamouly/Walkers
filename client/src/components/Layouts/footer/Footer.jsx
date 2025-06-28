import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.col}>
          <h4>WATCH</h4>
          <Link href="/products?category=Men's Watches">Men's Watches</Link>
          <Link href="/products?category=Women's Watches">Women's Watches</Link>
          <Link href="/products?category=Kid's Watches">Kid's Watches</Link>
          <Link href="/products?category=Bands">Bands</Link>
        </div>
        <div className={styles.col}>
          <h4>QUICK LINKS</h4>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/account">Account</Link>
          <Link href="/style">Style</Link>
        </div>
        <div className={styles.col}>
          <h4>LEGAL</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/refund">Refund Policy</Link>
        </div>

        {/* <div className={styles.socialAndFeatures}>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div> */}
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363159046!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6e0b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="180"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.branding}>
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImg} />
          <span className={styles.brandName}>LASIVITE</span>
        </div>
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()} SIESWITZ. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
