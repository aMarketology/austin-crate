// Test script to verify SendGrid API is working
// Run with: node test-sendgrid.js

const testData = {
  name: "Test User",
  email: "test@example.com",
  phone: "512-555-1234",
  serviceType: "shipping",
  length: "24",
  width: "18",
  height: "12",
  weight: "50",
  zipcode: "78703",
  message: "This is a test submission to verify SendGrid is working."
};

async function testContactForm() {
  console.log('Testing contact form API...\n');
  console.log('Sending data:', JSON.stringify(testData, null, 2));
  console.log('\n');

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const data = await response.json();
    
    console.log('Response Status:', response.status);
    console.log('Response Data:', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('\n✅ SUCCESS! Email should be sent to hello@austincrate.com');
      console.log('Check your inbox for the test email.');
    } else {
      console.log('\n❌ FAILED! Check the error details above.');
    }
  } catch (error) {
    console.log('\n❌ ERROR:', error.message);
    console.log('Make sure the dev server is running: npm run dev');
  }
}

testContactForm();
