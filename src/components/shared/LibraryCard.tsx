import Image from 'next/image';
import { Clock,Flame, Star } from "lucide-react";
import { MainType } from '@/types/main.type';
import Link from 'next/link';
interface LibraryTypeProps{
    library:MainType
}

const LibraryCard = ({library}:LibraryTypeProps) => {
    return (
      <Link href={`/workoutdetails/${library.id}`}>
            <div 
                className="bg-[#111827] rounded-2xl overflow-hidden border border-[#1F2937] shadow-lg"
            >
          <div className="relative">
            <Image
              src={library.image}
              alt={library.name}
              width={800}
              height={700}
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="p-5">
            <div className="flex gap-2 mb-3">
              {library.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#C2F800] text-black rounded-2xl px-4 py-1 text-xs font-bold uppercase"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h2 className="text-white text-xl font-bold uppercase mb-2">
              {library.name}
            </h2>

            <p className="text-[#9CA3AF] text-sm mb-5">
              {library.equipment}
            </p>
            <div className="flex gap-5 items-center text-sm">
              <span className="text-[#9CA3AF] flex items-center">
                <Clock size={16} />
                {library.duration} min
              </span>

              <span className="text-[#9CA3AF] flex items-center">
                <Flame size={16} />
                {library.caloriesBurned} kcal
              </span>

              <span className="text-[#9CA3AF] flex items-center">
                <Star size={16} />{library.rating}
              </span>
            </div>

          </div>
        </div>
        </Link>
    );
};

export default LibraryCard;