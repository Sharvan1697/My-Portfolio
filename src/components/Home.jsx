import HeroPic from "../assets/Hero_pic.jpg";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 px-5 py-18 bg-blue-100">
      <div className="md:w-1/2">
        <h1 className="font-serif italic font-bold text-blue-500 text-4xl">
          Hi,
          <br /> Im Saravanan <span className="text-black">Elangovan</span>
          <p className="text-2xl text-amber-400">Im a full-stack developer</p>
        </h1>
        <div className="flex items-center gap-4 mt-3">
          <a href="https://x.com/EksSaravanan">
            <FaSquareXTwitter
              size={30}
              className="text-white hover:text-black"
            />
          </a>
          <a href="linkedin.com/in/saravanan-elangovan-891864319">
            <FaLinkedin size={30} className="text-white hover:text-blue-800" />
          </a>

          <a href="https://www.instagram.com/eks_sharvan">
            <FaSquareInstagram
              size={30}
              className="text-white hover:text-pink-600"
            />
          </a>
          <a href="https://www.facebook.com/saravanan.elangovan.818870">
            <FaSquareFacebook
              size={30}
              className="text-white hover:text-blue-700"
            />
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={HeroPic} className="w-[500px]" />
      </div>
    </section>
  );
};

export default Home;
