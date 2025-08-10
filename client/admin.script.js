document.getElementById('admin-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch(`/api/complaints/admin?password=${password}`);
        
        if (response.ok) {
            const complaints = await response.json();
            showAdminMessage('Complaints loaded successfully', true);
            displayComplaints(complaints);
        } else {
            showAdminMessage('wrong password. try again.', false);
        }
    } catch (error) {
        showAdminMessage('error loading complaints. try again.', false);
        console.error('Error:', error);
    }
});

function displayComplaints(complaints) {
    const table = document.getElementById('complaints-table');
    const tbody = document.getElementById('complaints-tbody');
    
    tbody.innerHTML = '';
    
    complaints.forEach((complaint, index) => {
        const row = tbody.insertRow();
        const date = new Date(complaint.createdAt);
        const formattedDate = date.toLocaleDateString('he-IL');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${complaint.complaint}</td>
            <td>${complaint.category}</td>
            <td>${formattedDate}</td>
        `;
    });
    
    table.style.display = 'table';
}

async function showAdminMessage(text, isSuccess) {
    const messageDiv = document.getElementById('message_admin');
    messageDiv.textContent = text;
    messageDiv.className = isSuccess ? 'message success' : 'message error';
    messageDiv.style.display = 'block';

    setTimeout(() => messageDiv.style.display = 'none', 10000);
}