'use client';
import styles from './CartSummary.module.scss';

const CartSummary = ({
  coupon,
  onCouponChange,
  onApplyCoupon,
  subtotal,
  shipping,
  total,
  onCheckout,
  details,
}) => {
  return (
    <aside className={styles.summary}>
      <h2 className={styles.heading}>Order Summary</h2>
      <div className={styles.couponRow}>
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={onCouponChange}
          className={styles.couponInput}
        />
        <button className={styles.applyBtn} onClick={onApplyCoupon}>
          APPLY
        </button>
      </div>

      <div className={styles.summaryRow}>
        <span>Subtotal (4 items)</span>
        <span>{subtotal}$</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Shipping Fee</span>
        <span>{shipping}</span>
      </div>
      <div className={styles.totalRow}>
        <span>Total (Inclusive of VAT)</span>
        <span>{total}$</span>
      </div>
      {/* <div className={styles.details}>{details}</div> */}
      <button className={styles.checkoutBtn} onClick={onCheckout}>
        CHECKOUT
      </button>
    </aside>
  );
};

export default CartSummary;
