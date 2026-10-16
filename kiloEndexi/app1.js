
// DOM elemanlarını seçiyoruz
const weightInput = document.getElementById('weight-input'); // Kullanıcının kilo girişi
const heightInput = document.getElementById('height-input'); // Kullanıcının boy girişi
const calculateBtn = document.getElementById('calculate-btn'); // Hesapla butonu
const resultEl = document.getElementById('result'); // Sonuç alanı

// BMI hesaplama fonksiyonu
calculateBtn.addEventListener('click', () => {
 const weight = parseFloat(weightInput.value); // Kilo değerini al
 const height = parseFloat(heightInput.value); // Boy değerini al
 // Kullanıcı girişlerini kontrol et
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height); // BMI formülü: kilo / (boy * boy)
        let category = '';
    // BMI kategorilerini belirleme
    if (bmi < 18.5) {
        category = 'Zayıf';
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        category = 'Fazla Kilolu';
    } 
    else {
        category = 'Obez';
    }
    resultEl.textContent = `BMI: ${bmi.toFixed(2)} (${category})`; // Sonucu göster
    } 
    else {
        resultEl.textContent = 'Lütfen geçerli kilo ve boy değerleri girin!';
    }
});