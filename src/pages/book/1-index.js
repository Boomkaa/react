//book组件的容器组件
import React from 'react';
import BookUI from './ui';

import store from '@/store/index';
import { getBookListAction, pageClickAction, inputChange, searchBookAction } from './store/createAction';


const columns = [{
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
}];

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().book.list,
      inputVal: store.getState().book.inputVal,
      pageNum: store.getState().book.pageNum,
      pageSize: store.getState().book.pageSize,
      pagination: {
        pageSize: store.getState().book.pageSize,
        total: store.getState().book.total,  //总条数
        onChange: this.changePage.bind(this)
      }
    }

    //监听仓库
    store.subscribe(() => {
      this.setState(() => ({
        list: store.getState().book.list,
        inputVal: store.getState().book.inputVal,
        pageNum: store.getState().book.pageNum,
        pageSize: store.getState().book.pageSize,
        pagination: {
          pageSize: store.getState().book.pageSize,
          total: store.getState().book.total,  //总条数
          onChange: this.changePage.bind(this)
        }
      }))
    })
  }

  render () {
    return (
      <BookUI
        inputVal={this.state.inputVal}
        inputValChange={(e) => {
          let value = e.target.value;
          store.dispatch(inputChange(value))
        }}
        searchBtnClick={() => {
          store.dispatch(searchBookAction())
        }}
        list={this.state.list}
        columns={columns}
        pagination={this.state.pagination}
      />
    )
  }

  //页面一刷新就要获取图书列表
  componentDidMount () {
    // this.getBookList();
    store.dispatch(getBookListAction());
  }

  // //点击后获取图书列表
  // async getBookList (isSearch) {
  //   // if (isSearch) {
  //   //   //如果是搜索操作，把pageNum变为默认值1
  //   //   await this.setState(() => ({
  //   //     pageNum: 1
  //   //   }))
  //   // }

  //   store.dispatch(getBookListAction());
  //   //非受控组件获取值
  //   //let bookName = this.inputEl.state.value;
  //   //console.log( this.inputEl);

  // }

  // changeInput (e) {
  //   let value = e.target.value;
  //   //由于数据放在仓库里面，所以对仓库的数据进行修改需要派发动作
  //   store.dispatch(inputChange(value));
  //   // this.setState(() => ({
  //   //   inputVal: value
  //   // }))
  // }

  /*
   这个方法是antd中分页里自带的一个方法（操作分页的时候就能触发该事件）
    page:当前的页码
    pageSize：当前页面的数据
  */
  changePage (page, pageSize) {
    store.dispatch(pageClickAction(page));
    //console.log(page,pageSize);
    //setState是一个异步函数
    // this.setState(() => ({
    //   pageNum:page,
    //   pageSize:pageSize
    // }),() => {
    //   this.getBookList();
    // })

    //async、await解决异步问题
    // await this.setState(() => ({
    //   pageNum: page,
    //   pageSize: pageSize
    // }))
    // this.getBookList();
  }
}

export default Book;
