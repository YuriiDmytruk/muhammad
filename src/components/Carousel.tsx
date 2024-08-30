import { ReactNode } from "react";

interface CarouselProps {
    children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    return (
        <div className='overflow-x-scroll grid grid-flow-col gap-20 px-40'>
            {children}
        </div>
    );
};

export default Carousel;
