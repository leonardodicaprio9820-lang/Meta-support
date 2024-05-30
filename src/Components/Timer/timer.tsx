import React, {useState, useEffect} from 'react'

interface CountdownTimerProps {
    onComplete: () => void; 
}

const CountDownTimer:React.FC<CountdownTimerProps> = ({ onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        if(timeLeft === 0) {
            onComplete();
            return;
        }
        
        const interval = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, onComplete]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

  return (
    <div>
        <h1 className='font-bold'>
            {minutes}: {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
        <p className='font-semibold'>Wallet has been connected.</p>
    </div>
  )
}

export default CountDownTimer

