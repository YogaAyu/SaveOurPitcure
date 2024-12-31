const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana
    if (username === 'admin' && password === '12345') {
        alert('Login berhasil!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Username atau password salah!';
    }
});
