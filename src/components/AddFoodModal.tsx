"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

type AddFoodModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    name: string;
    category: string;
    imageFile?: File | null;
  }) => void;
  isSubmitting?: boolean;
  error?: string | null;
};

export function AddFoodModal({
  isOpen,
  onClose,
  onSave,
  isSubmitting = false,
  error,
}: AddFoodModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !category.trim() || isSubmitting) return;

    onSave({
      name: name.trim(),
      category: category.trim(),
      imageFile,
    });

    // success hole parent modal close korbe; ekhane fields clear korchi
    setName("");
    setCategory("");
    setImageFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) setImageFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-[1.5px] flex items-center justify-center z-50 text-sm"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              bg-[#585858]
              w-[50%] sm:w-[50px] lg:w-[90%]
              rounded-3xl
              px-6 py-6
              text-center
              border border-white/40
              shadow-lg
            "
          >
            <h2 className="text-white text-xl mb-5">Add Food</h2>

            {error && (
              <p className="text-red-300 text-sm mb-2">{error}</p>
            )}

            {/* Food Name */}
            <input
              type="text"
              placeholder="Food Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full h-10 mb-3
                bg-[#686868]
                text-white
                rounded-full 
                px-4
                outline-none
                placeholder-gray-300
                border shadow-xs
              "
            />

            {/* Food Category */}
            <input
              type="text"
              placeholder="Food Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                w-full h-10 mb-3
                bg-[#686868]
                text-white
                rounded-full
                px-4
                outline-none
                placeholder-gray-300
                border shadow-xs
              "
            />

            {/* Upload / Drag area */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`
                w-full h-10 mb-5
                flex items-center justify-center
                rounded-full
                border-2 border-dashed
                ${
                  imageFile
                    ? "border-green-400 bg-[#5b774a]"
                    : "border-red-400 bg-[#7b4b4b]/60"
                }
                text-sm text-white cursor-pointer
              `}
            >
              {imageFile ? imageFile.name : "Upload or Drag image here"}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="
                w-full h-10
                bg-[#f03328]
                text-white
                rounded-full
                font-semibold
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
