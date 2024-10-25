"use client";

import {
  AnimatedCircles,
  HealthSvg,
  LayeredCircles,
  SwapSvgIcon,
} from "@/components/svgs";

export default function Page() {
  return (
    <div className="sm:py-28 py-10 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-medium">Trust, Unlocked.</h2>
        <div
          className="grid grid-cols-2 mt-12 gap-10"
          style={{ gridTemplateRows: "300px 300px" }}
        >
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative">
            <SwapSvgIcon />
            <p className="text-xl font-medium text-neutral-800">Swap</p>
            <p className="text-neutral-600">
              Swap any ERC-20, even those borrowed or supplied.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative">
            <AnimatedCircles />
            <p className="text-xl font-medium text-neutral-800">Stake</p>
            <p className="text-neutral-600">
              Earn rewards for securing the protocol
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative">
            <HealthSvg />
            <p className="text-xl font-medium text-neutral-800">
              Health factor
            </p>
            <p className="text-neutral-600">
              Easily track the risk level of your borrow positions.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative">
            <div>
              <LayeredCircles />
            </div>
            <p className="text-xl font-medium text-neutral-800">
              Multi-Network
            </p>
            <p className="text-neutral-600">
              Deployable on any EVM compatible network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
