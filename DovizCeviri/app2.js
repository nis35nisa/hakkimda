
// DOM elemanlarını seçiyoruz
const amountInput = document.getElementById('amount'); // Miktar giriş alanı
const currencySelect = document.getElementById('currency'); // Döviz seçimi
const convertBtn = document.getElementById('convert-btn'); // Çevir butonu
const resultDisplay = document.getElementById('result'); // Sonuç gösterimi

// Döviz çevirme fonksiyonu
function convertCurrency() {
 const amount = parseFloat(amountInput.value); // Kullanıcının girdiği miktarı alıyoruz
 const rate = parseFloat(currencySelect.value); // Seçilen döviz kurunu alıyoruz
    if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = 'Lütfen geçerli bir miktar girin!';
        resultDisplay.style.color = 'red';
        return;
    }
 const result = (amount * rate).toFixed(2); // Döviz çevirimini yapıyoruz
 resultDisplay.textContent = `Sonuç: ${result}`;
 resultDisplay.style.color = 'green';
}

// Çevir butonuna tıklama olayını dinliyoruz
convertBtn.addEventListener('click', convertCurrency);