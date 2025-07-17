'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// تقویم شمسی
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

export default function AdminPanel() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(null);
  const [number, setNumber] = useState('');
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState('');

  // بررسی ورود
  useEffect(() => {
    const isAuth = localStorage.getItem('admin-auth');
    if (!isAuth) {
      router.push('/admin/login');
    }
  }, []);

  // تبدیل شمسی به میلادی فرمت YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return '';
    const { year, month, day } = date;
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  // ارسال فرم
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedDate || !number || !pdf) {
      setMessage('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    const formData = new FormData();
    formData.append('date', formatDate(selectedDate));
    formData.append('number', number);
    formData.append('pdf', pdf);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('✅ نسخه با موفقیت آپلود شد');
      setNumber('');
      setPdf(null);
      setSelectedDate(null);
    } else {
      setMessage(data.error || '❌ خطایی رخ داده');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📥 افزودن نسخه جدید روزنامه</h1>

      <form onSubmit={handleUpload} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">تاریخ نسخه (شمسی)</label>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            locale="fa"
            calendarClassName="custom-calendar"
            shouldHighlightWeekends
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">شماره نسخه</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="مثلاً ۱۱۲۳"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">فایل PDF روزنامه</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          آپلود نسخه
        </button>
      </form>

      {message && (
        <p className="mt-6 text-center text-sm font-medium text-green-700">{message}</p>
      )}
    </div>
  );
}
