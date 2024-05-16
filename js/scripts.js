// Bài tập 1: Tính tiền lương nhân viên
document.getElementById('bai-tap-1-form').onsubmit = function() {
    tinhTienLuong();
    return false;
}

function tinhTienLuong() {
    let luongMoiNgay = Number(document.getElementById('bai-1-luong-moi-ngay').value);
    let soNgayLam = Number(document.getElementById('bai-1-so-ngay').value);
    let ketQua = document.getElementById('bai-1-ket-qua');
    
    ketQua.innerHTML = dinhDangTien(luongMoiNgay * soNgayLam);
}


// Bài tập 2: Tính giá trị trung bình 
document.getElementById('bai-tap-2-form').onsubmit = function() {
    tinhGiaTriTrungBinh();
    return false;
}

function tinhGiaTriTrungBinh() {
    let soThu1 = Number(document.getElementById('bai-2-so-thu-1').value);
    let soThu2 = Number(document.getElementById('bai-2-so-thu-2').value);
    let soThu3 = Number(document.getElementById('bai-2-so-thu-3').value);
    let soThu4 = Number(document.getElementById('bai-2-so-thu-4').value);
    let soThu5 = Number(document.getElementById('bai-2-so-thu-5').value);
    let ketQua = document.getElementById('bai-2-ket-qua');

    ketQua.innerHTML = Number((soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5);
}

// Bài tập 3: Quy đổi tiền
document.getElementById('bai-tap-3-form').onsubmit = function() {
    quyDoiTien();
    return false;
}

function quyDoiTien() {
    let tyLeQuyDoi = 23500;
    let soTien = Number(document.getElementById('bai-3-so-tien').value);
    let ketQua = document.getElementById('bai-3-ket-qua');

    ketQua.innerHTML = dinhDangTien(soTien * tyLeQuyDoi);
}

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById('bai-tap-4-form').onsubmit = function() {
    tinhDienTichVaChuVi();
    return false;
}

function tinhDienTichVaChuVi() {
    let chieuDai = Number(document.getElementById('bai-4-chieu-dai').value);
    let chieuRong = Number(document.getElementById('bai-4-chieu-rong').value);
    let ketQua = document.getElementById('bai-4-ket-qua');

    ketQua.innerHTML = `Diện tích: ${chieuDai * chieuRong}; Chu vi: ${(chieuDai + chieuRong) * 2}`;
}

// Bài tập 5: Tính tổng 2 ký số
document.getElementById('bai-tap-5-form').onsubmit = function() {
    tinhTong2KySo();
    return false;
}

function tinhTong2KySo() {
    let so2ChuSo = Number(document.getElementById('bai-5-so-2-chu-so').value);
    let ketQua = document.getElementById('bai-5-ket-qua');

    ketQua.innerHTML = Math.floor(so2ChuSo/10) + Number(so2ChuSo % 10) ;
}

// Hàm chung
function dinhDangTien(soTien) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
}