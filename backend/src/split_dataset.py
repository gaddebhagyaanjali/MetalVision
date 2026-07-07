import os
import random
import shutil

# -----------------------------
# Folder Paths
# -----------------------------
SOURCE_DIR = "dataset"

TRAIN_DIR = "split_data/train"
VAL_DIR = "split_data/val"

# Split Ratio
TRAIN_RATIO = 0.8

random.seed(42)


def split_class(class_name):
    source_folder = os.path.join(SOURCE_DIR, class_name)

    train_folder = os.path.join(TRAIN_DIR, class_name)
    val_folder = os.path.join(VAL_DIR, class_name)

    os.makedirs(train_folder, exist_ok=True)
    os.makedirs(val_folder, exist_ok=True)

    images = [
        f for f in os.listdir(source_folder)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    ]

    random.shuffle(images)

    train_count = int(len(images) * TRAIN_RATIO)

    train_images = images[:train_count]
    val_images = images[train_count:]

    for img in train_images:
        shutil.copy2(
            os.path.join(source_folder, img),
            os.path.join(train_folder, img)
        )

    for img in val_images:
        shutil.copy2(
            os.path.join(source_folder, img),
            os.path.join(val_folder, img)
        )

    print(f"\n{class_name.upper()}")
    print("-" * 30)
    print(f"Total Images : {len(images)}")
    print(f"Train Images : {len(train_images)}")
    print(f"Validation Images : {len(val_images)}")


print("=" * 50)
print("Splitting Dataset...")
print("=" * 50)

split_class("copper")
split_class("aluminum")

print("\n" + "=" * 50)
print("Dataset Split Completed Successfully!")
print("=" * 50)