"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type AddCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => Promise<void> | void; 
  isSubmitting?: boolean;
  error?: string | null;
};

export function AddCategoryModal({
  isOpen,
  onClose,
  onSave,
  isSubmitting = false,
  error,
}: AddCategoryModalProps) {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || isSubmitting) return;

    await onSave(name);
    setName("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-[1.5px] flex items-center justify-center z-50"
          onClick={onClose}
        >
          {/* Prevent click-through */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 0.8, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              bg-[#585858]
              w-[90%] sm:w-[300px]
              rounded-3xl
              px-5 py-10
              text-center
              border border-white/40
              shadow-lg
            "
          >
            <h2 className="text-white text-xl mb-5">
              Add Category
            </h2>

            {error && (
              <p className="text-red-300 text-sm mb-2">{error}</p>
            )}

            {/* INPUT */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                h-10
                bg-[#686868]
                text-white
                rounded-full
                px-4
                outline-none
                mb-5
                placeholder-gray-300
              "
            />

            {/* SAVE BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="
                w-full
                h-10
                bg-[#f03328]
                text-white
                rounded-full
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
