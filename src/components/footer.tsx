import Image from "next/image";
import { Input } from "./ui/input";
import { DiscordIcon, GithubIcon, XIcon } from "./svgs";

export const Footer: React.FC = () => {
  return (
    <footer className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-items-stretch p-8 sm:mx-auto max-w-5xl bg-neutral-100 mb-4 rounded-xl shadow mx-3">
      <div className="flex flex-col justify-start gap-4">
        <Image
          src={`/logo_dark.svg`}
          alt="Stoneproof"
          width={150}
          height={38}
        />
        <p className="text-xs">
          stone.proof.com provides information and resources about the
          fundamentals of the decentralised non-custodial liquidity protocol
          called the Stoneproof Protocol, comprised of open-source
          self-executing smart contracts that are deployed on various
          permissionless public blockchains.
        </p>

        <div className="flex justify-start gap-3 mt-10">
          <XIcon className="h-6 w-6" />
          <DiscordIcon className="h-6 w-6" />
          <GithubIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-col sm:items-end space-y-2">
        <h3 className="text-xl text-neutral-800">
          Stay up to date with Stone.proof
        </h3>
        <p className="text-sm text-neutral-600">
          Subscribe to the newsletter for updates
        </p>
        <div>
          <Input placeholder="Email address" name="email" />
        </div>
      </div>
    </footer>
  );
};
