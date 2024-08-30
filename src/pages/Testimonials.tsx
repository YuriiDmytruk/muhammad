import Carousel from "../components/Carousel"
import CarouselCard from "../components/CarouselCard"

import userImage from '../assets/user.png'

const Testimonials = () => {
    return (
        <div className='grid gap-10'>
            <div className='font-semibold text-6xl text-center'>
                Testimonials
            </div>
            <div className='text-md text-center w-[70%] mx-auto'>
                Lorem ipsum dolor sit amet consectetur. Imperdiet
                convallis blandit felis ligula aliquam venenatis
                fghh hgjj nisi ante.
            </div>
            <Carousel>
                <CarouselCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Id purus placerat scelerisque ullamcorper 
                 habitasse egestas.Nunc gravida egestas 
                 suspendisse volutpat suscipit suspendisse 
                 faucibus amet convallis.'
                    name='CEO'
                    url={userImage} />
                <CarouselCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Id purus placerat scelerisque ullamcorper 
                 habitasse egestas.Nunc gravida egestas 
                 suspendisse volutpat suscipit suspendisse 
                 faucibus amet convallis.'
                    name='CEO'
                    url={userImage} />
                <CarouselCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Id purus placerat scelerisque ullamcorper 
                 habitasse egestas.Nunc gravida egestas 
                 suspendisse volutpat suscipit suspendisse 
                 faucibus amet convallis.'
                    name='CEO'
                    url={userImage} />
                <CarouselCard
                    text='Lorem ipsum dolor sit amet consectetur.
                 Id purus placerat scelerisque ullamcorper 
                 habitasse egestas.Nunc gravida egestas 
                 suspendisse volutpat suscipit suspendisse 
                 faucibus amet convallis.'
                    name='CEO'
                    url={userImage} />

            </Carousel>
        </div>
    )
}

export default Testimonials