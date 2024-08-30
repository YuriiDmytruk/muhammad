
import logoImage from '../assets/Logo.png'

const Logo = () => {
    return (
        <div className='w-full h-full'>
            <img src={logoImage} alt='logo' className='object-cover'/>
        </div>
    )
}

export default Logo