import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import React from "react";

const ALlPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery.vercel.app/data.json",
  );
  const photos = await res.json();

  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : photos;

  return (
    <div>
      <h2 className="font-bold text-2xl text-center my-6">All Photos</h2>

      <Category />

      <div className="grid grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default ALlPhotosPage;
