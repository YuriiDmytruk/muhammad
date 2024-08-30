
interface CarouselCardProps {
    text: string;
    name: string;
    url: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({ text, name, url }) => {
    return (
        <div className="w-[600px] rounded-lg bg-light-gray text-black grid grid-cols-[auto_1fr] py-6 items-center justify-center gap-10 px-5">
            <div>
                <img src={url} alt='user' className='w-32 h-32' />
            </div>
            <div className='grid gap-3'>
                <div className='text-md'>
                    {text}
                </div>
                <div className='font-semibold'>
                    Name
                </div>
                <div className='text-md'>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default CarouselCard