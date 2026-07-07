from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from config import UPLOAD_FOLDER
from predict import predict_image

app = Flask(__name__)

CORS(app)

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/")
def home():
    return {
        "message": "MetalVision Backend Running Successfully"
    }


@app.route("/predict", methods=["POST"])
def predict():

    try:
        if "image" not in request.files:
            return jsonify({"error": "No image uploaded"}), 400

        image = request.files["image"]

        image_path = os.path.join(UPLOAD_FOLDER, image.filename)

        image.save(image_path)

        print("Image Saved:", image_path)

        prediction = predict_image(image_path)

        print("Prediction:", prediction)

        return jsonify(prediction)

    except Exception as e:
        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)