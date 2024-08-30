import Logo from "../components/Logo";
import Menu from '../components/Menu'
import OrangeButton from "../components/OrangeButton";


const NavBar = () => {
    return (
        <div className='mt-6 grid w-full h-14 mx-auto grid-cols-[auto_auto_1fr_auto] items-center gap-6'>
            <div className='w-[70%]'>
                <Logo />
            </div>
            <div />
            <Menu position='end'/>
            <OrangeButton text='Download CV' onClick={() => { }} />
        </div>
    );
};

export default NavBar;
