import React from "react"

interface Prop {
    src: string;
    alt?: string;
    className?: string;
}

const SVGIcon: React.FC<Prop> = ({src, alt, className}) => {
    return(
        <div>
            <img src={require(`../../assets/images/${src}`)} alt={alt} className={className} />
        </div>
    )
}

export default SVGIcon


