
// DOM elemanlarını seçiyoruz
const dateInput = document.getElementById('date-input'); // Tarih girişi
const daysInput = document.getElementById('days-input'); // Gün girişi
const calculateBtn = document.getElementById('calculate-btn'); // Hesapla butonu
const resultEl = document.getElementById('result'); // Sonuç alanı


// Hesaplama fonksiyonu
calculateBtn.addEventListener('click', () => {
 const startDate = new Date(dateInput.value); // Kullanıcının girdiği tarihi al
 const daysToAdd = parseInt(daysInput.value); // Eklenmesi gereken gün sayısını al


 // Girdi doğrulaması
    if (!isNaN(startDate.getTime()) && !isNaN(daysToAdd)) {
 const resultDate = new Date(startDate); // Tarihi kopyala
 resultDate.setDate(resultDate.getDate() + daysToAdd); // Gün ekle
 resultEl.textContent = `Sonuç Tarihi: ${resultDate.toDateString()}`; // Sonucu göster
    } 
    else {
        resultEl.textContent = 'Lütfen geçerli bir tarih ve gün sayısı girin!';
    }
} );