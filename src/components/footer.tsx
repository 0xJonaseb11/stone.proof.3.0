import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="grid grid-cols-2 gap-4 justify-items-stretch p-8 mx-auto max-w-5xl bg-neutral-100 mb-4 rounded-xl">
      <div className="space-y-3">
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
      </div>
      <div className="flex flex-col items-end space-y-2">
        <h3 className="text-xl text-neutral-800">
          Stay up to date with Stone.proof
        </h3>
        <p className="text-sm text-neutral-600">
          Subscribe to the newsletter for updates
        </p>
      </div>
    </footer>
  );
};
