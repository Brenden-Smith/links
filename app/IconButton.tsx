import React, { memo } from "react";
import { Icon, IconProps } from "./Icon";
import styles from "./IconButton.module.css";

export default memo(function IconButton({
  icon,
  href,
  ...props
}: {
  icon: IconProps;
  href: string;
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className={styles.iconButton} {...props}>
        <Icon {...icon} />
      </button>
    </a>
  );
});
