export default function Loading() {
  return (
    <div className="container-custom loading-container">
      <div className="loading-spinner"></div>
      <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Fetching from the database...</p>
    </div>
  );
}
