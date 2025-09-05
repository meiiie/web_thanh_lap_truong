import Link from 'next/link';

export default function NotFound() {
  return (
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
      <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', color: '#003e80' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0', color: '#333' }}>
        Trang không tìm thấy
      </h2>
      <p style={{ fontSize: '1.2rem', margin: '0 0 2rem 0', color: '#666' }}>
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#003e80',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}
      >
        Về trang chủ
      </Link>
    </div>
  );
}
