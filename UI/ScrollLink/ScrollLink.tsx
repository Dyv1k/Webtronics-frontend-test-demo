import { FC, ReactNode } from "react";
import { Link } from "react-scroll";


const ScrollLink: FC<{href:string, children:ReactNode}> = ({href, children}): JSX.Element =>{

    return(
        <Link to={href} spy={true} smooth={true} offset={-50} duration={1000}>{children}</Link>
    )
}

export default ScrollLink