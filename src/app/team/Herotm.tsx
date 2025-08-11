// app/team-details/page.tsx
'use client';
import { HomeIcon } from '@heroicons/react/24/solid';   


export default function Herotm ()  {
    return (
        <>
            <div className=" bg-white mb-15 -mt-16">
                {/* Header section */}
                <div className="bg-[#202153] text-white py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Team Details
                        </h1>
                        <p className="text-sm md:text-base text-gray-300 max-w-xl">
                            Practical renewable energy technology that reduces costs
                            and helps the environment
                        </p>
                    </div>
                </div>

                {/* Breadcrumb section */}
                <div className="flex justify-center -mt-6 max-w-7xl mx-auto">
                    <div className="bg-yellow-400 text-white w-full flex items-center space-x-4 px-6 py-3 rounded-full shadow-md">
                        <div className="flex items-center space-x-2">
                            <HomeIcon className="h-4 w-4" />
                            <span className="text-sm font-medium">Home</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <span className="text-sm font-medium">Team Details</span>
                    </div>
                </div>
            </div>
        </>
    )
}

