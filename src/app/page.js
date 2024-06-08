import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { IoIosNavigate } from "react-icons/io";
import { CiText } from "react-icons/ci";
import { RiAiGenerate } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { MdDataUsage } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { MdOutlineContactPhone } from "react-icons/md";

export default function Home() {
  return (
    <div className="main">
      <div className="hero_section flex items-center flex-col md:flex-row">
        <div className="left_hero md:w-1/2 flex flex-col items-start justify-around h-72">
          <h4 className="font-semibold px-3">
            Transform Your Words into Professional PDFs Instantly with T2P –
            Simple, Fast, and Reliable Text to PDF Conversion!
          </h4>
          <div className="flex items-center flex-col md:flex-row gap-4 px-4 justify-between w-full">
            <div className="hero_buttons flex items-start gap-4 px-4">
              <button className="btn btn-primary border-2 border-secondary text-white p-3 px-6 rounded-md w-40">
                <Link href={"/"} className="flex items-center gap-2">
                  Convert <SiConvertio size={27} />
                </Link>
              </button>
              <button className="btn btn-secondary border-2 border-primary text-white p-3 px-6 rounded-md w-40">
                <Link href={"/"} className="flex items-center gap-2">
                  Blog <FaBlog size={27} />
                </Link>
              </button>
            </div>
            <div className="social_links flex items-center gap-5">
              <button className="bg-secondary rounded-full p-2 border-2 border-primary transition-all hover:scale-110">
                <Link href={"/"}>
                  <FaGithub size={32} />
                </Link>
              </button>
              <button className="bg-primary rounded-full p-2 border-2 border-secondary transition-all hover:scale-110">
                <Link href={"/"}>
                  <FaWhatsapp color="white" size={32} />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="right_hero flex items-center justify-center">
          <Image src={"/t2p_hero_img.png"}  alt="Hero img" width={600} height={400} />
        </div>
      </div>
      <div className="how_it_works poppins flex flex-col items-center p-4 w-full" id="working">
        <h3 className=" text-2xl font-bold zeyada flex items-center gap-3">
          How It Works{" "}
          <IoCodeWorkingOutline className="text-secondary" size={29} />
        </h3>
        <div className="divider divider-secondary">
          <CiStar className="text-secondary" size={79} />
        </div>
        <div className="how-it-works-cards flex items-center justify-center md:justify-around flex-col md:flex-row w-full gap-10">
          <div className="card md:w-96 w-72 h-72 bg-primary text-primary-content border-2 border-secondary">
            <div className="card-body">
              <h2 className="card-title">
                Navigate <IoIosNavigate size={29} />
              </h2>
              <p>
                Navigate to the T2P to generate Pdf's from you text Input, YOU
                CAN NAVIGATE FOR TOP MENU AND BELOW BUTTON ALSO{" "}
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-secondary border-primary border-2">
                  navigate <IoIosNavigate size={29} />
                </button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 w-72 h-72 bg-primary text-primary-content border-2 border-secondary">
            <div className="card-body">
              <h2 className="card-title">
                Enter text <CiText size={29} />
              </h2>
              <p>
                Enter your input text in the textarea that needs to be converted{" "}
                <span className="text-secondary font-semibold">Note:</span>
                Length must be greater than 50 characters
              </p>

              <div className="card-actions justify-between">
                <button className="btn btn-secondary border-primary border-2">
                  <IoIosNavigate size={29} />
                  T2P page{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="card md:w-96 w-72 h-72 bg-primary text-primary-content border-2 border-secondary">
            <div className="card-body">
              <h2 className="card-title">
                Generate PDF <RiAiGenerate size={29} />
              </h2>
              <p>
                Click on generate pdf and wait for some time, after that
                download will start automatically
              </p>

              <div className="card-actions justify-between">
                <button className="btn btn-secondary border-primary border-2">
                  <IoIosNavigate size={29} />
                  T2P page{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uses_f_t2p poppins flex flex-col items-center p-4">
        <h3 className=" text-2xl font-bold zeyada flex items-center gap-3">
          Some Usecases of T2P{" "}
          <MdDataUsage className="text-secondary" size={29} />
        </h3>
        <div className="carousel md:w-[85%] w-full mx-auto h-96 mt-7">
          <div id="item1" className="carousel-item w-full">
            <Image
            alt="usecase 1"
              src="/use_1.png"
              className="w-full rounded-md"
              width={1200}
              height={100}
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image
             alt="usecase 2"
              src="/use_2.png"
              className="w-full rounded-md"
              width={800}
              height={100}
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
            alt="usecase 3"
              src="/use_3_a.png"
              className="w-full rounded-md"
              width={1200} 
              height={100}
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image
            alt="usecase 4"
              src="/use_3.png"
              className="w-full rounded-md"
              width={1200}
              height={100}
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <div className="contact-form flex items-center justify-center flex-col mb-10 gap-10">
       <div className="divider divider-secondary">
          <CiStar className="text-secondary" size={79} />
        </div>
        <h3 className=" text-2xl font-bold zeyada flex items-center gap-3">
          Contact us <MdOutlineContactPhone className="text-secondary" size={29} />
        </h3>
        
        <form action="" className="w-[80%] mx-auto poppins flex flex-col gap-3">
          <label className="input input-bordered flex items-center gap-2 font-semibold">
            Name
            <input type="text" className="grow" placeholder="John Doe" />
          </label>
          <label className="input input-bordered flex items-center gap-2 font-semibold">
            Email
            <input type="text" className="grow" placeholder="johndoe@test.com" />
          </label>
          <label className="input font-semibold input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Subject" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Enter message" />
            <span className="badge badge-info bg-secondary ">Message</span>
          </label>
          <button className="btn btn-secondary">Send message</button>
        </form>
      </div>
    </div>
  );
}
