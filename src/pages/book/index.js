import React from 'react';
import { connect } from 'react-redux';
import { inputChange, searchBookAction,pageClickAction,getBookListAction} from './store/createAction';
import BookUI from './ui';
import store from '@/store/index';

// let changePage = (page,pageSize) => {

// }

const mapStateToProps = (state) => {
  return {
    inputVal: state.book.inputVal,
    list: state.book.list,
    columns: [{
      title: '图书编号',
      dataIndex: 'bookId',
      key: 'bookId',
    }, {
      title: '书名',
      dataIndex: 'bookName',
      key: 'bookName',
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    }, {
      title: '海报',
      dataIndex: 'coverurl',
      key: 'coverurl',
      //tetx：图片地址
      //record：当前数据
      //index：当前下标
      render: (text, record, index) => {
        return <img src={text} alt="" />
      }
    }],
    pagination:{
      pageSize: state.book.pageSize,
      total: state.book.total,  //总条数
      onChange: (page,pageSize) =>{
        store.dispatch(pageClickAction(page));
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    inputValChange: (e) => {
      let value = e.target.value;
      dispatch(inputChange(value));
    },

    searchBtnClick: () => {
      dispatch(searchBookAction());
    },

    getBookList:() => {
      dispatch(getBookListAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookUI);
