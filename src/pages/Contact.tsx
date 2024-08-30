
const Contact = () => {
    const handleClick = () => {
    }

    return (
        <div className='grid gap-10'>
            <div className='font-semibold text-6xl text-center'>
                Lets Design Together
            </div>
            <div className='text-md text-center w-[70%] mx-auto'>Lorem ipsum dolor sit amet consectetur.
                Imperdiet convallis blandit felis ligula
                aliquam venenatis fghh hgjj nisi ante.
            </div>
            <div className='grid grid-cols-[1fr_20%] w-[60%] mx-auto gap-10'>
                <input
                    placeholder="Enter You Email"
                    type='text'
                    className='bg-light-gray w-full h-full rounded-lg py-2 pl-5
                    border-1 border-gray' />
                <button
                    onClick={handleClick}
                    className='bg-orange text-white rounded-md px-2 py-1 text-md font-light'
                >
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default Contact