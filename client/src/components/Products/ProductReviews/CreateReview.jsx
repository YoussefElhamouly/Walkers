'use client';
import React, { useState } from 'react';
import styles from './CreateReview.module.scss';

const CreateReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      setError('Please select a star rating.');
      return;
    }
    if (!comment.trim()) {
      setError('Please write a review.');
      return;
    }
    setError('');

    setRating(0);
    setComment('');
  };

  return (
    <form className={styles.createReview} onSubmit={handleSubmit}>
      <div className={styles.starsLabel}>Your Rating:</div>
      <div className={styles.starsInput}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              (hover || rating) >= star ? styles.starActive : styles.star
            }
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            role="button"
            tabIndex={0}
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        className={styles.textarea}
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />
      {error && <div className={styles.error}>{error}</div>}
      <button className={styles.submitBtn} type="submit">
        Submit Review
      </button>
    </form>
  );
};

export default CreateReview;
