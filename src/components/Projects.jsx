import { Link } from "react-router-dom";
import Projects_image from "../assets/Projects_image.jpg";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col md:flex-row bg-blue-100">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <img src={Projects_image} className="h-[85%]" />
      </div>
      <div className="md:w-1/2 py-12 pl-20 font-serif">
        <h1 className="text-3xl text-blue-600 font-extrabold border-b-2 w-[150px]">
          Projects :
        </h1>
        <ol className="list-disc pt-4 pl-20">
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvannxtwatch.ccbp.tech">NxtWatch Tube</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvanecomweb.ccbp.tech/">NxtTrendz E-Commerce</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="http://sharvanprjct.ccbp.tech">Projects Showcase</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="http://sharvantechcrs.ccbp.tech">Tech Languages</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="http://sharvantravelgd.ccbp.tech">Travel Guide</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="http://sharvanvisitcry.ccbp.tech">Visited City</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvancharcoun.ccbp.tech/">Character Counter</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="http://sharvansearchli.ccbp.tech">Songs Playlist</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="http://sharvanlanguage.ccbp.tech">
              Multilingual Greetings
            </a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvanedittext.ccbp.tech/">Editable Text Input</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvannotes.ccbp.tech/">Notes</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvanreadmore.ccbp.tech/">Read More</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvanpswd.ccbp.tech/">Password Validator</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvanlock.ccbp.tech/">Lock And Unlock</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvangradient.ccbp.tech/">
              Generate a CSS Color Gradient
            </a>
          </li>

          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvantheme.ccbp.tech/">Theme Changer</a>
          </li>
          <li className="text-xl hover:text-amber-400">
            <a href="https://sharvancontext.ccbp.tech/">Layout</a>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Projects;
