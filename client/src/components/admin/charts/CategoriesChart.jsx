'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Chart.module.scss';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CategoriesChart = () => {
  const options = {
    chart: {
      id: 'popular-categories',
    },
    colors: ['#2D3748', '#4A5568', '#718096'],
    labels: ['Electronics', 'Furniture', 'Toys'],
    legend: {
      position: 'top',
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [44, 55, 41];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <h4>Popular Categories</h4>
      </div>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default CategoriesChart;
