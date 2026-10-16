
// Rastgele bir sayı oluşturuyoruz (1 ile 100 arasında)
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Kullanıcının tahminlerini ve deneme sayısını takip etmek için değişkenler
let attempts = 0; // Deneme sayısı

// DOM elemanlarını seçiyoruz
const guessInput = document.getElementById('guess-input'); // Kullanıcının tahmin girişi
const submitButton = document.getElementById('submit-btn'); // Tahmin et butonu
const feedback = document.getElementById('feedback'); // Geri bildirim mesajı
const attemptsDisplay = document.getElementById('attempts'); // Deneme sayısını göstermek için

// Tahmin etme fonksiyonu
function checkGuess() {
 const guess = Number(guessInput.value); // Kullanıcının girdisini sayı olarak alıyoruz
 
 // Kullanıcı girişi geçerli mi kontrol ediyoruz
 if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = 'Lütfen 1 ile 100 arasında bir sayı girin!';
    feedback.style.color = 'red';
    return;
 }

 // Deneme sayısını artırıyoruz
 attempts++;
 attemptsDisplay.textContent = attempts; // Deneme sayısını ekrana yazıyoruz

 // Kullanıcının tahmini ile rastgele sayıyı karşılaştırıyoruz
 if (guess === randomNumber) {
    feedback.textContent = `Tebrikler! Doğru tahmin: ${randomNumber}.`;
    feedback.style.color = 'green';
    submitButton.disabled = true; // Doğru tahmin edildikten sonra butonu devre dışı bırakıyoruz
 } 

 else if (guess < randomNumber) {
    feedback.textContent = 'Daha büyük bir sayı deneyin.';
    feedback.style.color = 'orange';
 } 

 else {
    feedback.textContent = 'Daha küçük bir sayı deneyin.';
    feedback.style.color = 'orange';
 }
 
 // Tahmin alanını temizliyoruz
 guessInput.value = ''; }
 
// Tahmin butonuna tıklama olayını tanımlıyoruz
submitButton.addEventListener('click', checkGuess);