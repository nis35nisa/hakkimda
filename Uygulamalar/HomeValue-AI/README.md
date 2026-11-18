# HomeValue AI

Makine öğrenmesi destekli konut değeri tahmin projesi.

> **Proje durumu:** Başlangıç aşaması — deney sonuçları henüz üretilmedi.

## Problem tanımı

Bu proje, California Housing veri setindeki bölgesel konut ve demografik özelliklerden yararlanarak ilgili sayım bölgesinin medyan konut değerini tahmin etmeyi amaçlar. Bu nedenle çıktı, tek bir ev için ekspertiz değeri değil, veri setinin tanımladığı bölgesel medyan değere ilişkin bir tahmindir.

## Makine öğrenmesi yaklaşımı

- Problem türü: Regresyon
- Veri seti: Scikit-learn California Housing
- Hedef değişken: `MedHouseVal`
- Başlıca değerlendirme metrikleri: MAE, RMSE ve R²
- Planlanan arayüz: Streamlit

## Planlanan çalışma aşamaları

1. Problem tanımı ve deney planı
2. Veri setinin edinilmesi ve veri sözlüğü
3. Keşifsel veri analizi (EDA)
4. Veri kalitesi incelemesi
5. Ön işleme ve özellik hazırlama
6. Eğitim/test ayrımı ve çapraz doğrulama tasarımı
7. Baseline model
8. İlk model karşılaştırması
9. Aday model seçimi
10. Hiperparametre optimizasyonu
11. En az beş güçlü rakiple karşılaştırma
12. Final test değerlendirmesi ve hata analizi
13. Streamlit arayüzü
14. Deployment ve demo
15. Teknik rapor ve sunum

## Teknoloji yığını

Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn ve Streamlit.

## Kurulum

Kurulum ve çalıştırma komutları geliştirme aşamasında eklenecektir.

## Bilimsel dürüstlük

Tüm metrikler ve grafikler gerçek deney çıktılarından üretilecektir. Henüz çalıştırılmamış deneyler için performans sonucu beyan edilmeyecektir. Veri bölme, ön işleme ve model seçimi adımlarında veri sızıntısını önlemek için Pipeline ve uygun çapraz doğrulama stratejileri kullanılacaktır.

## Veri kaynağı

California Housing veri seti, Scikit-learn `fetch_california_housing` arayüzü üzerinden edinilecektir. Veri setinin kaynağı, lisansı ve kullanım koşulları raporda ayrıca belgelenecektir.
