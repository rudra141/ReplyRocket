'use client';

import React, { useEffect, useState } from 'react';

const Starfield = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const stars = (count: number, className: string) => {
        let result = [];
        for (let i = 0; i < count; i++) {
        const style = {
            top: `${random(0, 100)}%`,
            left: `${random(0, 100)}%`,
            animationDelay: `${random(0, 3)}s`,
            animationDuration: `${random(2, 5)}s`,
        };
        result.push(<div key={i} className={className} style={style}></div>);
        }
        return result;
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="starfield-container">
        {stars(50, 'star-sm')}
        {stars(30, 'star-md')}
        {stars(20, 'star-lg')}
        </div>
    );
};

export default Starfield;
