import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ plusCount, minusCount }) => {
    // Data for Pie Chart
    const pieData = {
       
        datasets: [
            {
                data: [plusCount, minusCount], // Data for pie chart
                backgroundColor: ['green', 'red'], // Colors for the slices
                borderColor: ['darkgreen', 'darkred'], // Border color for slices
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw;
                        return `${label}: ${value}`;
                    },
                },
            },
            legend: {
                position: 'top',
                labels: {
                    font: { size: 14 }, // Size of the legend labels
                },
            },
        },
    };

    return (
        <div className="Activity-Pie">
            <Pie data={pieData} options={pieOptions} />
        </div>
    );
};

export default PieChart;
