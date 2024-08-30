import ServiceCard from "../components/ServiceCard"

const Services = () => {
    return (
        <div className='grid gap-8'>
            <div className='text-6xl font-semibold text-center'>Services</div>
            <div className='text-md text-center w-[70%] mx-auto'>Lorem ipsum dolor sit amet consectetur.
                Imperdiet convallis blandit felis ligula
                aliquam venenatis fghh hgjj nisi ante.
            </div>
            <div className='grid grid-cols-4 items-center justify-center gap-4'>
                <ServiceCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Tristique amet sed massa nibh'
                    title='UI/UX'
                    bg='bg-service-ux' />
                <ServiceCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Tristique amet sed massa nibh'
                    title='Web Design'
                    bg='bg-service-web' />
                <ServiceCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Tristique amet sed massa nibh'
                    title='App design'
                    bg='bg-service-app' />
                <ServiceCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Tristique amet sed massa nibh'
                    title='Graphic Design'
                    bg='bg-service-graphic' />
            </div>


        </div>
    )
}

export default Services