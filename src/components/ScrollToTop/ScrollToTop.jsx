import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Don't scroll to top for menu category routes
    if (location.pathname.startsWith('/menu/') && location.pathname !== '/menu') {
      return;
    }
    
    // Use instant behavior for better performance
    window.scrollTo(0, 0, { behavior: 'instant' });
  }, [location]);

  return null;
};

export default ScrollToTop;
