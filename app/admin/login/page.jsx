'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const admins = [
  { username: 'admin', password: '123456' },
  { username: 'editor', password: 'abcdef' },
];

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = admins.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (isValid) {
      localStorage.setItem('admin-auth', 'true');
      router.push('/admin');
    } else {
      setError('نام کاربری یا رمز اشتباه است');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">ورود ادمین</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
