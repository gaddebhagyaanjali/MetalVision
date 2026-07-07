import os

# Folder containing images
FOLDER = "dataset/copper"

# Get all image files
images = [f for f in os.listdir(FOLDER)
          if f.lower().endswith((".jpg", ".jpeg", ".png"))]

# Sort images alphabetically
images.sort()

count = 1

for image in images:

    extension = os.path.splitext(image)[1]

    new_name = f"copper_{count:04d}{extension}"

    old_path = os.path.join(FOLDER, image)
    new_path = os.path.join(FOLDER, new_name)

    os.rename(old_path, new_path)

    print(f"{image}  -->  {new_name}")

    count += 1

print("\n====================================")
print("Renaming Completed Successfully!")
print(f"Total Images Renamed : {count-1}")
print("====================================")