import { Map } from "lucide-react";
import { ModeToggle } from "./theme-switcher";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( <>
        <div className="flex flex-row items-center justify-between w-full p-2">
        <div className="text-2xl font-bold text-foreground px-2 gap-x-2 flex flex-row cursor-default">
          <Map className="translate-y-1" />Grad Map
        </div>
        <div className="flex flex-row gap-x-2">
          <ModeToggle />
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
            <Button variant="outline" className="text-foreground px-2" >Help</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </> 
    );
}
 
export default Navbar;