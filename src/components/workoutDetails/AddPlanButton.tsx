'use client'
import { MyPlanContext } from "@/context/MyPlanContext";
import { MainType } from "@/types/main.type";
import { CalendarCheck } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";


const AddPlanButton = ({library}:{library:MainType}) => {

const {myPlan,setMyPlan}= useContext(MyPlanContext);

    const handleMyPlan=()=>{
    const alreadyAdded = myPlan.some((item)=>item.id===library.id);
    
    if(alreadyAdded){
      toast.error("Already in your plan");
      return;
    }setMyPlan([...myPlan,library]);
     toast.success("Add to today's plan");
    }
    return (
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 py-3 font-bold text-black hover:bg-[#b5e800]" onClick={()=>handleMyPlan()}>
                <CalendarCheck size={20} />
                Add to today&apos;s plan
              </button>
    );
};

export default AddPlanButton;