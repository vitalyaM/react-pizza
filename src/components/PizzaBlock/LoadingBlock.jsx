import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="281" rx="3" ry="3" width="280" height="30" />
      <rect x="0" y="325" rx="3" ry="3" width="280" height="80" />
      <rect x="6" y="425" rx="3" ry="3" width="92" height="20" />
      <rect x="126" y="420" rx="15" ry="15" width="152" height="30" />
    </ContentLoader>
  );
}

export default LoadingBlock;
