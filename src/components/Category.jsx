import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery.vercel.app/category.json",
  );
  const categories = await res.json();

  return (
    <div className="mb-7 space-x-3">
      {categories.map((category) => (
        <Link
          href={`?category=${category.name.toLowerCase()}`}
          key={category.id}
        >
          <Button size="sm" variant="outline">
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
