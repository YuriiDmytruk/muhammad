interface MenuProps {
    position: string;
}


const Menu: React.FC<MenuProps> = ({ position }) => {
    return (
        <div className={`w-full flex gap-7 font-light justify-${position} text-md`} >
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Projects</div>
            <div>Testimonials</div>
            <div>ContactUs</div>
        </div>
    )
}

export default Menu
