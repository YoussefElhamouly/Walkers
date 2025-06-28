'use client';
// Draft checkout page mimicking the provided screenshot. Uses CartItem for order summary.
import React, { useRef } from 'react';
import CartItem from '@/components/cart/CartItem';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import styles from './CheckoutPage.module.scss';

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
];

const stateOptions = [
  { label: 'Select an option...', value: '' },
  { label: 'Cairo', value: 'Cairo' },
  { label: 'Giza', value: 'Giza' },
  { label: 'Alexandria', value: 'Alexandria' },
];
const areaOptions = [
  { label: 'Select an option...', value: '' },
  { label: 'Nasr City', value: 'Nasr City' },
  { label: 'Heliopolis', value: 'Heliopolis' },
];

export default function CheckoutPage() {
  const formRef = useRef({
    email: '',
    state: '',
    area: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    notes: '',
  });
  const forceUpdate = React.useReducer(() => ({}))[1]; // to re-render on ref change

  const subtotal = mockCart
    .reduce((sum, item) => sum + parseFloat(item.price) * parseInt(item.qty), 0)
    .toFixed(2);
  const shipping = 'Enter your address to view shipping options.';
  const total = subtotal;

  const handleInput = (e) => {
    formRef.current[e.target.name] = e.target.value;
    forceUpdate();
  };
  const handleDropdown = (name, option) => {
    formRef.current[name] = option.value;
    forceUpdate();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send formRef.current to backend or process order
    alert('Order submitted!\n' + JSON.stringify(formRef.current, null, 2));
  };

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.billingCard}>
        <h2 className={styles.heading}>Billing Details</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            Email address *
            <input
              className={styles.input}
              type="email"
              name="email"
              value={formRef.current.email}
              onChange={handleInput}
              required
            />
          </label>
          <label className={styles.label}>
            State / County *
            <Dropdown
              options={stateOptions}
              selected={formRef.current.state}
              onSelect={(opt) => handleDropdown('state', opt)}
              placeholder="Select an option..."
              additionalClass={styles.dropdown}
            />
          </label>
          <label className={styles.label}>
            Country / Region *
            <input
              className={styles.input}
              type="text"
              value="Egypt"
              disabled
              style={{ background: '#f3f3f3' }}
            />
          </label>
          <label className={styles.label}>
            Area
            <Dropdown
              options={areaOptions}
              selected={formRef.current.area}
              onSelect={(opt) => handleDropdown('area', opt)}
              placeholder="Select an option..."
              additionalClass={styles.dropdown}
            />
          </label>
          <div className={styles.row}>
            <label className={styles.label} style={{ flex: 1 }}>
              First name *
              <input
                className={styles.input}
                type="text"
                name="firstName"
                value={formRef.current.firstName}
                onChange={handleInput}
                required
              />
            </label>
            <label className={styles.label} style={{ flex: 1 }}>
              Last name *
              <input
                className={styles.input}
                type="text"
                name="lastName"
                value={formRef.current.lastName}
                onChange={handleInput}
                required
              />
            </label>
          </div>
          <label className={styles.label}>
            Address - العنوان بالتفصيل *
            <input
              className={styles.input}
              type="text"
              name="address"
              value={formRef.current.address}
              onChange={handleInput}
              required
            />
          </label>
          <label className={styles.label}>
            Phone *
            <input
              className={styles.input}
              type="tel"
              name="phone"
              value={formRef.current.phone}
              onChange={handleInput}
              required
            />
          </label>
          <label className={styles.label}>
            Order notes
            <textarea
              className={styles.textarea}
              name="notes"
              value={formRef.current.notes}
              onChange={handleInput}
              placeholder="Notes about your order, e.g. special notes for delivery."
            />
          </label>
          <button className={styles.placeOrderBtn} type="submit">
            Place Order
          </button>
        </form>
      </div>
      <div className={styles.orderCard}>
        <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 16 }}>
          Your Order
        </h3>
        <div>
          {mockCart.map((item, idx) => (
            <CartItem
              key={idx}
              {...item}
              onQtyChange={() => {}}
              onRemove={() => {}}
              onCheck={() => {}}
            />
          ))}
        </div>
        <div style={{ borderTop: '1px solid #eee', margin: '16px 0' }} />
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>{subtotal} LE</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span style={{ color: '#888', fontSize: 14 }}>{shipping}</span>
        </div>
        <div className={styles.summaryRow + ' ' + styles.summaryTotal}>
          <span>Total</span>
          <span>{total} LE</span>
        </div>
        <div className={styles.deliveryReturn}>
          <h4>Delivery & Return</h4>
          <div>
            <b>When do I receive my order ?</b>
            <br />
            We ship with Mylerz
            <br />
            And delivery time 2 – 4 days
          </div>
          <div>
            <b>30 Days Return</b>
          </div>
          <div>
            <b>Refund request</b>
          </div>
        </div>
      </div>
    </div>
  );
}
