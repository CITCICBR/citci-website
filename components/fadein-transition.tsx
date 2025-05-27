"use client"
import React, { useEffect, useState } from 'react';

const FadeIn = ({ children }:any) => {
    const [fadeInClass, setFadeInClass] = useState('opacity-0 translate-y-4');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeInClass('opacity-100 translate-y-0 transition-all duration-1000 ease-out');
        }, 100); // Small delay before the transition starts

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return <div className={`transition-all ${fadeInClass}`}>{children}</div>;
};

export default FadeIn;
