"use client";
import SavePlanCard from "@/components/shared/SavePlanCard";
import TodayPlanCard from "@/components/shared/TodayPlanCard";
import { MyPlanContext } from "@/context/MyPlanContext";
import { MainType } from "@/types/main.type";
import Link from "next/link";
import { useContext, useState } from "react";

const ListedPlan = () => {
  const { myPlan,savePlan} = useContext(MyPlanContext);

const [sortBy,setSortBy] = useState<'duration'|'calories'|'rating'>('duration');
const sortPlan =(plan:MainType[])=>{
  const sortedPlan = [...plan];
  if (sortBy==="duration"){
    sortedPlan.sort((a,b)=>b.duration-a.duration);
  }else if(sortBy==="calories"){
    sortedPlan.sort((a,b)=>b.caloriesBurned-a.caloriesBurned);
  }else if(sortBy==="rating"){
    sortedPlan.sort((a,b)=>b.rating-a.rating);
  }
  return sortedPlan;
};
const sortedMyPlan=sortPlan(myPlan);
const sortedSavePlan=sortPlan(savePlan);

const [activeTab, setActiveTab] = useState<"myPlan" | "savePlan">("myPlan");
const currentPlan = activeTab === "myPlan" ? myPlan : savePlan;

  return (
    <div>
      <h1 className="font-bold text-3xl ml-10">MY PLAN</h1>

      <p className="text-[#8A92A0] ml-10">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="flex justify-between mt-5 mx-10 p-10 bg-[#9ca3af0d] rounded-2xl mb-5">
        <div>
          <p className=" text-[#8A92A0]">Exercises</p>
          <p className="text-2xl font-bold text-[#CCFF00] mt-1 text-center">
            {currentPlan.length}
          </p>
        </div>
        <div>
          <p className=" text-[#8A92A0]">Minutes</p>
          <p className="text-2xl font-bold text-white mt-1 text-center">
            {currentPlan.reduce((total, plan) => total + plan.duration, 0)}
          </p>
        </div>
        <div>
          <p className=" text-[#8A92A0]">Calories</p>
          <p className="text-2xl font-bold text-white mt-1 text-center">
            {currentPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}
          </p>
        </div>
      </div>

<div className="flex justify-end mr-13">
  <div className="flex items-center gap-3">
    <span className="whitespace-nowrap text-[#8A92A0] ">Sort By</span>

    <select 
    value={sortBy}
    onChange={(e)=> setSortBy(e.target.value as 'duration'|'calories'|'rating')}
     className="select rounded-2xl"
     >
      <option value={'duration'}>Duration</option>
      <option value={'calories'}>Calories</option>
      <option value={'rating'}>Rating</option>
    </select>
  </div>
</div>
      <div className="tabs tabs-box mx-10">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
          onChange={() => setActiveTab("myPlan")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6 text-center">
          {myPlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {sortedMyPlan.map((plan: MainType) => {
                return (
                <TodayPlanCard key={plan.id} plan={plan}/>
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
                href="/"
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
          onChange={() => setActiveTab("savePlan")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6 text-center">
          {savePlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {sortedSavePlan.map((plan: MainType) => {
                return(
                 <SavePlanCard key={plan.id} plan={plan}/>
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
                href="/"
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
