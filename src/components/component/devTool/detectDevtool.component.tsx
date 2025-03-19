/* eslint-disable react-hooks/exhaustive-deps */
import envConfig from '@configs/env/envConfig.config';
import { useEffect } from 'react';

const APP_MODE = envConfig.VITE_APP_MODE;

const useDetectDevTools = () => {
  useEffect(() => {
    if (APP_MODE === 'development' || APP_MODE === 'development-test') {
      return;
    }

    let devToolsOpen = false;
    const threshold = 160;

    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold =
        window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          console.log(
            '%cDừng lại!\n\nĐây là một tính năng của trình duyệt dành cho các nhà phát triển. Nếu ai đó bảo bạn sao chép-dán nội dung nào đó vào đây để bật một tính năng hoặc "hack" tài khoản, thì đó là hành vi lừa đảo và sẽ khiến họ có thể truy cập vào tài khoản của bạn.',
            'font-size: 20px; font-weight: bold; color: red;',
          );
        }
      } else {
        devToolsOpen = false;
      }
    };

    window.addEventListener('resize', detectDevTools);
    detectDevTools();

    return () => {
      window.removeEventListener('resize', detectDevTools);
    };
  }, [APP_MODE]);
};

export default useDetectDevTools;
