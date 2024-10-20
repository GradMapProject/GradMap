"use client";

import { MultiSelect } from "@/components/ui/multi-select";
import { ChartSpline, Database, Film, Gamepad2, Laptop } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const majors = [
    { value: "computer_science", label: "Computer Science", icon: Laptop },
    { value: "data_science", label: "Data Science", icon: Database },
];

const minors = [
    { value: "game_development_programming", label: "Game Development Programming", icon: Gamepad2 },
    { value: "analytics", label: "Analytics", icon: ChartSpline },
    { value: "film_studies", label: "Film Studies", icon: Film },
];

const OnboardingPage = () => {
    const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
    const [selectedMinors, setSelectedMinors] = useState<string[]>([]);

    return ( 
    <>
        <div className="flex flex-col h-full items-center w-full pt-24">
            <h1 className="text-2xl py-4">welcome to</h1>
            <Image className="block dark:hidden" alt="Chapman University Logo" src="/chapman_light.svg" width={400} height={150} />
            <Image className="hidden dark:block" alt="Chapman University Logo" src="/chapman_dark.svg" width={400} height={150} />
            <div className="w-full min-w-md max-w-xl pt-10 space-y-1">
                <h1>Major(s)</h1>
                <MultiSelect
                    options={majors}
                    onValueChange={setSelectedMajors}
                    defaultValue={selectedMajors}
                    placeholder="Select Your Major(s)"
                    variant="secondary"
                    animation={3}
                    doSelectAll={false}
                />
            </div>
            <div className="w-full min-w-md max-w-xl pt-10 space-y-1">
                <h1>Minor(s)</h1>
                <MultiSelect
                    options={minors}
                    onValueChange={setSelectedMinors}
                    defaultValue={selectedMinors}
                    placeholder="Select Your Minors(s)"
                    variant="secondary"
                    animation={3}
                    doSelectAll={false}
                />
            </div>
        </div>
    </> 
    );
}
 
export default OnboardingPage;