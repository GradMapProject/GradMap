import Navbar from "@/components/navbar";

const PlannerLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <Navbar />
            <main className="h-full">
                {children}
            </main>
        </div>
     );
}
 
export default PlannerLayout;