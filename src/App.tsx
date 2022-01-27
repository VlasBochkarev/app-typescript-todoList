import React from 'react';
import "antd/dist/antd.css";
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import {Layout, Menu} from "antd";
import Todo from "./components/Todo/Todo";
import Users from "./components/Users/Users";

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Router>
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        <Menu.Item key="1"><NavLink to={'/'}>Users</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to={'/todo'}>Todo</NavLink></Menu.Item>

                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 650}}>
                        <div className={'container pt-4'}>
                            <Routes>
                                <Route path={'/'} element={<Users/>}/>
                                <Route path={'/todo'} element={<Todo/>}/>

                            </Routes>
                        </div>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>This is my Application for studying React/JS. by Vlas Bochkarev</Footer>
            </Layout>
        </Router>

    );
};

export default App;