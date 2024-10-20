import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const PlannerResizables = () => {
    return ( <>
    <div className="hidden md:flex h-full w-full">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={70}>
        <div className="flex bg-secondary text-secondary-foreground h-full p-4 mx-2 flex-col rounded-lg items-center justify-center basis-1/2">
          Yeah
        </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30}>
          <div className="flex bg-secondary text-secondary-foreground h-full flex-col rounded-lg p-4 mx-2 items-center justify-center basis-1/4">
            Second
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      </div>
      <div className="flex flex-col w-full md:hidden">
        <div className="flex bg-secondary text-secondary-foreground h-full p-4 mx-2 mb-2 flex-col rounded-lg items-center justify-center basis-1/2">
          For mobile
        </div>
        <div className="flex bg-secondary text-secondary-foreground h-full flex-col rounded-lg p-4 mx-2 items-center justify-center basis-1/4">
          Yeah
        </div>
      </div>
      </> );
}
 
export default PlannerResizables;