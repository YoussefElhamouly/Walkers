import styles from './WhyShopWithUs.module.scss';

const WhyShopWithUs = () => {
  return (
    <section className={styles.whyShopSection}>
      <div className={styles.whyShopStripe}></div>
      <div className={styles.whyShopHeading}>Why Shop With Us?</div>
      <div className={styles.whyShopSubtitle}>
        Experience the next level of shopping: fast, secure, and always here for
        you.
      </div>
      <div className={styles.whyShopFeatures}>
        <div className={styles.whyShopFeature}>
          <span className={styles.whyShopIcon}>
            {/* Fast Delivery SVG */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="16" fill="#232323" />
              <path
                d="M14 30h16M14 24h10M14 18h6"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M30 30v-9a2 2 0 0 0-2-2h-2"
                stroke="#FACC15"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <h4>Lightning Fast Delivery</h4>
          <p>
            Get your order delivered to your door in record time, every time.
          </p>
        </div>
        <div className={styles.whyShopFeature}>
          <span className={styles.whyShopIcon}>
            {/* Secure Payment SVG */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="16" fill="#232323" />
              <rect
                x="15"
                y="19"
                width="14"
                height="8"
                rx="2"
                stroke="#fff"
                strokeWidth="2.2"
              />
              <path
                d="M19 25h2"
                stroke="#FACC15"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <h4>Secure Payment</h4>
          <p>Your transactions are protected with industry-leading security.</p>
        </div>
        <div className={styles.whyShopFeature}>
          <span className={styles.whyShopIcon}>
            {/* 24/7 Support SVG */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="16" fill="#232323" />
              <path
                d="M22 16a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
                stroke="#fff"
                strokeWidth="2.2"
              />
              <path
                d="M22 21v3l2 2"
                stroke="#FACC15"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <h4>24/7 Support</h4>
          <p>Our team is here to help you anytime, day or night.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
