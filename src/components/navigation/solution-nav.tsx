import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";

export const SolutionsNav: React.FC = () => {
  return (
    <NavigationMenuContent className="flex gap-4 p-6 w-auto bg-white">
      <div className="w-[400px]">
        <div>
          <p>Traceability</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aliquam!
          </p>
        </div>
        <div>
          <p>Temper-proof</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aliquam!
          </p>
        </div>
        <div>
          <p className="text-sm font-bold">Transparency</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aliquam!
          </p>
        </div>
      </div>
      <div>
        <p>Hello world</p>
      </div>
    </NavigationMenuContent>
  );
};
