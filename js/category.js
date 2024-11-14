function toggleAnswer(element) {

    event.preventDefault();

      var answer = element.parentElement.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
           answer.style.display = "block"; // Hiển thị câu trả lời
     } else {
        answer.style.display = "none"; // Ẩn câu trả lời
      }
}

function togglePhoneNumber(){

    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number");
    if (phoneNumber.style.display === "none") {
      phoneNumber.style.display = "block";
    } else {
          phoneNumber.style.display = "none";
    }			
}

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
  