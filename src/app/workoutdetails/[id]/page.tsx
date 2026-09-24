import { MainType } from "@/types/main.type";
import Image from "next/image";
import {
 CalendarCheck,
 ListChecks,
  Bookmark,
} from "lucide-react";

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibrary = async (): Promise<MainType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const libraryData = await getLibrary();

  const library = libraryData.find(
    (library: MainType) => String(library.id) === id,
  );

  if (!library) {
    return <div className="text-white">Workout not found</div>;
  }

  return (
    <div className="mx-4 my-10 md:mx-8 lg:mx-16">
      <div className="overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827] shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div className="relative h-[400px] lg:h-[800px] ">
            <Image
              src={library.image}
              alt={library.name}
              fill
              className="object-cover rounded-b-sm"
            />
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl font-bold uppercase text-white md:text-4xl">
              {library.name}
            </h1>

            <p className="mt-4 leading-relaxed text-[#9CA3AF]">
              {library.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {library.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-4 py-1 text-sm font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#1F2937] bg-[#0B1220]">
          
              <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Equipment
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.equipment}
                </span>
              </div>

          
              <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Difficulty
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.difficulty}
                </span>
              </div>

           
              <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Sets
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.sets}
                </span>
              </div>

        
              <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Reps
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.reps}
                </span>
              </div>

        
              <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Duration
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.duration} min
                </span>
              </div>

           
              <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Calories
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-bold uppercase text-[#6B7280]">
                  Rating
                </span>
                <span className="text-sm font-semibold text-[#E5E7EB]">
                  {library.rating}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <div className="mb-4 flex items-center gap-2">
                <ListChecks size={22} className="text-[#C2F800]" />

                <h2 className="text-lg font-bold uppercase text-white">
                  Instructions
                </h2>
              </div>

              <ol className="space-y-3">
                {library.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-relaxed text-[#9CA3AF]"
                  >
                    <span className="font-bold text-[#C2F800]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 py-3 font-bold text-black hover:bg-[#b5e800]">
                <CalendarCheck size={20} />
                Add to today&apos;s plan
              </button>

              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#374151] px-5 py-3 font-semibold text-white hover:bg-[#1F2937]">
                <Bookmark size={20} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
