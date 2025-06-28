'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Dropdown.module.scss';

export default function Dropdown({
  options,
  onSelect,
  selected,
  placeholder = 'Select...',
  param,
  additionalClass = '',
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // If param is provided, use the value from the URL
  const urlSelected = param
    ? (searchParams.get(param) ?? options[0]?.value ?? '')
    : undefined;
  const effectiveSelected = param ? urlSelected : selected;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setOpen(false);
    if (param) {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (option.value && option.value !== '' && option.value !== 'All') {
        params.set(param, option.value);
      } else {
        params.delete(param);
      }
      router.replace(`?${params.toString()}`);
    }
    onSelect && onSelect(option);
  };

  const selectedOption = options.find((opt) => opt.value === effectiveSelected);

  return (
    <div className={`${styles.dropdown} ${additionalClass}`} ref={dropdownRef}>
      <button
        className={styles.toggle}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span
          className={styles.arrow}
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <polyline
              points="6 8 10 12 14 8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <ul
        className={`${styles.menu} ${open ? styles.open : ''}`}
        role="listbox"
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={
              styles.option +
              (effectiveSelected === option.value ? ' ' + styles.selected : '')
            }
            role="option"
            aria-selected={effectiveSelected === option.value}
            tabIndex={0}
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(option);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
