import Image, { ImageProps } from "next/image";
import Tooltip from "./Tooltip";
import { memo } from "react";

export type IconProps = {
  src: string;
  size?: "small" | "medium" | "large";
  noStyle?: boolean;
} & ImageProps;

const Icon = memo(function Icon({ src, size, noStyle, ...props }: IconProps) {
  const className = `${!noStyle && "mr-3 mb-3"} ${props.className}}`;
  return (
    <div className={`flex items-center ${className}`}>
      <Tooltip title={props.alt}>
        <Image
          {...props}
          src={src}
          height={size === "small" ? 32 : size === "medium" ? 48 : 64}
          width={size === "small" ? 32 : size === "medium" ? 48 : 64}
          alt={props.alt}
        />
      </Tooltip>
    </div>
  );
});

export { Icon };
