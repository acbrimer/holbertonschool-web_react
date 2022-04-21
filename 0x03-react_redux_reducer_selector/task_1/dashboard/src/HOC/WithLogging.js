import React, { useEffect } from 'react';

const WithLogging = (WC) => {
  const Component = (props) => {
    useEffect(() => {
      console.log(`Component ${WC.name || 'Component'} is mounted`);
      return () => {
        console.log(`Component ${WC.name || 'Component'} is going to unmount`);
      };
    }, []);
    return <WC {...props} />;
  };
  Component.displayName = `WithLogging(${WC.name || 'Component'})`;
  return Component;
};

export default WithLogging;
