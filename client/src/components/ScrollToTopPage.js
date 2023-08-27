import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopPage = () => {
    const { pathname } = useLocation();
    // Auto return to page top controller

    useEffect(() => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth',    
        });
    }, [pathname])

  return null;
}

export default ScrollToTopPage