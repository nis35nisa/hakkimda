<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proje Takip Paneli</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="app-container">
        <aside class="sidebar">
            <div class="profile-card">
                <h3>Yazılım Geliştirici</h3>
                <p>MCBÜ Turgutlu MYO</p>
                <span class="badge">Derece Mezunu</span>
            </div>
            <nav class="menu">
                <a href="#" class="active">📋 Görevlerim</a>
                <a href="#">📊 İstatistikler</a>
            </nav>
        </aside>

        <main class="main-content">
            <header>
                <h2>Proje Görev Yönetimi</h2>
                <p>Temel PHP & JS Entegrasyonu Örneği</p>
            </header>

            <section class="form-section">
                <form id="taskForm" action="" method="POST">
                    <input type="text" id="taskInput" name="gorev_adi" placeholder="Yeni bir görev yazın..." required>
                    <button type="submit" id="addBtn">Ekle</button>
                </form>
            </section>

            <section class="task-section">
                <h3>Aktif Görevler</h3>
                <ul id="taskList">
                    <?php
                    // Temel PHP Bilgisi Gösterimi
                    // Gerçek bir senaryoda bu veriler MySQL'den gelir. 
                    // Şimdilik temel düzey bilgimizi göstermek için bir dizi (array) oluşturalım:
                    $gorevler = [
                        "HTML5/CSS3 Arayüz tasarımı tamamlanacak",
                        "JavaScript DOM seçicileri ile dinamik yapı kurulacak",
                        "PHP dinamik dizi döngüsü entegre edilecek"
                    ];

                    // Form gönderildiyse yeni görevi diziye eklemiş gibi yapalım (Temel POST kontrolü)
                    if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['gorev_adi'])) {
                        $yeni_gorev = htmlspecialchars($_POST['gorev_adi']);
                        array_push($gorevler, $yeni_gorev);
                    }

                    // Foreach döngüsü ile görevleri listeleme
                    foreach ($gorevler as $index => $gorev) {
                        echo "<li class='task-item'>";
                        echo "<span>" . ($index + 1) . ". " . $gorev . "</span>";
                        echo "<button class='delete-btn'>Tamamla</button>";
                        echo "</li>";
                    }
                    ?>
                </ul>
            </section>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>