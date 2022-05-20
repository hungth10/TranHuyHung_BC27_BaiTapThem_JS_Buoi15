function calctax() {
  // B1 DOM tới các dữ liệu đầu vào
  var name = document.getElementById("userName-bt1").value;
  var yearIncome = +document.getElementById("yearIncome").value;
  var manDependent = +document.getElementById("manDependent").value;

  // B2 tính thuế thu nhập cá nhân
  var incomeTax = yearIncome - 4000000 - manDependent * 1600000;

  var tax = calcPersonalTax(incomeTax).toLocaleString();

    // B3 in kết quả ra màn hình
    document.getElementById('result-bt1').style.display = 'block';
    document.querySelector('.name-bt1').innerHTML = "Họ và Tên: " + name;
    document.getElementById('print-rs-bt1').innerHTML = `
    Thuế thu nhập cá nhân của bạn là:
    <p style="font-size: 25px;">${tax}</p>
    `
}

// hàm tính thuế cá nhân
function calcPersonalTax(a) {
  var tax = 0;
  if (a <= 60000000) {
    tax = a * 0.05;
  } else if (a <= 120000000) {
    tax = a * 0.1;
  } else if (a <= 210000000) {
    tax = a * 0.15;
  } else if (a <= 384000000) {
    tax = a * 0.2;
  } else if (a <= 624000000) {
    tax = a * 0.25;
  } else if (a <= 960000000) {
    tax = a * 0.3;
  } else {
    tax = a * 0.35;
  }

  return tax;
}
