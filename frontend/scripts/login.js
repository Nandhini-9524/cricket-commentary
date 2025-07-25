document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
      alert('Login successful');
      localStorage.setItem('token', data.token); // Save the token to localStorage
      window.location.href = 'upload.html';
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Error:', err);
  }
});

  