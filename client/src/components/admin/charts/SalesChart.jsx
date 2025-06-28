'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Chart.module.scss';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesChart = () => {
  const options = {
    chart: {
      id: 'sales-performance',
      toolbar: {
        show: false,
      },
    },
    colors: ['#1A202C', '#2D3748', '#4A5568', '#718096'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      position: 'top',
    },
    grid: {
      borderColor: '#4A5568',
      strokeDashArray: 3,
    },
  };

  const series = [
    {
      name: 'Laptops',
      data: [30, 40, 45, 50, 49],
    },
    {
      name: 'Headsets',
      data: [20, 35, 40, 42, 55],
    },
    {
      name: 'Monitors',
      data: [50, 45, 30, 25, 30],
    },
    {
      name: 'Phones',
      data: [15, 25, 35, 55, 60],
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <h4>Sales Performance</h4>
      </div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default SalesChart;
