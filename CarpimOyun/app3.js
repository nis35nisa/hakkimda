
// DOM elemanlarını seçiyoruz
const questionEl = document.getElementById('question'); // Soru metni
const answerInput = document.getElementById('answer-input'); // Kullanıcı cevabı
const submitBtn = document.getElementById('submit-btn'); // Gönder butonu
const feedbackEl = document.getElementById('feedback'); // Geri bildirim
const scoreEl = document.getElementById('score'); // Skor gösterimi

// Başlangıç değerleri
let num1, num2; // Çarpılacak sayılar
let score = 0; // Kullanıcının skoru

// Yeni bir soru oluşturma fonksiyonu
function generateQuestion() {
 num1 = Math.floor(Math.random() * 10); // 0-9 arasında bir sayı oluştur
 num2 = Math.floor(Math.random() * 10); // 0-9 arasında bir sayı oluştur
 questionEl.textContent = `Soru: ${num1} x ${num2}`; // Soru metnini güncelle
 feedbackEl.textContent = ''; // Önceki geri bildirimi temizle
}

// Cevabı kontrol etme fonksiyonu
function checkAnswer() {
 const userAnswer = parseInt(answerInput.value); // Kullanıcının girdiği cevabı al
 const correctAnswer = num1 * num2; // Doğru cevabı hesapla
    if (isNaN(userAnswer)) {
        feedbackEl.textContent = 'Lütfen geçerli bir sayı girin!';
        feedbackEl.style.color = 'red';
        return;
    }

    // Kullanıcı doğru cevap verdiyse
    if (userAnswer === correctAnswer) {
        score++; // Skoru artır
        feedbackEl.textContent = 'Doğru!';
        feedbackEl.style.color = 'green';
    } 
    else {
        feedbackEl.textContent = `Yanlış! Doğru cevap: ${correctAnswer}`;
        feedbackEl.style.color = 'red';
    }

 // Skoru güncelle ve yeni bir soru oluştur
 scoreEl.textContent = score;
 answerInput.value = ''; // Giriş alanını temizle
 generateQuestion(); // Yeni soru oluştur
}

// Gönder butonuna tıklama olayını dinliyoruz
submitBtn.addEventListener('click', checkAnswer);

// Sayfa yüklendiğinde ilk soruyu oluşturuyoruz
generateQuestion();