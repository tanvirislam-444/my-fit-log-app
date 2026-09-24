'use client'
import { MyPlanContext } from "@/context/MyPlanContext";
import { MainType } from "@/types/main.type";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";


const SaveButton = ({library}:{library:MainType}) => {

const {savePlan,setSavePlan}= useContext(MyPlanContext);

    const handleMyPlan=()=>{
     console.log ('read button trigured' ,library);
     setSavePlan([...savePlan,library]);
     toast.success("Save for later");
    }
    return (
                 <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#374151] px-5 py-3 font-semibold text-white hover:bg-[#1F2937]" onClick={()=>handleMyPlan()}>
                <Bookmark size={20} />
                Save for later
              </button>
    );
};

export default SaveButton;