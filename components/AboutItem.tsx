import { RiComputerLine } from "react-icons/ri";

function AboutItem({ item }) {
  return (
    <>
      <div className="w-80 h-25 mt-2 mb-2">
        <div className="bg-black text-white p-3 text-center  w-full h-full  rounded-xl md:p-4 text-lg flex items-center">
          <RiComputerLine className="text-green-400 text-5xl " />
          <div className="flex flex-col items-baseline ml-2 w-full">
            <h5 className="font-bold">{item.title}</h5>
            <span className="text-sm text-left">{item.about}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutItem;
