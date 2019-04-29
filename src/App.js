import React from 'react';
import { HashRouter,Route,Redirect,Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Slider from './common/component/Silder';
import Header from './common/component/Header';
import bookpage from './pages/book/index';
import userpage from './pages/user/index';

function App () {
  return (
    <HashRouter>
      <Layout>
        <Slider />
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          <Layout.Content style={{ padding:20 }}>
            <Switch>
              {/* exact代表精准匹配 */}
              <Route path='/' exact component={ bookpage }></Route>
              <Route path='/user' exact component={ userpage }></Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    </HashRouter>
  )
}

export default App;
