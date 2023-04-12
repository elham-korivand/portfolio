import Navbar from "../components/navbar";
import Sidbar from "../components/Sidbar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14  sm:px-20 ">
        <div className="col-span-12 p-4 text-center bg-gray-900 dark:bg-gray-900 rounded-2xl md:col-span-4">
          <Sidbar />
        </div>
        <div className="col-span-12 bg-gray-900 rounded-2xl  md:col-span-8 ">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
