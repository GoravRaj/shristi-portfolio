// Toggle Mobile Navigation Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu on clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Custom non-alert Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const alertBox = document.getElementById('alertBox');
    alertBox.style.display = 'block';
    document.getElementById('portfolioContactForm').reset();
    
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}

// Initialize Chart.js Visualizations after DOM Loads
window.addEventListener('load', function() {
    
    // Universal Dark Theme Styling Defaults for Chart.js
    Chart.defaults.color = '#94a9bf';
    Chart.defaults.font.family = "'Segoe UI', Arial, sans-serif";

    // 1. Line Chart: Monthly Revenue & Target
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Revenue ($)',
                    data: [28000, 32000, 31000, 42000, 46000, 44000, 52000, 58000, 54000, 62000, 68000, 75000],
                    borderColor: '#22d3ee',
                    backgroundColor: 'rgba(34, 211, 238, 0.12)',
                    fill: true,
                    tension: 0.35,
                    borderWidth: 3,
                    pointBackgroundColor: '#22d3ee',
                    pointHoverRadius: 6
                },
                {
                    label: 'Target ($)',
                    data: [25000, 30000, 35000, 40000, 42000, 45000, 50000, 52000, 55000, 60000, 65000, 70000],
                    borderColor: '#3b82f6',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { boxWidth: 12, usePointStyle: true }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#07111f',
                    borderColor: 'rgba(148, 163, 184, 0.2)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(148, 163, 184, 0.08)' }
                },
                y: {
                    grid: { color: 'rgba(148, 163, 184, 0.08)' },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });

    // 2. Doughnut Chart: Sales Distribution by Category
    const ctxCategory = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Software'],
            datasets: [{
                data: [42, 23, 18, 10, 7],
                backgroundColor: [
                    '#22d3ee',
                    '#3b82f6',
                    '#0891b2',
                    '#67e8f9',
                    '#1e3a8a'
                ],
                borderColor: '#0b1729',
                borderWidth: 3,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { boxWidth: 12, usePointStyle: true, padding: 15 }
                },
                tooltip: {
                    backgroundColor: '#07111f',
                    borderColor: 'rgba(148, 163, 184, 0.2)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw}% share`;
                        }
                    }
                }
            },
            cutout: '68%'
        }
    });

});