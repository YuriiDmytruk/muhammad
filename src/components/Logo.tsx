import logo from '../assets/logo.png';

const Logo = () => {

    return (
        <div className='w-full h-full flex items-center font-semibold text-4xl'>
            <img src={logo} alt='logo' className='object-cover cursor-pointer' />
            uhammed
        </div>
    );
};

export default Logo;
