import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useNavigationLoading = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    // Only trigger loading if pathname actually changed
    if (previousPath !== pathname) {
      setIsLoading(true);
      setProgress(0);

      // Start progress animation
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 15 + 5; // Random increment between 5-20
        });
      }, 100);

      // Complete the progress after a short delay
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 200);
      }, 300);

      setPreviousPath(pathname);
    }
  }, [pathname, previousPath]);

  const startLoading = () => {
    if (!isLoading) {
      setIsLoading(true);
      setProgress(0);

      // Start progress animation immediately
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 100);
    }
  };

  return {
    isLoading,
    progress,
    startLoading,
  };
};
