'use client';
import styles from './CartItem.module.scss';
import Dropdown from '../ui/dropdown/Dropdown';
import Image from 'next/image';

const CartItem = ({
  image,
  title,
  price,
  seller,
  delivery,
  qty,
  qtyOptions,
  onQtyChange,
  onRemove,
  checked,
  onCheck,
  note,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageSection}>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.title}>{title}</div>
        <div className={styles.delivery}>{delivery}</div>
        {seller && <div className={styles.seller}>Sold by {seller}</div>}
        {note && <div className={styles.note}>{note}</div>}
        <div className={styles.actionsRow}>
          <button className={styles.removeBtn} onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
      <div className={styles.priceSection}>
        <div className={styles.price}>$ {price}</div>
        <div className={styles.qtyRow}>
          <span>Qty</span>
          <Dropdown
            options={qtyOptions}
            selected={qty}
            onSelect={onQtyChange}
            placeholder={qty}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
