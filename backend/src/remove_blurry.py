import os
import shutil
import cv2

# Folder containing original images
SOURCE_FOLDER = "dataset/copper"

# Folder where blurry images will be moved
BLURRY_FOLDER = "dataset/blurry"

# Create blurry folder if it doesn't exist
os.makedirs(BLURRY_FOLDER, exist_ok=True)

blur_count = 0

# Blur threshold
THRESHOLD = 100

for filename in os.listdir(SOURCE_FOLDER):

    if filename.lower().endswith((".jpg", ".jpeg", ".png")):

        filepath = os.path.join(SOURCE_FOLDER, filename)

        image = cv2.imread(filepath)

        if image is None:
            continue

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        variance = cv2.Laplacian(gray, cv2.CV_64F).var()

        if variance < THRESHOLD:

            print(f"Blurry Image : {filename} | Score = {variance:.2f}")

            shutil.move(filepath,
                        os.path.join(BLURRY_FOLDER, filename))

            blur_count += 1

print("\nCleaning Completed!")
print(f"Blurred Images Moved : {blur_count}")