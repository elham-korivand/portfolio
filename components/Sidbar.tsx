import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";

function Sidbar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="../images.jpg"
        alt="image"
        className="border-2 border-white rounded-full w-40 h-40 object-cover"
      />
      <h3 className="text-white md:text-2xl mt-5">
        <span className="text-green-400 text-xl md:text-2xl">Sumit </span>
        Day
      </h3>
      <span className="text-white bg-black w-full rounded-xl my-3 p-1 md:p-2">
        Web developer
      </span>
      <span className="text-white bg-black w-full rounded-xl p-1 md:p-2">
        Download Resume
      </span>
      <div className="flex justify-around	 items-center w-full py-3 ">
        <AiFillYoutube className="text-green-500 w-10 h-10" />
        <AiFillGithub className="text-green-500 w-10 h-10" />
        <AiFillLinkedin className="text-green-500 w-10 h-10" />
      </div>
      <div className="bg-black flex flex-col w-full my-2 py-2">
        <span className="text-white">iran,tehran</span>
        <span className="text-white">elhamkorivand@gmail.com</span>
        <span className="text-white">09331050281</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button
          type="button"
          className="bg-gradient-to-r from-green-500 to-blue-500 m-3 p-1 w-80 rounded-xl text-white md:p-2"
        >
          Email me
        </button>
        <button
          type="button"
          className="bg-gradient-to-r from-green-500 to-blue-500 mx-3 p-1 w-80 rounded-xl text-white md:p-2"
          onClick={changeTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Sidbar;
