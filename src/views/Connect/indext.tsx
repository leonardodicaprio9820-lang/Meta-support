import React from "react"
import { ReactComponent as WalletConnect} from '../../assets/globalImages/wallectConnect.svg'
import MapSVG from "./SVG"

const Connect = () => {
    return (
        <div className="bg-primary-sky text-white flex justify-center items-center">
            <div className="pt-5">
                <div className="flex justify-center items-center pb-5">
                    <WalletConnect className=" w-10 md:w-14 h-10 md:h-14  " />
                </div>
                <div className="grid justify-center items-center">
                    <p className="text-[3rem] font-bold">Connect Wallet</p>
                    <div className="flex justify-center items-center">
                        <p className="text-[1.1rem]">Please connect your wallet to continue</p>
                    </div>
                </div>

                <MapSVG/>
                
            </div>
            
        </div>
    )
}

export default Connect