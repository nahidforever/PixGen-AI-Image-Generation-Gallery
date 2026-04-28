import PhotoCard from "@/components/PhotoCard";
import React from "react";

const ALlPhotosPage = async () => {
  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery.vercel.app/data.json",
  );
  const photos = await res.json();
  return (
    <div>
      <h2 className="font-bold text-2xl text-center my-6">All Photos</h2>

      <div className="grid grid-cols-4 gap-5">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default ALlPhotosPage;
