'use client'
import React,{useState,useEffect} from 'react'

const Explore = () => {
    const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});

    const handleScroll = () => {
      const zoomers = document.querySelectorAll('.zoomer');
      const newVisibilityState: Record<string, boolean> = {};
  
      zoomers.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const appearingHeight = window.innerHeight * 0.65;
  
          newVisibilityState[index] = (rect.top <= appearingHeight);

          if(index==0)
            console.log(appearingHeight,":",rect.top)
        }
      });
  
      setVisibleElements(newVisibilityState);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="light bg-transparent">
        <section className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20">
            <div id="top" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                <div>
                    <h1  className={`text-red-500 dark:text-red zoomer ${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'}`}>POPULAR AREAS</h1>
                    <h1 className={`text-black text-[40px] font-semibold leading-10 mt-4 drak:text-black  ${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'}`}>Explore most<br/>popular areas</h1>
                </div>
                <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
                    <div className="h-[400px] bg-cover bg-center rounded-xl  "style={{ backgroundImage: 'url("/assets/explore-1.jpg")' }}></div>
                    <div  data-aos-delay="600" className="h-[400px] bg-cover bg-center rounded-xl  " style={{ backgroundImage: 'url("/assets/explore-2.jpg")' }}></div>
                    <div  data-aos-delay="800" className="h-[400px] bg-cover bg-center rounded-xl  " style={{ backgroundImage: 'url("/assets/explore-3.jpg")' }}></div>
                </div>
            </div>
            <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6">
                <div data-aos="slide-up" data-aos-delay="200" className="flex justify-center lg:items-center gap-8 w-full  ">
                    <h1 className="text-black text-7xl font-semibold drak:text-black">5K</h1>
                    <h1 className="text-lg text-gray-600 drak:text-black">ACTIVE <br/>LISTINGS</h1>
                </div>
                <div data-aos="slide-up" data-aos-delay="400" className="flex justify-center lg:items-center gap-8 w-full  ">
                    <h1 className="text-black text-7xl font-semibold drak:text-black">9K</h1>
                    <h1 className="text-lg text-gray-600 drak:text-black">SOLID <br/>LISTINGS</h1>
                </div>
                <div data-aos="slide-up" data-aos-delay="600" className="flex justify-center lg:items-center gap-8 w-full  ">
                    <h1 className="text-black text-7xl font-semibold drak:text-black">6K</h1>
                    <h1 className="text-lg text-gray-600 drak:text-black">CLIENTS <br/>WE'VE SERVED</h1>
                </div>
        </div>
    </section>
    </div>
  )
}

export default Explore