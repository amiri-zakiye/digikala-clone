"use client"

import {useEffect, useState} from "react";

const useCountDown =  (initialTimer: number) => {
    const [timer, setTimer] = useState(initialTimer);

    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return timer;
}
export default useCountDown;