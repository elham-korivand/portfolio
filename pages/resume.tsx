import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { Iskill } from "../type";
function Resume() {
  return (
    <div className="text-white mx-3">
      <div>
        <h5 className="text-2xl my-1 font-bold">Education</h5>
      </div>
      <div>
        <h5>Computer Science Engineering</h5>
        <p>Academy of Technology(2017-2021)</p>
        <p>I am currently B.tech in Cumputer Science Enginner</p>
      </div>
      <div>
        <h5>Computer Science Engineering</h5>
        <p>Academy of Technology(2017-2021)</p>
        <p>I am currently B.tech in Cumputer Science Enginner</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-2xl my-5 font-bold">Languages & Framework</h1>
          {languages.map((item: Iskill) => {
            return <Bar item={item} />;
          })}
        </div>
        <div>
          <h1 className="text-2xl my-5 font-bold">Tools & Software</h1>
          {tools.map((item: Iskill) => {
            return <Bar item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
