"use client";

import {
  AnimatedCircles,
  HealthSvg,
  LayeredCircles,
  SwapSvgIcon,
} from "@/components/svgs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl sm:py-20 py-10 sm:px-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-medium">Trust, Unlocked.</h2>
        <p className="text-xl">
          Stoneproof can be trusted with these powerful features.
        </p>
      </div>
      <div
        className="grid grid-cols-2 mt-12 gap-10"
        style={{ gridTemplateRows: "300px 300px" }}
      >
        <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
          <SwapSvgIcon />
          <p className="text-xl font-medium text-neutral-800">Swap</p>
          <p className="text-neutral-600">
            Swap any ERC-20, even those borrowed or supplied.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
          <AnimatedCircles />
          <p className="text-xl font-medium text-neutral-800">Stake</p>
          <p className="text-neutral-600">
            Earn rewards for securing the protocol
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
          <HealthSvg />
          <p className="text-xl font-medium text-neutral-800">Health factor</p>
          <p className="text-neutral-600">
            Easily track the risk level of your borrow positions.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
          <div>
            <LayeredCircles />
          </div>
          <p className="text-xl font-medium text-neutral-800">Multi-Network</p>
          <p className="text-neutral-600">
            Deployable on any EVM compatible network.
          </p>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="grid grid-cols-3 mt-12 gap-1">
        <div className="p-4">
          <h1 className="text-4xl">FAQs</h1>
        </div>
        <div className="col-span-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Stoneproof?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Where are supplied tokens stored?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does Stoneproof have risks?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Why should I trust Stoneproof?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
