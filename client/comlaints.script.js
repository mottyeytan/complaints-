function showMessage(text, isSuccess) {
    const messageDiv = document.getElementById('message_complaint');
    messageDiv.textContent = text;
    messageDiv.className = isSuccess ? 'message success' : 'message error';
    messageDiv.style.display = 'block';
    
    setTimeout(() => messageDiv.style.display = 'none', 10000);
}

document.getElementById('complaint-form').addEventListener('submit', async function(e) {
    e.preventDefault(); 

    const complaint = document.getElementById('complaint').value.trim();
    const category = document.getElementById('category').value;
    if (complaint.length < 3) {
        showMessage('the complaint must be at least 3 characters', false);
        return;
    }
    
    try {
        const response = await fetch('/api/complaints', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ complaint, category })
        });
        
        if (response.ok) {
            showMessage('the complaint was sent successfully! thank you for the complaint.', true);
            document.getElementById('complaint').value = '';
            const categories = ['Food', 'Orders', 'Equipment', 'Other'];
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            document.getElementById('category').value = randomCategory;
            
        } else {
            let err;
            try { err = await response.json(); } catch {}
            showMessage(err?.error || 'error sending the complaint. try again.', false);
        }
    } catch (error) {
        showMessage('error connecting to the server. try again.', false);
    }
});