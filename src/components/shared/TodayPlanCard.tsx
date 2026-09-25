"use client";
import { MainType } from "@/types/main.type";
import Image from "next/image";
import { Check, Clock, Flame, Star } from "lucide-react";
import { useContext } from "react";
import { MyPlanContext } from "@/context/MyPlanContext";
import Link from "next/link";
import { toast } from "react-toastify";
interface ITodayPlanProps {
  plan: MainType;
}

const TodayPlanCard = ({ plan }: ITodayPlanProps) => {
  const { myPlan, setMyPlan } = useContext(MyPlanContext);
  const handleRemove = (id: number) => {
    setMyPlan(myPlan.filter((plan) => plan.id !== id));
    toast.success('Removed from MyPlan')
  };
  return (
<div
  className="flex w-full flex-col gap-4 rounded-2xl border border-[#1F2937] bg-[#9ca3af0d] p-4 md:flex-row md:items-center">
  <div className="h-48 w-full shrink-0 sm:h-52 md:h-20 md:w-35">
    <Image
      src={plan.image}
      alt={plan.name}
      width={300}
      height={200}
      className="h-full w-full rounded-xl object-cover"
    />
  </div>


  <div className="min-w-0 flex-1">
    <div className="mb-2 md:ml-4">
      <h2 className="text-left text-xl font-bold uppercase text-white">
        {plan.name}
      </h2>

      <p className="mt-1 text-left text-sm text-[#D1D5DB]">
        {plan.equipment}
      </p>
    </div>

    <div className="ml-0 flex flex-wrap gap-3 md:ml-4">
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
        <Star size={16} className="text-[#CCFF00]" />
        <p className="text-[#D1D5DB]">{plan.rating}</p>
      </span>
    </div>
  </div>

  <div className="flex w-full flex-wrap gap-2 md:ml-auto md:w-auto md:flex-nowrap">
    <Link
      href={`/workoutdetails/${plan.id}`}
      className="flex flex-1 items-center justify-center rounded-2xl border border-[#374151] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1F2937] md:flex-none"
    >
      View Details
    </Link>

    <button onClick={() => handleRemove(plan.id)} className="flex flex-1 items-center justify-center gap-1 rounded-2xl bg-[#C2F10D] px-4 py-2 text-sm font-semibold text-black hover:bg-[#b5e600] md:flex-none">
      <Check size={16} />
      Mark as Done
    </button>

    <button
      onClick={() => handleRemove(plan.id)}
      className="rounded-2xl px-3 py-2 text-[#D1D5DB] hover:bg-[#1F2937]"
    >
      ✕
    </button>
  </div>
</div>
  );
};

export default TodayPlanCard;
