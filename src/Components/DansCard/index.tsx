import React from "react";
import {ReactComponent as Checkmark} from "../../assets/images/checkmark.svg"

interface Prop {
    text: string;
    subtext: string;
    onClick: () => void;
}

const Card: React.FC<Prop> = ({text, subtext, onClick}) => {

    return (
        <div className=" ">
            <div className="bg-primary-skylight rounded p-2 md:p-5 transition duration-500 shadow-sm hover:shadow-2xl " onClick={onClick}>
                <Checkmark/>
                <p className="text-sm md:text-xl font-semibold pt-1.5 md:pt-3 ">{text}</p>
                <p className="text-[0.5rem] md:text-base pt-1 md:pt-2.5 text-gray-300"> Click here {subtext} {text}</p>
            </div>
        </div>
    )
}

export default Card