import axios from "axios";

const API_URL = "https://metalvision.onrender.com/predict";

export const predictMaterial = async (file: File) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("Backend Response:", response.data);

  return response.data;
};