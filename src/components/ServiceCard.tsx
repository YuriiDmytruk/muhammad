
interface ServiceCardProps {
    text: string;
    title: string;
    bg: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ text, title, bg }) => {
    return (
        <div className='w-full h-full text-black'>
            <div className='w-[90%] h-full bg-gray rounded-lg mx-auto px-3 py-5'>
                <div className={`w-full mt-2 h-16 ${bg} bg-contain bg-left bg-no-repeat`} />
                <div className='text-xl mt-6 font-semibold'>{title}</div>
                <div className='text-md mt-5'>{text}</div>
            </div>
        </div>
    )
}

export default ServiceCard