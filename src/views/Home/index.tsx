import React from 'react'
import Card from '../../Components/DansCard'
import Footer from '../../Components/footer'

const BlockChain = () => {
    const firstStyle: React.CSSProperties = {
        height: '30px',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        boxSizing: 'border-box',
        // border: '1px solid #56667F',
        // borderRadius: '4px',
        textAlign: 'right',
        lineHeight: '14px',
        blockSize: '28px',
        fontSize: '12px',
        fontFeatureSettings: 'normal',
        textSizeAdjust: '100%',
        // boxShadow: 'inset 0 -20px 0 0 #56667F',
        padding: '1px 0px',
        margin: '0px',
        width: '100%'
      }

      const SecondStyle: React.CSSProperties = {
        height: '0px',
        padding: '0px',
        margin: '0px',
        width: '100%'
      }

      const iframeStyle: React.CSSProperties = {
        border: '0',
        margin: '0',
        padding: '0',

        
      }

      const submit = () => {}

  return (
    <div className='bg-primary-Default text-white'>
        <div style={firstStyle}>
            <div style={SecondStyle}>
                <iframe title="CoinLib Widget 2" src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no" width="100%" height="26px"  style={iframeStyle}></iframe>
            </div>
        </div>


        <div className='grid justify-center gap-4 pt-4 md:pt-8 pb-9 md:pb-16 pl-2 md:pl-10 pr-2 md:pr-10 '>
            <p className='font-bold text-2xl whitespace-nowrap md:text-3xl flex md:justify-center md:items-center' >Blockchain Rectification</p>
            <p className='text-[0.5rem] md:text-[1rem]'>Every digital artwork on Upside is authentic and truly unique. Blockchain technology 
            makes this new approach to digital ownership possible.</p>
            <p className='text-[0.5rem] md:text-[1rem]'>Open and decentralized protocol for syncing various wallet issues on secure server. This is not an app but a 
            protocol that establishes a remote resolution between all noncustodial wallet.  </p>
            <p className='text-[0.5rem] md:text-[1rem]'>It is an online server which gets you across to every wallet representative to enable effective 
            complain and rectification of issues.</p>
            <p className='text-[0.5rem] md:text-[1rem] '>You will be on a chat with an artificial intelligence Robot with zero human interference.</p>
        </div>

        <div className='bg-primary-sky bg-cover pl-2 pr-2 pt-4 md:pt-6 md:pl-10 md:pr-10'>
            <p className='font-bold text-lg whitespace-nowrap md:text-2xl'>Make Your selection Below</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 pt-3 md:pt-5 '>
                    <Card text='Migrate' subtext='to' onClick={submit}/>
                    <Card text='Rectification' subtext='for' onClick={submit}/>
                    <Card text='Claim Reflection' subtext='to' onClick={submit}/>
                    <Card text='Slippage Error' subtext='for' onClick={submit}/>
                    <Card text='Staking' subtext='for' onClick={submit}/>
                    <Card text='Recovery' subtext='for' onClick={submit}/>
                    <Card text='Validation' subtext='for' onClick={submit}/>
                    <Card text='Swap/Exchange' subtext='for' onClick={submit}/>
                    <Card text='Buy/Sell error' subtext='to' onClick={submit}/>
                    <Card text='Fix Gas' subtext='to' onClick={submit}/>
                    <Card text='Support' subtext='for' onClick={submit}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default BlockChain