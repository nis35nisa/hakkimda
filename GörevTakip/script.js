// Yüzeysel seçiciler ile elementlere ulaşma
const taskList = document.querySelector('#taskList');

// Görev listesindeki tıklamaları dinleme (Event Delegation)
taskList.addEventListener('click', function(e) {
    // Eğer tıklanan eleman silme butonuyda
    if (e.target.classList.contains('delete-btn')) {
        // Butonun ait olduğu satırı (li) seç ve uçur
        const listItem = e.target.parentElement;
        
        // Şık bir kaybolma efekti (Opsiyonel ama havayı çok değiştirir)
        listItem.style.opacity = '0';
        listItem.style.transition = '0.3s ease';
        
        setTimeout(() => {
            listItem.remove();
        }, 300);
    }
});