# 🚀 Cẩm nang Next.js Toàn Tập (Dựa trên Cosmic Explorer App)

Chào mừng bạn đến với tài liệu tổng hợp kiến thức Next.js cốt lõi. Tài liệu này được thiết kế để đi kèm với **Cosmic Explorer**, ứng dụng thực tế mà chúng ta vừa xây dựng.

Hãy đọc từ trên xuống dưới để nắm bắt vì sao Next.js được mệnh danh là Framework React full-stack phổ biến nhất hiện nay!

---

## 📂 1. App Router & Cấu trúc định tuyến (Khái niệm cốt lõi)

Từ Next.js 13+, kiến trúc đã thay đổi sang **App Router** (thư mục `app/`). Trong đó, định tuyến (Routing) hoàn toàn được quyết định qua cấu trúc thư mục của bạn.

| File/Folder | Ý nghĩa / URL tương ứng | Component trong project |
| :--- | :--- | :--- |
| `app/page.tsx` | Trang chủ (`/`) | `export default function HomePage()` |
| `app/planets/page.tsx` | Trang danh sách (`/planets`) | `export default function PlanetsPage()` |
| `app/layout.tsx` | UI bọc ngoài mọi trang (Navbar, Footer...) | `RootLayout({ children })` |

> [!NOTE]
> Mọi tệp có tên `page.tsx` sẽ tự động trở thành một route (đường dẫn web) có thể truy cập bằng trình duyệt. Các file khác trong thư mục (như `components.tsx`) không bị lộ ra ngoài nếu nó không được đặt tên là `page.tsx` hoặc `route.ts`.

---

## ⚛️ 2. Server Components vs. Client Components

Sự khác biệt lớn nhất giữa Next.js và React truyền thống (Create React App/Vite).

### 🖥️ Server Components (Mặc định)
Tất cả các tệp trong thư mục `app` mặc định là **React Server Components (RSC)**.

*   **Đặc điểm:** Không gửi JavaScript code về trình duyệt. Code được chạy tĩnh trên server. Trả về mã HTML chuẩn.
*   **Điểm mạnh:** Cải thiện SEO (vì bot Google đọc được ngay HTML), tăng tốc tải trang, bảo mật tốt (ẩn API keys, truy cập database trực tiếp không cần qua API nếu muốn).
*   **Hạn chế:** KHÔNG SỬ DỤNG được Hook (`useState`, `useEffect`) hay sự kiện (`onClick`, `onChange`).
*   **Ví dụ trong project:** `app/page.tsx` (Trang chủ), `app/planets/page.tsx` (Danh sách).

### 💻 Client Components (Cần `"use client"`)
Khi bạn cần tương tác động (Interactive) như bấm nút hay animation, bạn dùng Client Component.

*   **Đặc điểm:** Chạy một phần trên server và hydration trên trình duyệt. Có thể dùng hook, API trình duyệt (`window`).
*   **Cách sử dụng:** Bắt buộc đặt dòng `'use client';` ở **DÒNG ĐẦU TIÊN** của file.
*   **Ví dụ trong project:** `app/components/Counter.tsx` (Bộ đếm counter), `app/components/Starscape.tsx` (Vẽ Canvas sao chạy).

```tsx
// Ví dụ về Client Component
'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Đếm: {count}</button>;
}
```

> [!TIP]
> **Quy tắc vàng:** Luôn dùng Server Components làm mặc định. Chỉ chuyển sang Client Component tại một mẩu UI nhỏ khi thực sự cần tương tác/trạng thái. Đưa Client Component xuống càng sâu trong cây Component càng tốt.

---

## 📥 3. Kiến trúc Fetch Dữ liệu (Bãi bỏ `useEffect`)

Trong React thông thường, bạn phải dùng `useEffect` kết hợp `useState` dài dòng để gọi API, dẫn đến việc trang tải chậm vì phải kết xuất ra màn hình rỗng rồi mới fetch.

Trong **Next.js**, component dùng `async/await` để lấy dữ liệu ngay lúc được render ở trên máy chủ!

```tsx
// Lấy dữ liệu ngay ở Server, không cần useEffect hay State
async function getPlanets() {
  const res = await fetch('http://localhost:3000/api/planets');
  return res.json();
}

export default async function PlanetsPage() {
  const planets = await getPlanets(); 
  
  return (
    <div>
      {planets.map(planet => (
        <h1 key={planet.slug}>{planet.name}</h1>
      ))}
    </div>
  )
}
```

---

## 🚦 4. Dynamic Routing (Định tuyến động)

Làm sao để tạo đường dẫn chi tiết? Mẹo là bọc tên thư mục bởi ngoặc vuông `[...]`.

Mở cấu trúc: `app/planets/[slug]/page.tsx`
Khi truy cập URL như `/planets/earth`, biến `slug` sẽ nhận giá trị `"earth"`.

```tsx
// Dynamic Component - Tham số URL truyền qua prop "params"
export default async function PlanetPage({ params }) {
  const { slug } = await params;
  
  // Bạn có thể dùng slug (ví dụ "earth") để fetch dữ liệu chi tiết
  const planetDetail = await getPlanet(slug);
  
  return <h1>Thông tin về: {planetDetail.name}</h1>;
}
```

---

## ⏳ 5. Loading UI & Xử Lý Lỗi (Error Boundaries)

Một kỹ thuật cực đỉnh là **Streaming** của Next.js:

*   **`loading.tsx`**: Nếu bạn để file có tên là `loading.tsx` trong một thư mục chữ như `/planets/`, khi `page.tsx` ở thư mục đó chưa fetch dữ liệu xong, Next.js tự động hiển thị UI của `loading.tsx` lên màn hình thay vì làm website bị đóng băng. Đây là cơ sở tạo ra trải nghiệm người dùng siêu mượt.
*   **Xử lý không tìm thấy (404)**: Gọi hàm `notFound()` từ gói `next/navigation` để ném người dùng sang trang thiết kế 404 tùy chỉnh.

---

## 🗄️ 6. Route Handlers (Tự viết API Backend)

Next.js cho phép dự án làm luôn cả Backend. Không cần Express/NestJS nếu dự án đơn giản.

*   Cách làm: Hãy đặt file là `route.ts` thay vì `page.tsx`.
*   Giống như project chúng ta có file: `app/api/planets/route.ts`

```typescript
// Định nghĩa Route backend HTTP GET
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [ { id: 1, name: 'Earth' } ];
  return NextResponse.json(data);
}
```
*Truy cập trực tiếp `http://localhost:3000/api/planets` bạn sẽ thấy server trả về chuỗi JSON.*

---

## 🎨 7. Layouts & Metadata (SEO)

*   **Nested Layouts:** Trong thư mục `app`, tệp `layout.tsx` được dùng để bọc toàn bộ ứng dụng (`RootLayout`). Nó giữ nguyên màn hình và state giữa các lần chuyển trang (VD như thanh điều hướng NavBar hoặc nền ngân hà sẽ không bị tải lại).
*   **Metadata:** Hỗ trợ cấu hình SEO thẻ meta dễ dàng tại mọi trang.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmic Explorer | Web Vũ Trụ',
  description: 'Trang bách khoa toàn thư khám phá hệ mặt trời',
};
```

### 🎯 Tổng kết
Với `Cosmic Explorer`, bạn đã tiếp xúc với mọi mảnh ghép sức mạnh mà Next.js cung cấp cho kỹ sư Frontend hiện đại. Chúc bạn một hành trình viết code thật thú vị!
