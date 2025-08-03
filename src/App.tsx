import { ConfigProvider } from 'antd';
import { MainLayout } from '@components/templates/MainLayout';
import { Home } from '@components/pages/Home';
import styles from '@styles/app.module.scss';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <div className={styles.app}>
        <MainLayout>
          <Home />
        </MainLayout>
      </div>
    </ConfigProvider>
  );
}

export default App; 