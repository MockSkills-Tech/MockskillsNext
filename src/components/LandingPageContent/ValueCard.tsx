import Image, { StaticImageData } from "next/image";

const ValueCard = ({ imageSrc, title, description }: { imageSrc: string|StaticImageData ; title: string; description: string }) => (
    <div className="flex flex-col items-center text-center max-w-xs transition-none">
      <Image src={imageSrc} alt={`MockSkills-Tech-${title}`} className="rounded-lg mb-4" />
      <h3 className="text-2xl font-bold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  export default ValueCard;
  