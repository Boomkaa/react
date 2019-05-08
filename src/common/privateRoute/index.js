import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render () {
   const { component:Component,isLogin,path }
    return (
      <Route
        {...this.props}
        render= {() => {
          if (isLogin) {
            return <Component></Component>
          } else {
            return <Redirect from={path} to="/login" />
          }
        }}>
      </Route>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.common.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
