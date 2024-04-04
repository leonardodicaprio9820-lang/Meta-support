import React from "react"
import SVGIcon from "../../Components/SvgIconProp"

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
    
    return (
        <div  className="grid grid-cols-3 md:grid-cols-8 gap-x-16 md:gap-x-12 gap-y-4 md:gap-y-14 justify-center items-center py-10 pl-8 md:pl-0">
            {SVGfiles.map((fileName, index) => (
                <div key={index} className=" ">
                    <SVGIcon key={index} src={fileName} alt={`SVG ${index + 1}`} className="w-12 md:w-14 h-12 md:h-14"/>
                    <p className="text-xs pt-2 flex items-baseline">{SVGNames[index]}</p>
                </div>
                
            ))}
            
        </div>
    )
}

export default MapSVG