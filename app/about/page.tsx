import Link from 'next/link'

export default function AboutPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Trang About</h1>
      <p>Đây là route /about</p>

      <div style={{ marginTop: 16 }}>
        <Link href="/">Về trang chủ</Link>
        <br />
      </div>
    </main>
  )
}