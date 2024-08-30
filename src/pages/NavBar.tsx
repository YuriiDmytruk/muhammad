import Logo from "../components/Logo";
import Menu from '../components/Menu'
import OrangeButton from "../components/OrangeButton";


const NavBar = () => {
    return (
        <div className='grid w-full h-14 mx-auto grid-cols-[auto_auto_1fr_auto] items-center gap-6'>
            <Logo/>
            <div />
            <Menu/>
            <OrangeButton text='Download CV' onClick={() => {}}/>
        </div>
    );
};

export default NavBar;
