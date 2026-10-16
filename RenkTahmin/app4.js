
// DOM elemanlarını seçiyoruz
const colorCodeEl = document.getElementById('color-code'); // Renk kodunu gösteren alan
const optionsEl = document.getElementById('options'); // Seçenekler
const feedbackEl = document.getElementById('feedback'); // Geri bildirim
const newGameBtn = document.getElementById('new-game-btn'); // Yeni oyun butonu
let correctColor; // Doğru renk

// Rastgele bir renk kodu oluşturma fonksiyonu
function generateRandomColor() {
 const r = Math.floor(Math.random() * 256); // 0-255 arasında kırmızı değeri
 const g = Math.floor(Math.random() * 256); // 0-255 arasında yeşil değeri
 const b = Math.floor(Math.random() * 256); // 0-255 arasında mavi değeri
 return `rgb(${r}, ${g}, ${b})`; // RGB formatında renk döndür
}

// Yeni oyun başlatma fonksiyonu
function startNewGame() {
 feedbackEl.textContent = ''; // Geri bildirimi temizle
 optionsEl.innerHTML = ''; // Önceki seçenekleri temizle
 correctColor = generateRandomColor(); // Doğru rengi belirle
 colorCodeEl.textContent = correctColor; // Doğru renk kodunu soruya yaz
 const options = []; // Seçenekler için boş bir dizi oluştur

 // Doğru rengi seçeneklere ekle
 options.push(correctColor);

 // Rastgele 2 yanlış renk oluştur ve ekle
    for (let i = 0; i < 2; i++) {
         options.push(generateRandomColor());
    }
 // Seçenekleri karıştır
 options.sort(() => Math.random() - 0.5);

 // Seçenekleri ekrana yaz
 options.forEach((color) => {
 const button = document.createElement('button');
 button.textContent = color;
 button.style.backgroundColor = color;

 // Doğru renk seçildiyse
    if (color === correctColor) {
        button.addEventListener('click', () => {
         feedbackEl.textContent = 'Doğru!';
         feedbackEl.style.color = 'green';
        button.classList.add('correct');
    disableButtons(); });
    } 
 else {
    // Yanlış renk seçildiyse
    button.addEventListener('click', () => {
    feedbackEl.textContent = 'Yanlış! Tekrar deneyin.';
    feedbackEl.style.color = 'red';
    button.classList.add('wrong');
    // Yanlış seçeneği devre dışı bırak
    button.disabled = true; });
    }
 optionsEl.appendChild(button); // Butonu seçenekler alanına ekle
 });
    }   
        // Tüm butonları devre dışı bırakma fonksiyonu
    function disableButtons() {
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach((btn) => (btn.disabled = true));
    }
// Yeni oyun başlat butonuna tıklama olayını dinle
newGameBtn.addEventListener('click', startNewGame);

// Sayfa yüklendiğinde oyunu başlat
startNewGame();