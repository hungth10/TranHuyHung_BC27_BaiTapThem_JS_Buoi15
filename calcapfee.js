// hiển thị số kết nối nếu khách hàng là doanh nghiệp
function catergory() {
  var catergory = document.getElementById("catergory").value;

  if (catergory === "Doanh Nghiệp") {
    document.getElementById("num-of-connection").style.display = "block";
    return "Doanh Nghiệp";
  } else if (catergory === "Nhà Dân") {
    document.getElementById("num-of-connection").style.display = "none";
    return "Nhà Dân";
  } else {
    document.getElementById("num-of-connection").style.display = "none";
    alert("Hãy chọn loại khách hàng");
  }

  // if (catergory === "Doanh Nghiệp") {
  //     document.querySelector(".num-of-connection").style.display = "block";
  // } else {
  //     document.querySelector(".num-of-connection").style.display = "none";
  // }
}

// tính phí của khách hàng và in ra kết quả
function calcCapFee() {
  // B1 DOM và lấy các giá trị đầu vào
  var numConnection = +document.querySelector("#numOfConnection").value;
  var clientID = document.querySelector("#clientID").value;
  var proChannel = +document.querySelector("#proChannel").value;

  // B2 tính phí cáp
  var fee = 0;
  var clientType = catergory();

  if (clientType === "Doanh Nghiệp") {
    fee = calcEnterpriseFee(numConnection, proChannel);
  } else if (clientType === "Nhà Dân") {
    fee = calcHomeFee(proChannel);
  }

  // B3 in ra kết quả
  document.getElementById("result-bt2").style.display = "block";
  document.querySelector(".name-bt2").innerHTML = `
    Số tiền khách hàng ${clientID} phải trả là:`;
  document.querySelector('#print-rs-bt2').innerHTML = "$ " + fee;
}

// tính phí khách hàng là Nhà Dân
function calcHomeFee(num_channel) {
  var price = 4.5 + 20.5 + num_channel * 7.5;
  return price;
}

// Tính phí khách hàng là Doanh Nghiệp
function calcEnterpriseFee(num_connect, num_channel) {
  var price = 15 + 75 + num_connect * 5 + num_channel * 50;
  return price;
}
