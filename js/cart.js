// Tăng/Giảm số lượng và Cập nhật tổng
document.querySelectorAll(".quantity-button").forEach(button => {
  button.addEventListener("click", () => {
    const quantityDisplay = button.parentNode.querySelector(".quantity-display");
    let quantity = parseInt(quantityDisplay.textContent);
    
    const priceDisplay = button.closest(".frame-parent19").querySelector(".div1");
    const unitPrice = 1990000; // Đặt giá trị mặc định của kính là 1,990,000

    // Cập nhật số lượng
    if (button.classList.contains("increase")) {
      quantity++;
    } else if (button.classList.contains("decrease") && quantity > 1) {
      quantity--;
    }
    quantityDisplay.textContent = quantity;

    // Tính toán tổng tiền cho sản phẩm đó
    const productTotal = unitPrice * quantity;
    priceDisplay.textContent = `${productTotal.toLocaleString()} đ`;

    // Cập nhật tổng số tiền
    updateTotal();
  });
});

// Cập nhật tổng phụ và tổng tiền
function updateTotal() {
  const subtotalDisplay = document.getElementById("sub-total");
  const totalDisplay = document.getElementById("total-price");
  
  let subtotal = 0;
  document.querySelectorAll(".div1").forEach(priceDisplay => {
    subtotal += parseInt(priceDisplay.textContent.replace(/[^0-9]/g, ""));
  });
  
  const total = subtotal;  // Không tính phí giao hàng
  
  subtotalDisplay.textContent = `${subtotal.toLocaleString()} đ`;
  totalDisplay.textContent = `${total.toLocaleString()} đ`;
}

// Kiểm tra form và nút thanh toán
document.getElementById("checkout-button").addEventListener("click", () => {
  const name = document.querySelector('input[placeholder="Nhập họ và tên"]').value;
  const phone = document.querySelector('input[placeholder="Nhập số điện thoại"]').value;
  const email = document.querySelector('input[placeholder="Nhập email"]').value;
  const address = document.querySelector('input[placeholder="Nhập địa chỉ chi tiết"]').value;
  const gender = document.querySelector('input[name="gender"]:checked'); // Kiểm tra radio button đã chọn

  // Kiểm tra các trường bắt buộc
  if (!name || !phone || !email || !address || !gender) {
    alert("Vui lòng điền đầy đủ thông tin và chọn giới tính!");
    return;
  }

  // Kiểm tra họ và tên chỉ được chứa chữ cái và khoảng trắng
  if (!/^[A-Za-z\sÀ-ỹ]+$/.test(name)) {
    alert("Họ và tên chỉ được chứa chữ cái và khoảng trắng!");
    return;
  }

  // Kiểm tra định dạng số điện thoại (chỉ chứa chữ số và có 10 chữ số)
  if (!/^\d{10}$/.test(phone)) {
    alert("Số điện thoại phải chứa đúng 10 chữ số!");
    return;
  }

 // Kiểm tra định dạng email (phải có "@", tên miền và kết thúc bằng đuôi hợp lệ như .com, .net, .vn, v.v.)
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  alert("Email phải có định dạng hợp lệ, ví dụ: example@gmail.com!");
  return;
}

  // Nếu tất cả đều hợp lệ
  alert("Đơn hàng của bạn đã được đặt thành công!");
  // Tiến hành gửi đơn hàng ở đây
});
