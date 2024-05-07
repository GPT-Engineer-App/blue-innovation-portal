import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <div className="relative">
      <div className="h-screen bg-water flex flex-col justify-center items-center bg-no-repeat bg-cover">
        <img src="innofuse.svg" className="absolute top-4 z-30 w-36" alt="Innofuseblue Logo" />
        <div className="absolute z-10 bg-[#015BAC] opacity-70 mix-blend-multiply w-full h-screen"></div>
        <div className="max-w-[1400px] w-full z-40">
          <div className="flex items-end text-center h-[100px] mb-8">
            <p className="text-white w-full text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">Let’s dive into the possibilities.</p>
          </div>
        </div>
      </div>
      <div className="text-dark">
        <div className="w-full flex text-center px-[10%] md:px-[15%] justify-center items-center py-[90px] xl:py-[120px]">
          <div className="max-w-[954px]">
            <p className="display-sm xl:display-lg text-transparent bg-clip-text font-light" style={{ backgroundImage: "linear-gradient(to right, #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE ,#0078C3, #0078C3 , #00A3E6 )" }}>
              Your gateway to a world of Blue
              <br />
            </p>
            <p className="display-sm xl:display-lg text-transparent bg-clip-text font-light" style={{ backgroundImage: "linear-gradient(to right, #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE ,#0078C3, #00A3E6, #00AEEF)" }}>
              innovation and opportunity
            </p>
            <p className="mt-8 text-lg xl:text-2xl">Innofuse Blue brings together global best practices from the blue economy and entrepreneur supporting innovation programs, connecting with the blue business community providing opportunities to scale. We are committed to engaging the global ecosystem to lead blue and sustainable innovation projects in Portugal and beyond.</p>
          </div>
        </div>
      </div>
      <div className="w-full text-white flex flex-col text-center px-[10%] md:px-[15%] justify-center items-center py-[90px] xl:py-[120px]" style={{ backgroundImage: "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )" }}>
        <div className="flex flex-col items-center">
          <p className="display-sm xl:display-lg font-light">Anchored in Portugal</p>
          <img src="almada.png" alt="Image of the city of Almada" className="mt-8" />
          <article className="mt-14 flex flex-col gap-8 xl:headline-sm max-w-[765px] text-center title-md font-normal">
            <p>Planned location for Innofuse Blue Incubator and innovation Hub is on the Tejo riverbank overlooking Lisbon, and less than 30 minutes from Lisbon International Airport.</p>
            <p>Our interim location is just steps away and provided by our partner Southshore Investments with the same bright and spacious environment for our soon to launch initial programs.</p>
            <p>This collaborative partner-driven initiative is evolving in parallel with program design, and we are happy to already be working closely with our University partners Nova University, and Egas Moniz, and with strong support from Almada Innovation District and Almada Municipality.</p>
          </article>
        </div>
        <p className="mt-20 mb-14 title-md xl:headline-lg">Interested in partnering with us? Let us know!</p>
        <a href="/contact">
          <button className="bg-[#016CB9] font-semibold text-white rounded-md py-3.5 px-6">Let's innovate</button>
        </a>
      </div>
      <footer className="py-12 bg-primary px-[10%] md:px-[15%] text-center text-[#48484B] flex-col xl:flex-row gap-4 xl:gap-0 flex justify-center items-center font-normal">
        <p>
          <span className="xl:mr-2">Innofuseblue Portugal </span>
          <span className="xl:inline hidden">|</span>
          <span className="mx-2">contact@innofuseblue.com</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
