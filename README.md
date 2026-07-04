# Reanty Real Estate Landing Page

Đây là bài test frontend dựng giao diện landing page bất động sản từ thiết kế Figma. Dự án được xây dựng bằng HTML và CSS thuần, không sử dụng framework CSS, framework JavaScript, build tool hay CDN icon bên ngoài.

## Liên Kết Nộp Bài

- Source code: `https://github.com/your-username/reanty-real-estate-landing-page`
- Demo URL: `https://reanty-real-estate-landing-page.vercel.app`
- Mock data URL: `https://reanty-real-estate-landing-page.vercel.app/data/db.json`

Sau khi deploy, thay các đường dẫn mẫu ở trên bằng link GitHub và Vercel thật.

## Yêu Cầu Đã Đáp Ứng

- Code thuần HTML và CSS
- Không dùng framework hỗ trợ
- Giao diện responsive trên màn hình PC và smartphone
- Sử dụng đường dẫn tương đối trong source code
- Có URL demo để kiểm tra trực tiếp
- Có file mock data tĩnh phục vụ yêu cầu data server

## Công Nghệ Sử Dụng

- HTML5
- CSS3
- Static JSON mock data
- Vercel để deploy static site

## Cấu Trúc Dự Án

```text
reanty-real-estate-landing-page/
├─ index.html
├─ README.md
├─ data/
│  └─ db.json
├─ assets/
│  ├─ icons/
│  └─ images/
└─ css/
   ├─ base.css
   ├─ header.css
   ├─ hero.css
   ├─ guide.css
   ├─ about.css
   ├─ today.css
   ├─ services.css
   ├─ featured.css
   ├─ unit.css
   ├─ testimonial.css
   ├─ projects.css
   ├─ blog.css
   ├─ contact.css
   ├─ footer.css
   └─ style.css
```

## Cách Tổ Chức CSS

CSS được tách theo từng phần giao diện để dễ đọc, dễ sửa và dễ kiểm tra.

- `base.css`: reset, style dùng chung, container
- `header.css`: top bar và thanh điều hướng
- `hero.css`: phần hero đầu trang
- `guide.css`: phần buyer/renter/seller guide
- `about.css`: phần Dream Living Spaces
- `today.css`: phần Today Sells Properties
- `services.css`: phần Services provide for you
- `featured.css`: phần Featured Property
- `unit.css`: phần Unit No. 9A
- `testimonial.css`: phần khách hàng đánh giá
- `projects.css`: phần project CTA và form subscribe
- `blog.css`: phần blog
- `contact.css`: phần contact form
- `footer.css`: phần footer

`style.css` chỉ giữ ghi chú ngắn vì style thật đã được tách sang các file theo section.

## Cách Chạy Local

Cách đơn giản nhất là dùng VS Code Live Server:

1. Mở thư mục dự án trong VS Code.
2. Click chuột phải vào `index.html`.
3. Chọn `Open with Live Server`.

Hoặc có thể mở trực tiếp file `index.html` bằng trình duyệt.

## Mock Data / Data Server

Dự án này là HTML/CSS tĩnh nên không fetch dữ liệu từ API. File mock data được thêm vào để đáp ứng yêu cầu có data server/mock data.

- File local: `./data/db.json`
- Khi deploy Vercel: `/data/db.json`

Sau khi deploy, có thể truy cập bằng đường dẫn:

```text
https://your-vercel-domain.vercel.app/data/db.json
```

## Deploy Lên Vercel

Cấu hình khuyến nghị khi tạo project trên Vercel:

```text
Application Preset: Other
Root Directory: ./
Build Command: để trống
Output Directory: để trống hoặc ./
Install Command: để trống
```

Vì đây là dự án HTML/CSS tĩnh, Vercel có thể serve trực tiếp file `index.html` ở thư mục gốc.

## Ghi Chú

- Tất cả CSS, hình ảnh, icon và data đều dùng đường dẫn tương đối như `./css/...`, `./assets/icons/...`, `./data/db.json`.
- Icon được lưu local dưới dạng SVG để tránh phụ thuộc CDN bên ngoài.
- Layout có media query để hiển thị tốt trên PC, tablet và smartphone.
- Các khối ảnh màu xám là placeholder theo thiết kế Figma khi chưa có ảnh thật tương ứng.
