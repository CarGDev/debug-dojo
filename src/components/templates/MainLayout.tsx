import React from 'react';
import { Layout, Typography } from 'antd';
import styles from '@styles/app.module.scss';

const { Header, Content } = Layout;
const { Title } = Typography;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.header}>
        <Title level={3} className={styles.title}>
          🎮 Pokémon Explorer
        </Title>
      </Header>
      <Content className={styles.content}>
        <div className={styles.container}>
          {children}
        </div>
      </Content>
    </Layout>
  );
}; 