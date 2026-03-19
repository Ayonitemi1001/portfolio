import React from "react";
import { ex } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Design System/card";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 flex flex-col justify-center items-center mt-20 px-4 sm:px-0"
    >
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-10 text-center">
        <h2 className="text-gray-500 text-sm font-bold tracking-wide">
          What Skills I have
        </h2>
        <h1 className="text-cyan-600 font-bold text-2xl">My Experience</h1>
      </div>

      {/* Card Container */}
      <Card
        className="
        w-full max-w-sm sm:w-104 sm:max-w-none
        bg-cyan-950 
        rounded-[2rem] sm:rounded-[2.5rem] 
        p-6 sm:p-8 
        border border-transparent 
        hover:bg-transparent hover:border-[#4db5ff] 
        transition-all duration-300 ease-in-out
        cursor-default
      "
      >
        {/* Title */}
        <CardHeader className="p-0 border-b-0">
          <CardTitle className="text-center text-cyan-400 text-lg sm:text-xl font-medium mb-8 sm:mb-10">
            Frontend Development
          </CardTitle>
        </CardHeader>

        {/* Grid Layout */}
        <CardContent className="p-0 grid grid-cols-2 gap-y-6 gap-x-4 sm:gap-x-6">
          {ex.map((exep) => (
            <div key={exep.id} className="flex items-start gap-3">
              <div className="mt-1 text-cyan-400">{exep.icon}</div>

              <div className="flex flex-col">
                <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                  {exep.title}
                </h3>
                <span className="text-gray-400 text-[10px] sm:text-xs font-light">
                  {exep.level}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
