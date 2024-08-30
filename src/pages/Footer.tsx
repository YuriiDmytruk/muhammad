import Logo from "../components/Logo"
import Menu from "../components/Menu"
import Socials from "../components/Socials"

const Footer = () => {
    return (
        <div className='grid gap-14 py-12'>
            <div className='w-[15%] mx-auto'>
                <Logo />
            </div>
            <div className=' mx-auto'>
                <Menu position='center'/>
            </div>
            <div className='w-[20%] mx-auto'>
                <Socials />
            </div>
        </div>
    )
}

export default Footer