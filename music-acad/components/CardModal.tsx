import React from "react";

interface CardModalProps {
  title: string;
  description: string;
  details: string;
  onCancel: () => void;
  onDeploy: () => void;
}

const CardModal: React.FC<CardModalProps> = ({
  title,
  description,
  details,
  onCancel,
  onDeploy,
}) => {
  return (
    <div className="bg-black text-white w-full h-full p-6 rounded-lg shadow-lg border relative 
                    border-gray-800 
                    shadow-[0_0_20px_rgba(0,255,0,0.5)]">
      <h2 className="text-lg font-bold">{title}</h2>
      
      <p className="text-gray-400 mt-1">{description}</p>
      <p className="text-gray-300 mt-4">{details}</p>

      <div className="flex justify-end gap-3 mt-16">
        <button
          className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
          onClick={onDeploy}
        >
          Deploy
        </button>
      </div>
    </div>
  );
};

export default CardModal;
