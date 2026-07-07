import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "runs",
    "classify",
    "train",
    "weights",
    "best.pt"
)

UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

RESULT_FOLDER = os.path.join(BASE_DIR, "results")