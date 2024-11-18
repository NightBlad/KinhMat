function toggleCommentBox() {

    event.preventDefault();

    const commentSection = document.getElementById("comment-section");
    if (commentSection.style.display === "none") {
          commentSection.style.display = "block";
    } else {
          commentSection.style.display = "none";
    }
}

function submitComment() {
    const comment = document.getElementById("comment-box").value;
    const warning = document.getElementById("warning");

    if (comment.trim() === "") {
          warning.style.display = "block"; // Hiển thị cảnh báo nếu để trống
    } else {
        warning.style.display = "none"; // Ẩn cảnh báo nếu có nội dung
          alert("Ý kiến của bạn đã được gửi. Cảm ơn bạn!");
      // Reset ô nhập bình luận sau khi gửi
          document.getElementById("comment-box").value = "";
    }
}	
let isExpanded = false; // Biến trạng thái để theo dõi nội dung

function showMore(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

  const textContent = document.getElementById("text-content");

  if (isExpanded) {
    // Nếu nội dung đang được mở rộng, thu gọn lại
    textContent.textContent = "4 Cách chọn kính phù hợp với khuôn mặt...";
    textContent.style.whiteSpace = "nowrap";
    textContent.style.overflow = "hidden";
    textContent.style.textOverflow = "ellipsis";
  } else {
    // Nếu nội dung đang được thu gọn, mở rộng ra
    textContent.textContent = "4 Cách chọn kính phù hợp với khuôn mặt. Chi tiết về từng cách sẽ được mô tả đầy đủ khi nhấn vào phần này.";
    textContent.style.whiteSpace = "normal";
    textContent.style.overflow = "visible";
    textContent.style.textOverflow = "clip";
  }

  // Đổi trạng thái
  isExpanded = !isExpanded;
  const toggleButton = document.getElementById('xem-thm');
  toggleButton.textContent = isExpanded ? "Ẩn bớt" : "Xem thêm";
}

function showMore2(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

  const textContent = document.getElementById("hidden-text");

  if (isExpanded) {
    // Nếu nội dung đang được mở rộng, thu gọn lại
    textContent.textContent = "tất cả sản phẩm nhân ngày đại lễ";
    textContent.style.whiteSpace = "nowrap";
    textContent.style.overflow = "hidden";
    textContent.style.textOverflow = "ellipsis";
  } else {
    // Nếu nội dung đang được thu gọn, mở rộng ra
    textContent.textContent = "tất cả sản phẩm nhân ngày đại lễ 30/4 - 01/05";
    textContent.style.whiteSpace = "normal";
    textContent.style.overflow = "visible";
    textContent.style.textOverflow = "clip";
  }

  // Đổi trạng thái
  isExpanded = !isExpanded;
  const toggleButton = document.getElementById('toggle-text');
  toggleButton.textContent = isExpanded ? "Ẩn bớt" : "Xem thêm";
}

function toggleSearchBox() {
  const searchBox = document.getElementById("search-box");

  if (searchBox.style.display === "none") {
        searchBox.style.display = "block"; // Hiển thị ô tìm kiếm
  } else {
        searchBox.style.display = "none"; // Ẩn ô tìm kiếm
  }
}

document.querySelectorAll('.gng-knh-cn').forEach(item => {
  item.addEventListener('click', function() {
      // Xóa lớp 'active' khỏi tất cả các mục
      document.querySelectorAll('.gng-knh-cn').forEach(link => {
          link.classList.remove('active');
      });
      // Thêm lớp 'active' cho mục được nhấn
      this.classList.add('active');
  });
});

function applyDynamicScale() {
  const homeElement = document.querySelector('.news-detail');
  const minWidth = 430;
  const scaleFactor = 0.295;

  if (window.innerWidth >= minWidth) {
      const dynamicScale = (window.innerWidth / minWidth) * scaleFactor;
      homeElement.style.transform = `scale(${dynamicScale})`;
      homeElement.style.transformOrigin = 'top left';
  } else {
      homeElement.style.transform = '';
      homeElement.style.transformOrigin = '';
  }
}

// Apply the scale when the page loads
window.addEventListener('load', applyDynamicScale);

// Apply the scale when the window is resized
window.addEventListener('resize', applyDynamicScale);
  