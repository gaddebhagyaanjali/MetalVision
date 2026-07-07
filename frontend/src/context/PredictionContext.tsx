import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";

type Prediction = {
  material: string;
  confidence: number;
  time: string;
};

type PredictionContextType = {
  predictions: Prediction[];
  addPrediction: (material: string, confidence: number) => void;
};

const PredictionContext = createContext<PredictionContextType | undefined>(
  undefined
);

export function PredictionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [predictions, setPredictions] = useState<Prediction[]>(() => {
  const saved = localStorage.getItem("predictions");

  return saved ? JSON.parse(saved) : [];
});

  const addPrediction = (material: string, confidence: number) => {
    const newPrediction: Prediction = {
      material,
      confidence,
      time: new Date().toLocaleTimeString(),
    };

    setPredictions((prev) => [newPrediction, ...prev]);
  };
useEffect(() => {
  localStorage.setItem(
    "predictions",
    JSON.stringify(predictions)
  );
}, [predictions]);
  return (
    <PredictionContext.Provider
      value={{
        predictions,
        addPrediction,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}

export function usePrediction() {
  const context = useContext(PredictionContext);

  if (!context) {
    throw new Error(
      "usePrediction must be used inside PredictionProvider"
    );
  }

  return context;
}