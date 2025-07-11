document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
      alert('Sign-up successful');
      window.location.href = 'login.html';
    } else {
      alert(data.message || 'Sign-up failed');
    }
  } catch (err) {
    console.error('Error:', err);
  }
});

  