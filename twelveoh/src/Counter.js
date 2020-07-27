import React, { useState, useEffect } from 'react';

const Mcounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <p>{seconds} seconds have elapsed since mounting.</p>
    </div>
  );
};

export default Mcounter;