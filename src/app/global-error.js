'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', color: '#dc3545' }}>
            Lỗi hệ thống
          </h1>
          <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0', color: '#333' }}>
            Đã xảy ra lỗi nghiêm trọng
          </h2>
          <p style={{ fontSize: '1.2rem', margin: '0 0 2rem 0', color: '#666' }}>
            Xin lỗi vì sự bất tiện này. Vui lòng tải lại trang hoặc liên hệ với chúng tôi.
          </p>
          <button
            onClick={reset}
            style={{
              padding: '12px 24px',
              backgroundColor: '#003e80',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Tải lại trang
          </button>
        </div>
      </body>
    </html>
  );
}
