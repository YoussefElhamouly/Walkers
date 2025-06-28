'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, totalItems, itemsPerPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page) => {
    if (isPending || page === currentPage) return;
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page
    if (startPage > 1) {
      pages.push(
        <button
          key="1"
          onClick={() => handlePageChange(1)}
          className={styles.pageButton}
          disabled={isPending}
        >
          1
        </button>,
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className={styles.ellipsis}>
            ...
          </span>,
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
          disabled={isPending || currentPage === i}
          style={currentPage === i ? { pointerEvents: 'none' } : {}}
        >
          {i}
        </button>,
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className={styles.ellipsis}>
            ...
          </span>,
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={styles.pageButton}
          disabled={isPending}
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isPending}
        className={styles.navButton}
      >
        Previous
      </button>

      <div className={styles.pageNumbers}>{renderPageNumbers()}</div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isPending}
        className={styles.navButton}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
