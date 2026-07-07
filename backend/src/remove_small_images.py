import os
import shutil
from PIL import Image

# ==========================
# CONFIGURATION
# ==========================

SOURCE_FOLDER = "dataset/copper"
SMALL_FOLDER = "dataset/small"

MIN_WIDTH = 300
MIN_HEIGHT = 300

# ==========================
# CREATE OUTPUT FOLDER
# ==========================

os.makedirs(SMALL_FOLDER, exist_ok=True)

small_count = 0
error_count = 0

print("=" * 50)
print("Removing Small Images...")
print("=" * 50)

# ==========================
# PROCESS IMAGES
# ==========================

for filename in os.listdir(SOURCE_FOLDER):

    if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
        continue

    filepath = os.path.join(SOURCE_FOLDER, filename)

    try:
        # Open and automatically close the image
        with Image.open(filepath) as img:
            width, height = img.size

        # Move image if too small
        if width < MIN_WIDTH or height < MIN_HEIGHT:

            destination = os.path.join(SMALL_FOLDER, filename)

            # If a file with the same name already exists,
            # create a unique filename
            if os.path.exists(destination):
                base, ext = os.path.splitext(filename)
                count = 1

                while os.path.exists(destination):
                    destination = os.path.join(
                        SMALL_FOLDER,
                        f"{base}_{count}{ext}"
                    )
                    count += 1

            shutil.move(filepath, destination)

            print(f"Moved: {filename} ({width}x{height})")

            small_count += 1

    except Exception as e:
        print(f"Error processing {filename}: {e}")
        error_count += 1

print("\n" + "=" * 50)
print("Cleaning Completed!")
print("=" * 50)
print(f"Small Images Moved : {small_count}")
print(f"Errors             : {error_count}")
print("=" * 50)