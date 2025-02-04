// Create a global variable for the chart
let departmentChart;

// Function to create the chart
function createChart(departments, employeeNumbers) {
  const ctx = document.getElementById('departmentChart').getContext('2d');
  if (departmentChart) {
    departmentChart.destroy(); // Destroy existing chart if it's already created
  }

  departmentChart = new Chart(ctx, {
    type: 'bar', // Bar chart
    data: {
      labels: departments, // Dynamic department names
      datasets: [{
        label: 'Number of Employees',
        data: employeeNumbers, // Dynamic employee numbers
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Fetch dynamic data (for example, this could come from an API)
function fetchData() {
  // Simulating API response for dynamic data
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        departments: [
          "Financial Planning", "Accounting", "Risk Management", "Compliance Audit", 
          "Monitoring", "Logistics", "Operations", "Supply Chain", "Knowledge Management",
          "Policy Management", "Infrastructure Design", "Planning & Modeling"
        ],
        employeeNumbers: [15, 20, 12, 18, 22, 17, 30, 25, 10, 14, 16, 28]
      };
      resolve(data);
    }, 1000); // Simulate network delay
  });
}

// Update chart with fetched data
async function updateChart() {
  const data = await fetchData();
  createChart(data.departments, data.employeeNumbers);
}

// Initialize the chart with default data
updateChart();

// Set up event listener for the Update Data button
document.getElementById('updateDataBtn').addEventListener('click', updateChart);

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.sidebar').classList.toggle('dark-sidebar');
});

// Logout Functionality
document.getElementById('logout').addEventListener('click', () => {
  alert('Logging out...');
  // Redirect to login page or handle logout here
});
