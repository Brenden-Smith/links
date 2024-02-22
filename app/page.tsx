import Image from "next/image";
import links from "./links.json";
import LinkItem, { LinkItemProps } from "./LinkItem";
import IconButton from "./IconButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brenden Smith ─ Home",
  description: "Full Stack Software Engineer",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <Image
        src="https://avatars.githubusercontent.com/u/61305154"
        width={150}
        height={150}
        className="rounded-full mb-5"
        alt="Brenden Smith"
      />
      <h1 className="text-3xl font-bold mb-3">Brenden Smith</h1>
      <h3 className="text-xl text-center font-light mb-2">
        Full Stack Software Engineer
      </h3>
      <div className="flex flex-row space-x-5">
        <IconButton
          href="mailto:contact@brenden-smith.com"
          key="email"
          icon={{
            src: "/icon/email.svg",
            size: "small",
            alt: "Email",
            color: "white",
            noStyle: true,
          }}
        />
        <IconButton
          href="https://www.linkedin.com/in/brenden-s-smith"
          key="linkedin"
          icon={{
            src: "/icon/linkedin.svg",
            size: "small",
            alt: "LinkedIn",
            noStyle: true,
          }}
        />
        <IconButton
          href="https://github.com/Brenden-Smith"
          key="github"
          icon={{
            src: "/icon/github.svg",
            size: "small",
            alt: "GitHub",
            noStyle: true,
          }}
        />
      </div>
      <ul className="flex flex-col space-y-4 mt-8 transition duration-1000 animate-fade-in animation-delay-2 w-full max-w-sm mb-10">
        {links.map((link: LinkItemProps) => (
          <li key={link.title}>
            <LinkItem {...link} />
          </li>
        ))}
      </ul>
      <div className="px-5">
        <embed src="https://github-readme-stats.vercel.app/api?username=Brenden-Smith&hide_rank=true&theme=dark" />
      </div>
    </main>
  );
}
