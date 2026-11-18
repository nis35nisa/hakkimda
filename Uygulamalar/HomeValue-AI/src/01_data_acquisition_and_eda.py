"""
HomeValue AI - Step 2: Veri setini edinme ve ilk keşif
California Housing veri setini indirir, CSV olarak kaydeder ve temel EDA çıktıları üretir.

Çalıştırma:
    pip install -r requirements.txt
    python src/01_data_acquisition_and_eda.py
"""

from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from sklearn.datasets import fetch_california_housing


# Proje kök dizinini bu dosyanın konumuna göre bul.
PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_DATA_DIR = PROJECT_ROOT / "data" / "raw"
FIGURES_DIR = PROJECT_ROOT / "reports" / "figures"

RAW_DATA_DIR.mkdir(parents=True, exist_ok=True)
FIGURES_DIR.mkdir(parents=True, exist_ok=True)


def main():
    print("\n[1/5] California Housing veri seti indiriliyor...")
    dataset = fetch_california_housing(as_frame=True)

    # frame; 8 özellik sütunu ile hedef sütununu birlikte içerir.
    df = dataset.frame.copy()
    df["MedHouseVal"] = dataset.target

    csv_path = RAW_DATA_DIR / "california_housing.csv"
    df.to_csv(csv_path, index=False)

    print("\n[2/5] Veri setinin genel yapısı")
    print(f"Boyut (satır, sütun): {df.shape}")
    print(f"Sütunlar: {df.columns.tolist()}")
    print("\nİlk 5 kayıt:")
    print(df.head().to_string())

    print("\n[3/5] Veri türleri ve eksik değerler")
    print(df.info())
    print("\nEksik değer sayıları:")
    print(df.isna().sum())
    print(f"Tamamen tekrarlanan satır sayısı: {df.duplicated().sum()}")

    print("\n[4/5] Sayısal özet")
    print(df.describe().T.to_string())

    # Hedef değişken dağılımı
    plt.figure(figsize=(9, 5))
    sns.histplot(df["MedHouseVal"], bins=40, kde=True)
    plt.title("MedHouseVal Dağılımı")
    plt.xlabel("MedHouseVal (100.000 ABD doları biriminde)")
    plt.ylabel("Kayıt sayısı")
    plt.tight_layout()
    plt.savefig(FIGURES_DIR / "target_distribution.png", dpi=150)
    plt.close()

    # Özellikler ve hedef arasındaki korelasyon
    plt.figure(figsize=(10, 7))
    sns.heatmap(df.corr(numeric_only=True), annot=True, fmt=".2f", cmap="coolwarm")
    plt.title("Değişkenler Arası Korelasyon")
    plt.tight_layout()
    plt.savefig(FIGURES_DIR / "correlation_heatmap.png", dpi=150)
    plt.close()

    # Coğrafi dağılım: noktaların rengi hedef değeri temsil eder.
    plt.figure(figsize=(10, 7))
    scatter = plt.scatter(
        df["Longitude"],
        df["Latitude"],
        c=df["MedHouseVal"],
        cmap="viridis",
        s=8,
        alpha=0.5,
    )
    plt.colorbar(scatter, label="MedHouseVal")
    plt.title("California Bölgelerinde MedHouseVal Dağılımı")
    plt.xlabel("Longitude")
    plt.ylabel("Latitude")
    plt.tight_layout()
    plt.savefig(FIGURES_DIR / "geographical_distribution.png", dpi=150)
    plt.close()

    print("\n[5/5] İlk inceleme tamamlandı.")
    print(f"Ham veri CSV dosyası: {csv_path}")
    print(f"Grafikler: {FIGURES_DIR}")
    print(
        "\nNOT: Bu aşamada veri temizleme veya modelleme yapılmadı. "
        "Önce veri yapısı ve olası sorunlar inceleniyor."
    )
    print(
        "Uyarı: MedHouseVal hedefinde 5.0 üst sınırında yığılma görülebilir; "
        "bu durum sonraki analiz ve hata değerlendirmesinde dikkate alınmalıdır."
    )


if __name__ == "__main__":
    main()
