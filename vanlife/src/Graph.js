import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ data }) => {
    const graphData = {
        labels: data.map(item => `Day ${item.day}`),
        datasets: [
            {
                label: 'Profit',
                data: data.map(item => (item.expense >= 0 ? item.expense : 0)),
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                barThickness: 50,
            },
            {
                label: 'Loss',
                data: data.map(item => (item.expense < 0 ? item.expense : 0)),
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                barThickness: 50,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Expenses Over Time',
                font: { size: 24, family: 'Georgia' },
                color: 'black',
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: $${context.raw}`,
                },
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
            },
            legend: {
                labels: {
                    font: {
                        size: 30,
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                    font: { size: 30 },
                },
                ticks: {
                    font: { size: 25 },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Expenses',
                    font: { size: 30 },
                },
                min: Math.min(...data.map(item => item.expense)) - 10,
                ticks: {
                    stepSize: 20,
                    font: { size: 20 },
                },
            },
        },
    };

    // Updated container style for larger chart size
    const graphContainerStyle = {
        width: '70vw',
        height: '60vh',
        margin: '0 auto',
    };

    return (
        <div style={graphContainerStyle}>
            <Bar data={graphData} options={options} />
        </div>
    );
};

export default Graph;
