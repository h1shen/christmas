import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-21T14:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-2xl md:text-4xl font-display font-bold text-christmas-gold drop-shadow-md">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-widest text-white/80 mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center items-center bg-black/30 backdrop-blur-sm py-4 px-6 rounded-xl border border-christmas-gold/30 mt-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-2xl md:text-4xl font-display text-christmas-gold pb-6">:</div>
      <TimeUnit value={timeLeft.hours} label="Hrs" />
      <div className="text-2xl md:text-4xl font-display text-christmas-gold pb-6">:</div>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="text-2xl md:text-4xl font-display text-christmas-gold pb-6">:</div>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;