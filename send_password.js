function sendPassword() {
    var password = document.getElementById("passwordInput").value;
    
    fetch("https://script.google.com/macros/s/AKfycbyR_7jUcRyB7oiTacNJnP77KZ_OPGjbXpSbByBAudVA9uRq4GsPzCyGIU9nXlWNTNCF/exec", { // เปลี่ยนเป็น Web App URL ของคุณ
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

