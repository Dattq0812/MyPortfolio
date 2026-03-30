// Đợi cho HTML load xong mới chạy các hiệu ứng
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hiệu ứng 1: Xoay ảnh đại diện (Avatar) khi click vào ---
    const avatar = document.querySelector('.avatar');
    let isRotated = false; // Biến kiểm tra trạng thái xoay

    // Thêm thuộc tính transition để hiệu ứng mượt mà
    avatar.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';
    avatar.style.cursor = 'pointer';

    avatar.addEventListener('click', function() {
        if (!isRotated) {
            avatar.style.transform = 'rotate(360deg) scale(1.1)'; // Xoay 360 độ và phóng to 10%
            avatar.style.boxShadow = '0 8px 20px rgba(0, 123, 255, 0.4)'; // Bóng đổ màu xanh dương hợp với theme
            isRotated = true;
        } else {
            avatar.style.transform = 'rotate(0deg) scale(1)'; // Trả về như cũ
            avatar.style.boxShadow = 'none'; // Reset bóng
            isRotated = false;
        }
    });

    // --- Hiệu ứng 2: Trượt và đổi màu các mục thông tin khi rê chuột ---
    const infoItems = document.querySelectorAll('.info-item');

    infoItems.forEach(item => {
        // Thêm transition và đệm (padding) để khối thông tin đẹp hơn khi hover
        item.style.transition = 'all 0.3s ease';
        item.style.cursor = 'pointer';
        item.style.borderRadius = '6px';
        item.style.padding = '10px'; // Thêm khoảng không gian bên trong
        item.style.margin = '0 -10px'; // Bù trừ padding để chữ vẫn thẳng hàng

        // Khi rê chuột vào (Hover)
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f0f8ff'; // Nền xanh nhạt (AliceBlue) thay vì trắng
            item.style.transform = 'translateX(10px)'; // Dịch sang phải 10px
            item.style.borderBottomColor = 'transparent'; // Ẩn viền đứt nét ở dưới cho gọn
        });

        // Khi đưa chuột ra
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent'; // Trở lại trong suốt
            item.style.transform = 'translateX(0)'; // Trở lại vị trí cũ
            item.style.borderBottomColor = '#dee2e6'; // Hiện lại viền đứt nét
        });

        // --- Hiệu ứng 3: Hiển thị thông báo khi click vào từng dòng ---
        item.addEventListener('click', () => {
            // Lấy nội dung của span thứ nhất (
