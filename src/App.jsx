import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/Animation.json";
import { LogoBlack } from "./assets/img";


function App() {
  return (
    <>
      <section className="h-screen">
        <div className="2xl:container mx-auto h-[100%] ">
          <div className="w-[100%] mx-auto grid grid-cols-1 bg-black">
            <div className="w-[90%] mx-auto flex justify-start items-center">
              <img src={LogoBlack} alt="Logo" className="h-28" />
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%]">
            <div className="flex flex-col justify-evenly md:justify-center items-center space-y-4 text-center">
              <p className="text-xl md:text-3xl font-['Poppins']">Launching Soon!</p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-['Poppins']">TO REVAMP YOU</h1>
             <a href="https://chat.whatsapp.com/BhFNkq8Bjrt5KACphAtam0"><button className="text-base md:text-xl font-['Poppins'] py-4 text-white 
              bg-[#FF9F00] px-14 rounded-3xl">
                Join our Journey
              </button></a> 
            </div>

            <div className="flex flex-col justify-start items-center md:justify-center">
              <Lottie
                animationData={groovyWalkAnimation}
                loop={true}
                className="h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
