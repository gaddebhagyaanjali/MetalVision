from ultralytics import YOLO
from config import MODEL_PATH
import os

# Load model once
model = YOLO(MODEL_PATH)


def predict_image(image_path):
    if not os.path.exists(image_path):
        raise FileNotFoundError(f"Image not found: {image_path}")

    results = model(image_path)

    result = results[0]

    # Check if classification results exist
    if result.probs is None:
        raise Exception(
            "No classification probabilities found. "
            "Make sure you are using a YOLO Classification model."
        )

    class_id = int(result.probs.top1)
    confidence = float(result.probs.top1conf)
    class_name = result.names[class_id]

    return {
        "material": class_name,
        "confidence": round(confidence * 100, 2)
    }