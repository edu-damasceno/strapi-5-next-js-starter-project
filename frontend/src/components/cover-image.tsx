import Image from "next/image";

export interface CoverImageProps {
  image: {
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
  };
}

export function CoverImage({ image, ...props }: CoverImageProps) {
  if (!image || !image.url) return null;

  return (
    <div className="relative h-96 w-full">
      <Image
        src={`${process.env.STRAPI_BASE_URL}${image.url}`}
        alt={image.alternativeText || "Cover image"}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
