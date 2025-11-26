"use client";

import React, { useEffect, useState } from "react";
import { AddCategoryModal } from "./AddCategoryModal";
import { AddFoodModal } from "./AddFoodModal";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

const BestSellerSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingFood, setIsSubmittingFood] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [foodError, setFoodError] = useState<string | null>(null);

  const [foods, setFoods] = useState<any[]>([]);

  const handleSaveCategory = async (name: string) => {
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

  const fetchFoods = async () => {
    try {
      const res = await fetch(`${API_BASE}/foods`);
      if (!res.ok) throw new Error("Failed to fetch foods");

      const data = await res.json();
      setFoods(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <section className="lg:pt-28 py-10 max-w-6xl mx-auto">
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
          onClick={() => {
            setFoodError(null);
            setIsFoodModalOpen(true);
          }}
          className="
            bg-[#2C2C2C] text-white px-6 py-2 rounded-full 
          "
        >
          Add Food
        </button>

        <button
          onClick={() => {
            setError(null);
            setModalOpen(true);
          }}
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

        <AddFoodModal
          isOpen={isFoodModalOpen}
          onClose={() => setIsFoodModalOpen(false)}
          isSubmitting={isSubmittingFood}
          error={foodError}
          onSave={async ({ name, category, imageFile }) => {
            try {
              setIsSubmittingFood(true);
              setFoodError(null);

              let imageUrl = "";

              if (imageFile) {
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("upload_preset", UPLOAD_PRESET);

                const uploadRes = await fetch(
                  `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                if (!uploadRes.ok) {
                  throw new Error("Image upload failed");
                }

                const uploadData = await uploadRes.json();
                imageUrl = uploadData.secure_url;
              }

              const res = await fetch(`${API_BASE}/foods`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, category, imageUrl }),
              });

              if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.message || "Failed to add food");
              }

              const created = await res.json();
              console.log("New Food created:", created);

              setIsFoodModalOpen(false);
              fetchFoods();
            } catch (err: any) {
              setFoodError(err.message || "Something went wrong");
            } finally {
              setIsSubmittingFood(false);
            }
          }}
        />
      </div>

      {/* FOOD CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10 gap-y-15">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white shadow-md rounded-b-2xl overflow-hidden"
          >
            <div className="relative w-full h-[220px]">
              <Image
                src={food.imageUrl || "/images/placeholder.png"}
                alt={food.name}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-2xl font-medium text-black">
                  {food.name}
                </h3>

                <span className="bg-[#FF4D30] text-white text-xs lg:text-lg font-medium px-3 py-1 rounded-full">
                  {food.category}
                </span>
              </div>

              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1 text-2xl text-[#FFA800]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-2xl font-bold text-black">$230</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;
