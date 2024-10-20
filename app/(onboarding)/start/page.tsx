import Image from "next/image";

const OnboardingPage = () => {
    return ( <>
        <div className="flex flex-col h-full items-center w-full pt-32">
        <h1 className="text-2xl py-4">welcome to</h1>
        <Image alt="Chapman University Logo" src="/chapmanu.svg" width={400} height={150} />
        </div>
    </> );
}
 
export default OnboardingPage;