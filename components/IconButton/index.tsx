import { memo } from "react";
import { Icon, IconProps } from "../Icon";
import styles from "./styles.module.css";

export default memo(function IconButton({
  icon,
  href,
  ...props
}: {
  icon: IconProps;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconButton}
      {...props}
    >
      <Icon {...icon} />
    </a>
  );
});
