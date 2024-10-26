/* eslint-disable prettier/prettier */
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
                All the mining activities are controlled by Intergrity professionals that provide pure quality of information and limit tampering of data and prevents counterfeiting and fraud from bad actors
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
            <p className="text-neutral-600">Swap any ERC-20, even those borrowed or supplied - This facilitates resource and authority transfering in the organisation based on the role!</p>
          </div>
          <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
            <AnimatedCircles />
            <p className="text-xl font-medium text-neutral-800">ing</p>
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
            <p>Our platform provides ways to facilitate the deployment and roles on multiple networks that help miners and other parties involved in the protocol.</p>
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
              {/* eslint-disable-next-line prettier/prettier*/}
              <AccordionContent>Stone proof is a supply chain management application that helps to achieve integrity between mining companies and consumers in providing pure quality minerals that contain neither fraud nor counterfeit</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where are supplied tokens stored?</AccordionTrigger>
              <AccordionContent>
               <p> The supplied tokens are stored on the blockchain legder where they are kept safely and not tempered with by anyone&apos; they are immutable to approve ownership </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does Stoneproof have risks?</AccordionTrigger>
              <AccordionContent>
               stone.proof concedes known risks since it ensures productiviy and favors users when it comes to storing mining data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why should I trust Stoneproof?</AccordionTrigger>
              <AccordionContent>
              stone.proof being built on The most efficient and trustable blockchain;Etherem - therefore, stone.proof provides pure layer of security hence integrity between parties
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
