import os
import shutil
from PIL import Image
import imagehash

# Folder containing original images
SOURCE_FOLDER = "dataset/copper"

# Folder where duplicate images will be moved
DUPLICATE_FOLDER = "dataset/duplicates"

# Create duplicate folder if it doesn't exist
os.makedirs(DUPLICATE_FOLDER, exist_ok=True)

hashes = {}

duplicate_count = 0

for filename in os.listdir(SOURCE_FOLDER):

    if filename.lower().endswith((".jpg", ".jpeg", ".png")):

        filepath = os.path.join(SOURCE_FOLDER, filename)

        try:
            image = Image.open(filepath)

            # Calculate image hash
            img_hash = imagehash.average_hash(image)

            if img_hash in hashes:

                print(f"Duplicate Found: {filename}")

                shutil.move(filepath,
                            os.path.join(DUPLICATE_FOLDER, filename))

                duplicate_count += 1

            else:
                hashes[img_hash] = filename

        except Exception as e:
            print(f"Error processing {filename}: {e}")

print("\nCleaning Completed!")
print(f"Duplicates Moved : {duplicate_count}")