export default function NotFound() {
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
        404
      </h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00a0e3' }}>
        Trang không tìm thấy
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <a 
        href="/" 
        style={{
          padding: '12px 24px',
          backgroundColor: '#003e80',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}
      >
        Về trang chủ
      </a>
    </div>
  );
}