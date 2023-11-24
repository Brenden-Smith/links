import Link from "next/link";
import { memo } from "react";

export type LinkItemProps = {
  title: string;
  href: string;
};

function LinkItem({ title, href }: LinkItemProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white hover:bg-gray-200 active:bg-gray-400 text-gray-800 font-semibold py-3 px-5 border rounded-full border-gray-400 shadow transition-all w-full text-center"
    >
      {title}
    </Link>
  );
}

export default memo(LinkItem);
