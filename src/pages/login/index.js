import React from 'react';
import { connect } from 'react-redux';
import {LoginWrap} from './style';

class Login extends React.Component{
  render(){
    return (
      <LoginWrap>
        <h1>登录界面</h1>
        <button onClick={ this.props.handleLogin }>登录</button>
      </LoginWrap>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin:() => {
      dispatch({
        type:'LOGIN'
      })
    }
  }
}

export default connect(null,mapDispatchToProps)(Login);
