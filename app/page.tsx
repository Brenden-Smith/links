import Image from "next/image";
import links from "./links.json";
import LinkItem, { LinkItemProps } from "./LinkItem";
import IconButton from "./IconButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <Image
        src="https://media.licdn.com/dms/image/D5603AQFQZ-suwka4zw/profile-displayphoto-shrink_400_400/0/1695934300384?e=1706140800&v=beta&t=KyzCTDRIX-dwACkUxaCbcRizN8aRiNGQSRUADcMnMQQ"
        width={150}
        height={150}
        className="rounded-full mb-5"
        alt="Brenden Smith"
      />
      <h1 className="text-3xl font-bold mb-3">
        Brenden Smith
      </h1>
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
      <ul className="flex flex-col space-y-4 mt-8 transition duration-1000 animate-fade-in animation-delay-2">
        {links.map((link: LinkItemProps) => (
          <li key={link.title}>
            <LinkItem {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
