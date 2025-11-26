"use client";

import React, { useState } from "react";
import { AddCategoryModal } from "./AddCategoryModal";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL

const BestSellerSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

   const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSaveCategory = async(name:string) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const res = await fetch(`${API_BASE}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create category");
      }

      const created = await res.json();
      console.log("New Category created:", created);

      
      setModalOpen(false);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="lg:pt-28 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Our Best Seller Dishes
        </h2>

        <p className="text-base lg:text-xl w-2xl text-gray-600 mt-3 leading-relaxed">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce and juicy tomato, all tossed in your choice of
          dressing.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          className="
            bg-[#2C2C2C] text-white px-6 py-2 rounded-full 
          "
        >
          Add Food
        </button>

        <button
          onClick={() => {setError(null); setModalOpen(true)}}
          className="
            bg-[#2C2C2C] text-white px-6 py-2 rounded-full
          "
        >
          Add Category
        </button>

        {/* MODAL */}
        <AddCategoryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveCategory}
          isSubmitting={isSubmitting}
          error={error}
        />
      </div>
    </section>
  );
};

export default BestSellerSection;
