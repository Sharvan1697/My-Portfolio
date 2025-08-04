import ResumeImage from "../assets/Resume_image.jpg";
import OriginalResumeImg from "../assets/Original_Resume_image.png";

const Resume = () => {
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row gap-4 px-5 py-18 bg-sky-200"
    >
      <div className="md:w-1/2">
        <img src={ResumeImage} className="w-[500px]" />
      </div>
      <div className="md:w-1/2 flex flex-col items-center relative">
        <img src={OriginalResumeImg} className="w-[400px] h-[500px]" />
        <div className="flex flex-col justify-center absolute top-0 bottom-0 bg-blue-200 w-[400px] h-[500px] opacity-0 duration-500 hover:opacity-100">
          <p className="font-serif italic font-bold text-blue-500 text-4xl text-center">
            Resume{" "}
            <a
              href="../public/Saravanan_Resume_latest.pdf"
              download
              className="font-bold hover:bg-yellow-300 hover:text-white"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
