/* eslint-disable react-hooks/exhaustive-deps */
import useDetectDevTools from '@components/component/devTool/detectDevtool.component';
import '@configs/env/envConfig.config';
import i18n from '@libs/locales/i18n';
import RootRoute from '@routes/route';
import { store } from '@store/store';
import { App as AppAnt, ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import './index.css';

function App() {
  const Theme = ({ children }: { children: React.ReactNode }) => {
    useDetectDevTools();

    // useEffect(() => {
    //   setTimeout(() => {
    //     setShowAppPage(true);
    //   }, 500);
    // }, []);

    // useEffect(() => {
    //   setTimeout(() => {
    //     dispatch(appActions.loadingAppSuccess());
    //   }, 1000);
    // }, []);

    // useEffect(() => {
    //   if (appState.loadingApp) {
    //     setShowAppPage(true);

    //     setTimeout(() => {
    //       setShowLoadingPage(false);
    //     }, 1000);
    //   }
    // }, [appState.loadingApp]);

    return (
      <>
        {/* <SplashScreen isOpen={showLoadingPage} /> */}
        {/* {showAppPage &&  */}
        <ConfigProvider>{children}</ConfigProvider>
      </>
    );
  };

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Theme>
            <AppAnt>
              <RootRoute />
            </AppAnt>
          </Theme>
        </I18nextProvider>
      </Provider>
    </>
  );
}

export default App;
