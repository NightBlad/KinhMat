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

        // Make input fields visible when focused
        document.querySelectorAll('.frame-child, .frame-item').forEach(inputDiv => {
            inputDiv.style.display = 'block';
        });

        // Validate form
        function validateForm() {
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            const message = document.getElementById('message').value.trim();

            // Regular expressions for validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            const phonePattern = /^[0-9]{10,}$/; // Modify as needed for your phone number format

            if (!fullName) {
                alert("Please enter your full name.");
                return;
            }
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email.");
                return;
            }
            if (!phoneNumber.match(phonePattern)) {
                alert("Please enter a valid phone number (at least 10 digits).");
                return;
            }
            if (!message) {
                alert("Please enter your message.");
                return;
            }

            alert("Form submitted successfully!");
        }
