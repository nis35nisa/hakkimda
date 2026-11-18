# Data - California Housing

Bu klasör, HomeValue AI projesinde kullanılan veri setinin yerel kopyası içindir.

- Kaynak: scikit-learn `fetch_california_housing(as_frame=True)`
- Ham CSV çıktısı: `data/raw/california_housing.csv`
- Ham veri dosyası Git'e eklenmez; `.gitignore` tarafından hariç tutulur.
- Veri seti 20.640 gözlem ve 8 açıklayıcı değişkenden oluşur.
- Hedef `MedHouseVal`, 100.000 ABD doları birimindedir.
- Her satır tek bir ev değil, 1990 ABD nüfus sayımındaki bir California census block group (coğrafi bölge) için bölgesel medyan ev değerini temsil eder.

Veri kaynağı ve alan açıklamaları:
https://scikit-learn.org/stable/datasets/real_world.html#california-housing-dataset
