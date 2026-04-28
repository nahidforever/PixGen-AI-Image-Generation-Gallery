import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery.vercel.app/data.json",
  );
  const photos = await res.json();

  const photo = photos.find((p) => p.id === Number(id));

  return (
    <div>
      <h2 className="font-bold text-2xl mt-5">{photo?.title}</h2>
      <p>{photo.prompt}</p>

      <div className="relative">
        <Image
          src={photo.imageUrl}
          width={900}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="rounded-xl object-cover"
        />
        <Chip size="sm" className="absolute top-2 left-2 z-10">
          {photo.category}
        </Chip>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
