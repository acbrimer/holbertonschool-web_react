import React, { useEffect } from 'react';

export const WithLogging = (WC) => {
  const Component = (props) => {
    useEffect(() => {
      console.log(
        `Component ${WC.name || 'Component'} is mounted on componentDidMount()`
      );
      return () => {
        console.log(
          `Component ${
            WC.name || 'Component'
          } is going to unmount on componentWillUnmount()`
        );
      };
    }, []);
    return <WC {...props} />;
  };
  Component.displayName = `WithLogging(${WC.name || 'Component'})`;
  return Component;
};
