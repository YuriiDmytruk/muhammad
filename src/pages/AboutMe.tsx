
const AboutMe = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-about-image bg-contain bg-left bg-no-repeat' />
            <div className='grid grid-rows-[auto_auto_auto] gap-7'>
                <div className='font-semibold text-6xl'>About Me</div>
                <div className='text-md'>Lorem ipsum dolor sit amet consectetur.
                    Imperdiet convallis blandit felis ligula
                    aliquam venenatis nisi ante. Aliquet ornare
                    tellus consectetur lacus
                </div>
                <div className='text-xl font-semibold grid grid-rows-4 gap-3'>
                    <div>
                        <div className='mb-3'>UX</div>
                        <div className='bg-range-ux h-10 bg-contain bg-center bg-no-repeat'/>
                    </div>
                    <div>
                        <div className='mb-3'>Website Design</div>
                        <div className='bg-range-website h-10 bg-contain bg-center bg-no-repeat'/>
                    </div>
                    <div>
                        <div className='mb-3'>App Design</div>
                        <div className='bg-range-app h-10 bg-contain bg-center bg-no-repeat'/>
                    </div>
                    <div>
                        <div className='mb-3'>Graphic Design</div>
                        <div className='bg-range-graphic h-10 bg-contain bg-center bg-no-repeat'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe