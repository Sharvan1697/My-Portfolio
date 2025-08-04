import AboutMe from "../assets/About_me.png";

const About = () => {
  return (
    <section id="about" className="bg-sky-200 flex flex-col md:flex-row pb-10">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={AboutMe} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="px-4 py-4 md:py-24 font-serif italic md:px-10 text-xl">
          <h1 className="font-bold text-3xl border-b-2 w-[150px] text-blue-800">
            About Me
          </h1>
          <p className="text-shadow-lime-100 mt-1">
            ~ Hi, My name is Saravanan
            <span className="text-white hover:text-blue-600">
              {" "}
              Elangovan.
            </span>{" "}
            Iam a full-stack web developer. I build beautiful Websites with
            React.js and Tailwind CSS.
          </p>
          <p className="text-shadow-lime-100 mt-1">
            ~ I am proficient in
            <span className="text-white hover:text-blue-600">
              {" "}
              Frontend skills
            </span>{" "}
            like{" "}
            <a
              href="https://html.com/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              Html
            </a>
            ,{" "}
            <a
              href="https://www.w3schools.com/css/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              CSS
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              Tailwind CSS
            </a>
            ,{" "}
            <a
              href="https://www.javascript.com/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              Javascript
            </a>
            , and{" "}
            <a
              href="https://legacy.reactjs.org/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              React.js
            </a>
            .
          </p>
          <p className="text-shadow-lime-100 mt-1">
            ~ In{" "}
            <span className="text-white hover:text-blue-600">
              backend skills
            </span>{" "}
            I know{" "}
            <a
              href="https://www.mysql.com/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              SQL
            </a>
            ,{" "}
            <a
              href="https://www.python.org/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              Python
            </a>
            ,{" "}
            <a
              href="https://nodejs.org/en"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              Node.js
            </a>
            , and{" "}
            <a
              href="https://expressjs.com/"
              className="hover:bg-green-500 hover:text-yellow-400"
            >
              Express.js
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
