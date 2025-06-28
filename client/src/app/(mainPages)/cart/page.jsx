'use client';
import CartItem from '@/components/Cart/CartItem';
import CartSummary from '@/components/Cart/CartSummary';
import styles from './CartPage.module.scss';
import { useState } from 'react';

const mockCart = [
  {
    image: '/assets/product1.jpg',
    title: `L'OREAL PARIS Elvive Hyaluron Moisture Filling Shampoo Replumps Hair With 72H Of`,
    price: '172.5',
    seller: '',
    delivery: 'Order in 1hh ent 23 in\nGet It Tomorrow',
    qty: '2',
    qtyOptions: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ],
    checked: false,
    note: '',
  },
  {
    image: '/assets/product2.jpg',
    title:
      'Samsung Galax-/ 324 Ultra SG Titanium Gray 12GB RAM 256GB - Middle East Version',
    price: '52878.65',
    seller: 'Dr Mobile',
    delivery: 'Order in 1hh ent 28 in\nSold by Dr Mobile',
    qty: '1',
    qtyOptions: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ],
    checked: false,
    note: '',
  },
  {
    image: '/assets/product3.jpg',
    title:
      'Apple iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - International',
    price: '72222',
    seller: 'IQ',
    delivery: 'Order in 1hh ent 28 in\nSold by IQ',
    qty: '1',
    qtyOptions: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ],
    checked: false,
    note: '',
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(mockCart);
  const [coupon, setCoupon] = useState('');

  const subtotal = cart
    .reduce((sum, item) => sum + parseFloat(item.price) * parseInt(item.qty), 0)
    .toFixed(2);
  const shipping = 'FREE';
  const total = subtotal;

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItemsSection}>
        <h1 className={styles.heading}>
          Cart <span>({cart.length} items)</span>
        </h1>
        {cart.map((item, idx) => (
          <CartItem
            key={idx}
            {...item}
            onQtyChange={(opt) => {
              const newCart = [...cart];
              newCart[idx].qty = opt.value;
              setCart(newCart);
            }}
            onRemove={() => {
              setCart(cart.filter((_, i) => i !== idx));
            }}
            onCheck={() => {
              const newCart = [...cart];
              newCart[idx].checked = !newCart[idx].checked;
              setCart(newCart);
            }}
          />
        ))}
      </div>
      <CartSummary
        coupon={coupon}
        onCouponChange={(e) => setCoupon(e.target.value)}
        onApplyCoupon={() => {}}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        onCheckout={() => {}}
        details={
          <>
            Monthly payment plans from EGP 500.
            <br />
            <a href="#" style={{ color: '#222', textDecoration: 'underline' }}>
              View more details
            </a>
          </>
        }
      />
    </div>
  );
}
