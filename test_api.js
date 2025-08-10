// סקריפט לבדיקת API של התלונות
// הרץ עם: node test_api.js

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000/api';

// פונקציה לבדיקת יצירת תלונה חדשה
async function testCreateComplaint() {
    console.log('\n🧪 Testing CREATE complaint...');
    
    const complaintData = {
        complaint: "האוכל היה קר ולא טעים",
        category: "Food"
    };

    try {
        const response = await fetch(`${BASE_URL}/complaints`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(complaintData)
        });

        const result = await response.json();
        console.log('✅ Status:', response.status);
        console.log('📝 Response:', JSON.stringify(result, null, 2));
        
        return result.data?._id; // מחזיר את ה-ID של התלונה שנוצרה
    } catch (error) {
        console.error('❌ Error:', error.message);
        return null;
    }
}

// פונקציה לבדיקת קבלת כל התלונות
async function testGetAllComplaints() {
    console.log('\n🧪 Testing GET all complaints...');
    
    try {
        const response = await fetch(`${BASE_URL}/complaints`);
        const result = await response.json();
        
        console.log('✅ Status:', response.status);
        console.log('📝 Response:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// פונקציה לבדיקת קבלת תלונה לפי ID
async function testGetComplaintById(id) {
    if (!id) {
        console.log('\n⚠️  Skipping GET by ID test - no ID provided');
        return;
    }
    
    console.log('\n🧪 Testing GET complaint by ID...');
    
    try {
        const response = await fetch(`${BASE_URL}/complaints/${id}`);
        const result = await response.json();
        
        console.log('✅ Status:', response.status);
        console.log('📝 Response:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// פונקציה לבדיקת חיבור לשרת
async function testServerConnection() {
    console.log('🧪 Testing server connection...');
    
    try {
        const response = await fetch('http://localhost:3000');
        const result = await response.json();
        
        console.log('✅ Server is running!');
        console.log('📝 Response:', JSON.stringify(result, null, 2));
        return true;
    } catch (error) {
        console.error('❌ Server connection failed:', error.message);
        console.log('💡 Make sure the server is running with: npm start or node server/app.js');
        return false;
    }
}

// הרצת כל הבדיקות
async function runAllTests() {
    console.log('🚀 Starting API Tests...\n');
    
    // בדיקת חיבור לשרת
    const serverConnected = await testServerConnection();
    if (!serverConnected) {
        return;
    }

    // בדיקת יצירת תלונה
    const newComplaintId = await testCreateComplaint();
    
    // בדיקת קבלת כל התלונות
    await testGetAllComplaints();
    
    // בדיקת קבלת תלונה לפי ID
    await testGetComplaintById(newComplaintId);
    
    console.log('\n🎉 Tests completed!');
}

// הרצת הבדיקות
runAllTests().catch(console.error);
