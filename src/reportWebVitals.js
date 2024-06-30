const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Mide y reporta Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // Mide y reporta First Input Delay (FID)
      getFCP(onPerfEntry); // Mide y reporta First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Mide y reporta Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Mide y reporta Time to First Byte (TTFB)
    });
  }
};

export default reportWebVitals;
