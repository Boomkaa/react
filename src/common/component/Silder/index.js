import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import store from '@/store/index';
import {Logo} from './style';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: store.getState().common.menus,
      defaultMenu: store.getState().common.defaultMenu
    }

    //监听仓库
    store.subscribe(() => {
      this.setState(() => ({
        menus: store.getState().common.menus,
        defaultMenu: store.getState().common.defaultMenu
      }))
    })

  }

  render () {
    return (
      <Layout.Sider style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
      >
        <div className="logo" />
        <Logo />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultMenu}>
          {
            this.state.menus.map((item, index) => {
              return (
                <Menu.Item key={index + 1}>
                  <NavLink exact to={ item.href }>
                    <Icon type={item.icon} />
                    <span className="nav-text">{item.name}</span>
                  </NavLink>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Layout.Sider>
    )
  }
}

export default Slider;
