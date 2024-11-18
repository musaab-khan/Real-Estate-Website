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
          const appearingHeight = -126;
  
          newVisibilityState[index] = (rect.top <= appearingHeight);

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
                    <h1  className={`text-red-500 dark:text-red zoomer ${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'}`}>POPULAR AREAS</h1>
                    <h1 className={`text-black text-[40px] font-semibold leading-10 mt-4 drak:text-black zoomer ${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'}`}>Explore most<br/>popular areas</h1>
                </div>
                <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
                    <div className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} zoomer h-[400px] bg-cover bg-center rounded-xl `}style={{ backgroundImage: 'url("/assets/explore-1.jpg")' }}></div>
                    <div className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} h-[400px] bg-cover bg-center rounded-xl `}style={{ backgroundImage: 'url("/assets/explore-2.jpg")' }}></div>
                    <div className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} h-[400px] bg-cover bg-center rounded-xl `}style={{ backgroundImage: 'url("/assets/explore-3.jpg")' }}></div>
                </div>
            </div>
            <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6 relative">
                <div className={`${visibleElements[3]?'translate-y-0':'translate-y-[100%]  duration-[1s]'} zoomer flex justify-center lg:items-center gap-8 w-full transition-all duration-[1s] ease`}>
                    <h1 className="text-black text-7xl font-semibold drak:text-black">5K</h1>
                    <h1 className="text-lg text-gray-600 drak:text-black">ACTIVE <br/>LISTINGS</h1>
                </div>
                <div className={`${visibleElements[3]?'translate-y-0' :'translate-y-[100%]  duration-[1s]'} zoomer flex justify-center lg:items-center gap-8 w-full transition-all duration-[1.5s] ease`}>
                    <h1 className="text-black text-7xl font-semibold drak:text-black">9K</h1>
                    <h1 className="text-lg text-gray-600 drak:text-black">SOLID <br/>LISTINGS</h1>
                </div>
                <div className={`${visibleElements[3]?'translate-y-0':'translate-y-[100%]  duration-[1s]'} zoomer flex justify-center lg:items-center gap-8 w-full transition-all duration-[2s] ease`}>
                    <h1 className="text-black text-7xl font-semibold drak:text-black">6K</h1>
                    <h1 className="text-lg text-gray-600 drak:text-black">CLIENTS <br/>WE'VE SERVED</h1>
                </div>
        </div>
    </section>
    </div>
  )
}

export default Explore