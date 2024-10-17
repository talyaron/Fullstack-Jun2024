import { getUserByEmail } from '../../controller/userController';

export function renderDashboard(): string {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    if (!loggedInUser) {
        return "<div>Please log in to view your dashboard.</div>";
    }

    const content = `
        <div class="dashboard">
            <h1>Welcome back, ${loggedInUser.fullName}</h1>
            <div class="stats">
                ${renderStatsCards()}
            </div>
            <div class="charts">
                ${renderActivityChart()}
                ${renderTransactionTable()}
            </div>
        </div>
    `;


    return content;
}

function renderStatsCards(): string {
    return `
        <div class="stat-card">
            <h2>Total Transactions</h2>
            <p>50</p>
        </div>
        <div class="stat-card">
            <h2>Total Balance</h2>
            <p>$1,250.00</p>
        </div>
    `;
}

function renderActivityChart(): string {
    return `
        <div class="activity-chart">
            <h2>Weekly Activity</h2>
            <canvas id="activityChart"></canvas>
        </div>
    `;
}

function renderTransactionTable(): string {
    return `
        <div class="transaction-table">
            <h2>Recent Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${renderTransactionRows()}
                </tbody>
            </table>
        </div>
    `;
}

function renderTransactionRows(): string {
    const transactions = [
        { date: '2024-10-01', description: 'Grocery', amount: '$50.00' },
        { date: '2024-10-03', description: 'Salary', amount: '$1,500.00' },
        { date: '2024-10-05', description: 'Utilities', amount: '$100.00' },
    ];

    return transactions.map(transaction => `
        <tr>
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
        </tr>
    `).join('');
}

function drawActivityChart() {
    const ctx = document.getElementById('activityChart') as HTMLCanvasElement;
    const activityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Activity',
                data: [120, 150, 170, 200, 230, 190, 210],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

export function initDashboard() {
    const dashboardContent = renderDashboard();
    document.getElementById('app')!.innerHTML = dashboardContent;
    drawActivityChart(); 
}
