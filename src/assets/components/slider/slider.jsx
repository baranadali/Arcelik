import Slider1 from '../../images/Slider-1.png'

import Video from '../../images/slider-video.mp4'

export default function Slider() {
    return (
        <div className='h-[100vh] w-full '>
            <div className='absolute w-full h-full justify-center mt-[7%] z-20 mobile:mt-[24%]'>
               <div className='flex flex-col items-center gap-5 mobile:gap-4'>
                    <h1 className='mobile:text-base text-white font-HeronsansSemibold text-[32px] text-center'>Teknolojisiyle Farklı Lezzetler Sunan <br/> Arçelik Tadı Var Probiyotik Yoğurt ve Kefir Makinesi.</h1>
                    <a className='h-[35px] px-[30px] bg-white flex items-center text-sm rounded-2xl cursor-pointer mobile:text-xs' href="#">Keşfet</a>
               </div>
            </div>
            <div className='h-full '>
                <video className='bg-red-300 object-cover !h-full' width='100%' height='100%' loop autoPlay muted playsInline>
                    <source src={Video} />
                </video>
            </div>
            
        </div>
    )
}

// git commit -m 'Responsive alanında iyileştirmeler yapıldı.'