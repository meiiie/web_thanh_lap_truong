'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#003e80' }}>
        Lỗi
      </h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00a0e3' }}>
        Đã xảy ra lỗi
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
        Xin lỗi, đã xảy ra lỗi không mong muốn.
      </p>
      <button 
        onClick={reset}
        style={{
          padding: '12px 24px',
          backgroundColor: '#003e80',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Thử lại
      </button>
    </div>
  );
}