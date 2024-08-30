import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='w-[74%] h-auto mx-auto font-poppins font-normal'>
            {children}
        </div>
    );
};

export default Container;
