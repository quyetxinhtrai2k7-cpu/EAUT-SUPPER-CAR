// Xu ly form lien he

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Chi xu ly khi trang hien tai co form lien he.
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone= document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        if (name === "") {
            alert("Vui lòng nhập họ và tên của bạn.");
            return;
        }

        if (!email.includes("@gmail.com")) {
            alert("Email không hợp lệ, vui lòng nhập lại.");
            return;
        }
        if(phone.length <10){
            alert("Số điện thoại không hợp lệ");
            return;
        }
        if(phone.length >10){
            alert("Số điện thoại không hợp lệ");
            return;
        }

        if (message.length < 10) {
            alert("Nội dung phải có ít nhất 10 ký tự, hãy nhập lại.");
            return;
        }

        alert("Gửi thông tin thành công!");
        alert("Cảm ơn bạn đã góp ý");
        form.reset();
    });
});
