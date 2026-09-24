
import { MainType } from "@/types/main.type";
import LibraryCard from "../shared/LibraryCard";

const getLibrary=async()=>{
const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
const data = await res.json();
return data
}

const Library = async () => {
  const libraryData = await getLibrary();

  return (
      <div>
    <div className="mx-6 mt-10">
      <h2 className="text-3xl font-bold text-white uppercase">
        THE LIBRARY
      </h2>

      <p className="text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10">
      {libraryData.map((library:MainType) => {
         return<LibraryCard key={library.id} library={library}/>
      }
      )}
    </div>
    </div>
  );
};

export default Library;