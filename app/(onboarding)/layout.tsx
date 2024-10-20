import Navbar from "@/components/navbar";

const OnboardingLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <Navbar />
            <main className="">
                {children}
            </main>
        </div>
     );
}
 
export default OnboardingLayout;