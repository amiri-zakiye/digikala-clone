"use client"

import {useEffect, useState} from "react";

const useCountDown =  (initialTimer: number) => {
    const [timer, setTimer] = useState(initialTimer);

    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
            if (timer <= 0) clearInterval(interval);
        }, 1000);


        return () => clearInterval(interval);
    }, []);

    return timer;
}
export default useCountDown;