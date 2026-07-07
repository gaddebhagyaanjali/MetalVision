import os
from PIL import Image

# -------- Folder Paths --------
ORIGINAL_FOLDER = "dataset/copper"
DUPLICATE_FOLDER = "dataset/duplicates"
BLURRY_FOLDER = "dataset/blurry"
SMALL_FOLDER = "dataset/small"

# -------- Count Images --------
original_images = len([
    f for f in os.listdir(ORIGINAL_FOLDER)
    if f.lower().endswith((".jpg", ".jpeg", ".png"))
])

duplicates_removed = 0
if os.path.exists(DUPLICATE_FOLDER):
    duplicates_removed = len([
        f for f in os.listdir(DUPLICATE_FOLDER)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    ])

blurry_removed = 0
if os.path.exists(BLURRY_FOLDER):
    blurry_removed = len([
        f for f in os.listdir(BLURRY_FOLDER)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    ])

small_removed = 0
if os.path.exists(SMALL_FOLDER):
    small_removed = len([
        f for f in os.listdir(SMALL_FOLDER)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    ])

final_images = original_images

# -------- Average Resolution --------
total_width = 0
total_height = 0
count = 0

for file in os.listdir(ORIGINAL_FOLDER):
    if file.lower().endswith((".jpg", ".jpeg", ".png")):
        try:
            img = Image.open(os.path.join(ORIGINAL_FOLDER, file))
            w, h = img.size
            total_width += w
            total_height += h
            count += 1
        except:
            pass

if count > 0:
    avg_width = total_width // count
    avg_height = total_height // count
else:
    avg_width = 0
    avg_height = 0

# -------- Print Report --------
print("=" * 45)
print("           DATASET REPORT")
print("=" * 45)
print(f"Original Images      : {original_images + duplicates_removed + blurry_removed + small_removed}")
print(f"Duplicates Removed   : {duplicates_removed}")
print(f"Blurry Removed       : {blurry_removed}")
print(f"Small Images Removed : {small_removed}")
print("-" * 45)
print(f"Final Images         : {final_images}")
print()
print(f"Average Resolution   : {avg_width} x {avg_height}")
print()
print("Classes")
print("-------")
print(f"Copper : {final_images}")
print("=" * 45)

# -------- Save Report --------
with open("outputs/dataset_report.txt", "w") as report:
    report.write("=" * 45 + "\n")
    report.write("           DATASET REPORT\n")
    report.write("=" * 45 + "\n")
    report.write(f"Original Images      : {original_images + duplicates_removed + blurry_removed + small_removed}\n")
    report.write(f"Duplicates Removed   : {duplicates_removed}\n")
    report.write(f"Blurry Removed       : {blurry_removed}\n")
    report.write(f"Small Images Removed : {small_removed}\n")
    report.write("-" * 45 + "\n")
    report.write(f"Final Images         : {final_images}\n\n")
    report.write(f"Average Resolution   : {avg_width} x {avg_height}\n\n")
    report.write("Classes\n")
    report.write("-------\n")
    report.write(f"Copper : {final_images}\n")
    report.write("=" * 45 + "\n")

print("\nDataset report saved to outputs/dataset_report.txt")