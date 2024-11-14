document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử từ DOM
    const searchButton = document.querySelector('.search-button');
    const phoneInput = document.querySelector('#phone-input');
    const orderCodeInput = document.querySelector('#order-code-input');

    // Kiểm tra khi nhấn nút "Tìm kiếm đơn hàng"
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn form submit nếu có

        console.log("Nút tìm kiếm đã được nhấn"); // Kiểm tra xem sự kiện click có hoạt động không

        const phoneValue = phoneInput.value.trim();
        const orderCodeValue = orderCodeInput.value.trim();

        // Kiểm tra số điện thoại
        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phoneValue)) {
            alert("Số điện thoại phải bao gồm ít nhất 10 chữ số và không chứa ký tự đặc biệt hoặc chữ cái.");
            return;
        }

        // Kiểm tra mã đơn hàng
        const orderCodeRegex = /^[A-Za-z0-9]{8}$/;
        if (!orderCodeRegex.test(orderCodeValue)) {
            alert("Mã đơn hàng phải có đúng 8 ký tự.");
            return;
        }

        // Nếu tất cả các điều kiện đều đúng, bạn có thể xử lý tiếp (ví dụ: gửi form)
        alert("Đang chuyển đến thông tin đơn hàng của bạn!");
    });
});