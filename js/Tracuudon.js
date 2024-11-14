// Lấy các phần tử từ DOM
const searchButton = document.querySelector('.search-button');
const phoneInput = document.querySelector('.input-field input[placeholder="Nhập số điện thoại*"]');
const orderCodeInput = document.querySelector('.input-field input[placeholder="Mã đơn hàng*"]');

// Kiểm tra khi nhấn nút "Tìm kiếm đơn hàng"
searchButton.addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn form submit nếu có
  
  const phoneValue = phoneInput.value.trim();
  const orderCodeValue = orderCodeInput.value.trim();

  // Kiểm tra số điện thoại
  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phoneValue)) {
    alert("Số điện thoại phải bao gồm đúng 11 chữ số và không chứa ký tự đặc biệt hoặc chữ cái.");
    return;
  }

  // Kiểm tra mã đơn hàng
  const orderCodeRegex = /^[A-Za-z0-9]{8}$/;
  if (!orderCodeRegex.test(orderCodeValue)) {
    alert("Mã đơn hàng phải có đúng 8 ký tự và chỉ chứa chữ và số.");
    return;
  }

  // Nếu tất cả các điều kiện đều đúng, bạn có thể xử lý tiếp (ví dụ: gửi form)
  alert("Tìm kiếm đơn hàng thành công!");
});