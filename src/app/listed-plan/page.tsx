"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { MainType } from "@/types/main.type";
import { Check, Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const ListedPlan = () => {
  const { myPlan, savePlan } = useContext(MyPlanContext);

  return (
    <div>
      <h1 className="font-bold text-3xl ml-10">MY PLAN</h1>

      <p className="text-[#D1D5DB] ml-10">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="flex justify-between mt-5 mx-10 p-10 bg-[#9ca3af0d] rounded-2xl mb-5">
        <div>
          <p className=" text-[#D1D5DB]">Exercises</p>
          <p className="text-2xl font-bold text-[#CCFF00] mt-1 text-center">
            {myPlan.length}
          </p>
        </div>
        <div>
          <p className=" text-[#D1D5DB]">Minutes</p>
          <p className="text-2xl font-bold text-white mt-1 text-center">
            {myPlan.reduce((total, plan) => total + plan.duration, 0)}
          </p>
        </div>
        <div>
          <p className=" text-[#D1D5DB]">Calories</p>
          <p className="text-2xl font-bold text-white mt-1 text-center">
            {myPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}
          </p>
        </div>
      </div>

      <div className="tabs tabs-box mx-10">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6 text-center">
          {myPlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {myPlan.map((plan: MainType) => {
                return (
                  <div key={plan.id} className="flex w-full items-center gap-4 rounded-2xl border border-[#1F2937] bg-[#9ca3af0d]  p-4">
                    <div className="h-20 w-35 shrink-0">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        width={300}
                        height={200}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                    <div>
                    <div className="ml-4 mb-2">
                        <h2 className="text-left text-xl font-bold uppercase text-white">
                          {plan.name}
                        </h2>

                        <p className="mt-1 text-left text-sm text-[#D1D5DB]">
                          {plan.equipment}
                        </p>
                         </div>
                        <div className="flex gap-2 ml-4">
                         <span className="flex items-center gap-1">
                          <Clock size={16} className="text-[#CCFF00]" />
                          <p className="text-[#D1D5DB]">{plan.duration}</p>
                          <p className="text-[#D1D5DB]">min</p>
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame size={16} className="text-[#CCFF00]" />
                          <p className="text-[#D1D5DB]">{plan.caloriesBurned}</p> 
                          <p className="text-[#D1D5DB]">kcal</p>
                        </span>

                        <span className="flex items-center gap-1">
                          <Star size={16} className="text-[#CCFF00]"/>
                          <p className="text-[#D1D5DB]">{plan.rating}</p>
                        </span>  
                        </div>
                        </div>
                        <div className="flex ml-auto gap-2"> 
                        <button className="rounded-2xl border border-[#374151] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1F2937]">
                          View Details
                        </button>
                        <button className="rounded-2xl bg-[#C2F10D] px-4 py-2 text-sm font-semibold text-black hover:bg-[#b5e600] flex items-center">
                         <Check size={16}/> Mark as Done
                        </button>
                        <button className="text-[#D1D5DB]">
                           ✕
                       </button>
                        </div> 
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h1 className="font-bold">NOTHING HERE YET</h1>

              <p className="text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="inline-block text-black bg-[#C2F10D] font-semibold px-5 py-1 rounded-2xl mt-8"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content bg-base-100 border-base-300 p-6 text-center">
          {savePlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {savePlan.map((plan: MainType) => {
                return(
                    <div key={plan.id} className="flex w-full items-center gap-4 rounded-2xl border border-[#1F2937] bg-[#9ca3af0d]  p-4">
                    <div className="h-20 w-35 shrink-0">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        width={300}
                        height={200}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                    <div>
                    <div className="ml-4 mb-2">
                        <h2 className="text-left text-xl font-bold uppercase text-white">
                          {plan.name}
                        </h2>

                        <p className="mt-1 text-left text-sm text-[#D1D5DB]">
                          {plan.equipment}
                        </p>
                         </div>
                        <div className="flex gap-2 ml-4">
                         <span className="flex items-center gap-1">
                          <Clock size={16} className="text-[#CCFF00]" />
                          <p className="text-[#D1D5DB]">{plan.duration}</p>
                          <p className="text-[#D1D5DB]">min</p>
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame size={16} className="text-[#CCFF00]" />
                          <p className="text-[#D1D5DB]">{plan.caloriesBurned}</p> 
                          <p className="text-[#D1D5DB]">kcal</p>
                        </span>

                        <span className="flex items-center gap-1">
                          <Star size={16} className="text-[#CCFF00]"/>
                          <p className="text-[#D1D5DB]">{plan.rating}</p>
                        </span>  
                        </div>
                        </div>
                        <div className="flex ml-auto gap-2"> 
                        <button className="rounded-2xl border border-[#374151] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1F2937]">
                          View Details
                        </button>
                        <button className="text-[#D1D5DB]">
                           ✕
                       </button>
                        </div> 
                  </div> 
                )
             })}
            </div>
          ) : (
            <div>
              <h1 className="font-bold">NOTHING HERE YET</h1>

              <p className="text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="inline-block text-black bg-[#C2F10D] font-semibold px-5 py-1 rounded-2xl mt-8"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedPlan;
