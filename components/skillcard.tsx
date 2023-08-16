import Image from 'next/image';

function SkillCard(title: string, image:any){
    return(
        <div className="absolute h-[150px] w-[150px] bg-[#D5F5B4] p-2 m-2 rounded-xl shadow-2xl shadow-black outline-double outline-white outline-[5px] outline-offset-0 hover:scale-105 transition">
            <div className='flex justify-center'>
                <Image src={image} alt={title} className='h-[7rem] w-[7rem]'/>
            </div>
            <p className='text-center font-bold text-slate-950'>{title}</p>
        </div>        
    )
}

export default SkillCard