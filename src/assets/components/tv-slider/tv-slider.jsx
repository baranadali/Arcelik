import {Tvslider} from '../../data/tv-slider'




export default function TvSlider(){
    return (
        <div>
            <div className="w-[70%] mx-auto mt-12">
                <ul className='flex items-center overflow-x-auto'>
                    {Tvslider.map((data,index) => (
                        <a href={data.href} className='flex flex-col items-center ' key={index}>
                            <img src={data.image} className='' alt={data.name} />
                            <p>{data.name}</p>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    )
}