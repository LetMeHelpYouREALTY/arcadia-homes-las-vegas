import Image from "next/image";

export const AGENT_PHOTO_SRC = "/images/agent/dr-jan-duffy-realtor-las-vegas.webp";
export const AGENT_PHOTO_PNG = "/images/agent/dr-jan-duffy-realtor-las-vegas.png";

type AgentPhotoProps = {
  /** Rendered width/height in pixels (the image is a circle). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/** Dr. Jan Duffy's round gold-ring headshot. */
export default function AgentPhoto({ size = 48, className = "", priority = false }: AgentPhotoProps) {
  return (
    <Image
      src={AGENT_PHOTO_SRC}
      alt="Dr. Jan Duffy, REALTOR®, Arcadia Homes Las Vegas"
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
      className={`inline-block shrink-0 rounded-full ${className}`}
    />
  );
}
