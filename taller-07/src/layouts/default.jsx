import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import CursosJSON from '../data/cursos.json';
import Routes from '../config/routes';
import './default.css';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

class Default extends React.Component {
  handleClickItemMenu = (event) => {
    console.log(event);
  };

  items = CursosJSON.map((curso) => ({
    label: curso.titulo,
    key: curso.slug,
    className: 'text-capitalize'
  }));

  render() {
    return (
      <BrowserRouter>
        <Layout hasSider>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              padding: '60px 0 0 0'
            }}>
            <div className="logo" />
            <Menu
              onClick={this.handleClickItemMenu}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['item-0']}
              items={this.items}
            />
          </Sider>
          <Layout>
            <Header className="site-layout-background" style={{ padding: '0 0 0 200px' }}>
              <Text style={{ color: '#fff' }}>Cursos de Musik</Text>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Default;
