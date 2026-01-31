import React, { useState } from 'react';

function ImageWithFallback({ src, alt, className, fallbackSrc, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const defaultFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwSDIyNVYxODBIMTc1VjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE1MCAyMTBIMjUwVjIzMEgxNTBWMjEwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setImgSrc(fallbackSrc || defaultFallback);
  };

  return (
    <div className="position-relative">
      {isLoading && (
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          transition: 'opacity 0.3s ease',
          ...props.style
        }}
        {...props}
      />
      {hasError && !isLoading && (
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <i className="bi bi-image text-muted fs-1"></i>
          <p className="text-muted small mt-2">Image not available</p>
        </div>
      )}
    </div>
  );
}

export default ImageWithFallback;