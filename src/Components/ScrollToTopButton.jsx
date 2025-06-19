import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        setVisible(window.scrollY > 500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        visible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                ↑
            </button>
        )
    );
};

export default ScrollToTopButton;
