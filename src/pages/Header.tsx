
import OrangeButton from '../components/OrangeButton'
import Socials from '../components/Socials'

const Header = () => {
    return (
        <div className='grid grid-rows-[1fr_auto] grid-cols-2'>
            <div className='font-semibold my-20 w-[80%] mx-auto'>
                <div className='text-lg'>Hi I am</div>
                <div className='text-orange text-3xl mt-2'>Mahammad Bin Jameel</div>
                <div className='text-6xl mt-2'>UI & UX</div>
                <div className='text-6xl text-end'>Designer</div>
                <div className='font-normal text-md mt-10'>
                    Lorem ipsum dolor sit amet consectetur. Imperdiet
                    convallis blandit felis ligula aliquam venenatis
                    nisi ante. Aliquet ornare tellus consectetur lacus
                </div>
                <div className='w-[30%] mt-6'>
                    <OrangeButton text='Hire me' onClick={() => { }} />
                </div>
            </div>
            <div className='w-full h-full bg-home-image bg-contain bg-right bg-no-repeat' />
            <div />
            <div className='w-full grid justify-center mt-6'>
                <div className='w-52'>
                    <Socials />
                </div>
            </div>


        </div>
    )
}

export default Header