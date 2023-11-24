import { ReactNode } from "react";
import styles from "./Tooltip.module.css";
import FrostedWindow from "./FrostedWindow";

export default function Tooltip({
  title,
  children,
}: {
  title: string;
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className={styles.tooltip}>
      {children}
      <FrostedWindow className={styles.tooltiptext}>{title}</FrostedWindow>
    </div>
  );
}
