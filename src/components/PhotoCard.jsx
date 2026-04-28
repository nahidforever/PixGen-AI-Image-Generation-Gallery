import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="rounded-xl object-cover"
        />
        <Chip size="sm" className="absolute top-2 left-2 z-10">
          {photo.category}
        </Chip>
      </div>
      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>

      <Separator orientation="vertical"></Separator>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>

        <div className="flex items-center gap-2">
          <p>
            <FaDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <Link href={`/all-photos/${photo.id}`}>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
