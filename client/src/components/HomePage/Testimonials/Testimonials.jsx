import React from 'react';
import styles from './Testimonials.module.scss';
const Testimonials = () => {
  const testimonials = [
    {
      img: '/assets/test1.png',
      name: 'Sarah M.',
      text: 'Absolutely love the quality and fit! Fast shipping and great service. I will definitely shop here again.',
    },
    {
      img: '/assets/test2.png',
      name: 'James L.',
      text: 'The best online store for stylish, comfortable clothes. The customer support was super helpful and the delivery was quick.',
    },
    {
      img: '/assets/test3.png',
      name: 'Amira K.',
      text: 'Beautiful designs and top-notch materials. I get compliments every time I wear my new outfits!',
    },
  ];
  const TestimonialCard = ({ img, name, text }) => {
    return (
      <div className={styles.testimonialCard}>
        <img src={img} alt={name} />
        <div className={styles.testimonialCardText}>
          <p>{text}</p>

          <div className={styles.testimonialName}>- {name}</div>
        </div>
      </div>
    );
  };
  return (
    <section className={styles.section}>
      <div className={styles.testomnialContainer}>
        <h2 className={styles.testomnialTitle}>
          What are people saying about us
        </h2>
        <div className={styles.testomnialCards}>
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              img={t.img}
              name={t.name}
              text={t.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
