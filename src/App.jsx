import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'


function App() {

  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 1,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.3,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  })

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-45%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".logo18", {
      opacity: 1,
      y: -250,
      duration: 2,
      delay: "-.3",
    })

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${x * 0.6}%`,
      })
      gsap.to(".sky", {
        x: x,
      })
      gsap.to(".bg", {
        x: x * 2,
      })
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='Navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
              <div className='logo flex gap-6'>
                <div className='lines flex flex-col gap-[5px]'>
                  <div className='line w-13 h-2 bg-white'></div>
                  <div className='line w-9 h-2 bg-white'></div>
                  <div className='line w-5 h-2 bg-white'></div>
                </div>
                <h3 className='text-4xl -mt-[10px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen bg-red-300">
              <img className='sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover ' src="./sky.png" alt="" />
              <img className=' bg absolute scale-[1.8] rotate-[-5deg] top-0 left-0 w-full h-full object-cover ' src="./bg.png" alt="" />
              <div className="text text-white absolute flex flex-col gap-3  top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className='text-[10rem] leading-none -ml-40 '>grand</h1>
                <h1 className='text-[10rem] leading-none  '>theft</h1>
                <h1 className='text-[10rem] leading-none -ml-40 '>auto</h1>
              </div>
              <img className='character scale-[10] rotate-[-20deg] z-[10] absolute -bottom-[200%] left-1/2 -translate-x-1/2' src="./girlbg.png" alt="" />
              <img className='logo18 opacity-0 absolute  w-30 bottom-0 left-290 ' src="./logo18.png" alt="" />
            </div>

            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-13 px-10 bg-gradient-to-t from-black too-transparent'>
              <div className="flex gap-4 items-center hover: cursor-pointer">
                <i class="text-4xl ri-arrow-right-fill cursor-pointer transition-all duration-700 hover:rotate-[90deg]"></i>
                <h3 className=' text-xl font-[Helvetica_Now_Display] transition-all duration-700 hover:scale-[1.2]'>Scroll Down</h3>
              </div>

              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]' src="./ps5.png" alt="" />
            </div>


          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className='limg relative w-1/2 h-full'>
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
              </div>
              <div className="rg w-[40%] ">
                <h1 className="text-8xl">Still Running</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className='mt-10 text-[18px] font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis id fuga similique soluta unde incidunt mollitia nostrum, amet ipsum. Porro delectus error consequatur corporis id voluptatem. Nam, molestias debitis.</p>
                <p className='mt-2 text-[18px] font-[Helvetica_Now_Display]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit vero iusto, reiciendis at expedita quidem. Libero tempore eaque, accusamus odio adipisci aliquam fuga dolor omnis dolore minima commodi, culpa dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente, veniam suscipit est esse error accusantium enim aut pariatur, atque eveniet laborum. Aspernatur earum voluptatem ex hic dolorum officiis voluptatibus!</p>
                <p className='mt-10 text-[18px] font-[Helvetica_Now_Display]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit vero iusto, reiciendis at expedita quidem. Libero tempore eaque, accusamus odio adipisci aliquam fuga dolor omnis dolore minima commodi, culpa dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente, veniam suscipit est esse error accusantium enim aut pariatur, atque eveniet laborum. Aspernatur earum voluptatem ex hic dolorum officiis voluptatibus!</p>
                <button className='bg-yellow-500 px-10 py-10 text-3xl text-black mt-10 cursor-pointer'>Download Now</button>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  )
}

export default App
