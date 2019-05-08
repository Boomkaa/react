import React from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Slider from './common/component/Silder';
import Header from './common/component/Header';
import bookpage from './pages/book/index';
import userpage from './pages/user/index';
import PrvateRoute from '@/common/privateRoute'

function App () {
  return (
      <Layout>
        <Slider />
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          <Layout.Content style={{ padding:20 }}>
            <Switch>
              {/* exact代表精准匹配 */}
              <PrvateRoute path='/' exact component={ bookpage }></PrvateRoute>
              <PrvateRoute path='/user' exact component={ userpage }></PrvateRoute>
              <Redirect to="/"></Redirect>
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
  )
}

export default App;
