import Image from "next/image";
import { AnimatedCircles, HealthSvg, LayeredCircles, SwapSvgIcon } from "~~/components/svgs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~~/components/ui/accordion";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl sm:py-20 py-10 sm:px-12">
      {/* Intro Section */}
      <section className="flex flex-col gap-4 mb-16">
        <div className="flex flex-col justify-center gap-6 items-center px-3 py-10">
          <h1 className="text-3xl sm:text-4xl font-medium text-neutral-800">Meet Stoneproof</h1>
          <p className="text-xl text-center text-neutral-600">Supply chain management for minerals.</p>
        </div>
        <div className="grid grid-rows-1 w-full gap-16">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-0 px-3">
            <div className="relative w-full h-[300px]">
              <Image
                src={`/static/minerals.jpg`}
                alt="Minerals in vehicle"
                fill
                className="rounded-2xl border border-white hover:shadow-md transition-all cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium text-neutral-800 mt-4">Extensive Audits</h2>
              <p className="text-neutral-600">
                Peace of mind supported by multiple audits by the world&lsquo;s leading security firms.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-0 px-3">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium text-neutral-800 mt-6">Shortfall Secured</h2>
              <p className="text-neutral-600">The Stoneproof secured with a backstop against protocol insolvency.</p>
            </div>
            <div className="relative w-full h-[300px]">
              <Image
                src={`/static/people-in-mine.jpeg`}
                alt="People in mining site"
                fill
                className="rounded-2xl border border-white hover:shadow-md transition-all cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features section */}
      <section id="solutions">
        <div className="space-y-4 sm:px-0 px-3">
          <h2 className="text-4xl font-medium">Trust, Unlocked.</h2>
          <p className="text-xl">Stoneproof can be trusted with these powerful features.</p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-[300px_300px] grid-rows-[300px_300px_300px_300px] mt-12 gap-10 sm:px-0  px-3">
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
            <SwapSvgIcon />
            <p className="text-xl font-medium text-neutral-800">Swap</p>
            <p className="text-neutral-600">Swap any ERC-20, even those borrowed or supplied.</p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
            <AnimatedCircles />
            <p className="text-xl font-medium text-neutral-800">Stake</p>
            <p className="text-neutral-600">Earn rewards for securing the protocol</p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
            <HealthSvg />
            <p className="text-xl font-medium text-neutral-800">Health factor</p>
            <p className="text-neutral-600">Easily track the risk level of your borrow positions.</p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
            <div>
              <LayeredCircles />
            </div>
            <p className="text-xl font-medium text-neutral-800">Multi-Network</p>
            <p className="text-neutral-600">Deployable on any EVM compatible network.</p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="grid sm:grid-cols-3 grid-cols-1 mt-12 gap-1" id="faq">
        <div className="p-4">
          <h1 className="text-4xl animate-fade-down">FAQs</h1>
        </div>
        <div className="col-span-2 sm:px-0 px-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Stoneproof?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where are supplied tokens stored?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does Stoneproof have risks?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why should I trust Stoneproof?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
