//book的ui组件
import React from 'react';
import { Table, Button, Input } from 'antd';
import { TopWrap, MianWrap } from './style';

class BookUI extends React.Component {
  render () {
    const {
      inputVal,
      list,
      pagination,
      inputValChange,
      searchBtnClick,
      columns } = this.props;
    return (
      <>
        <TopWrap>
          <div className="left">
            {/* Input是一个非受控组件
            <Input placeholder="请输入图书名称" ref={(el) => this.inputEl = el} />*/}
            {/* 变成受控组件 */}
            <Input
              placeholder="请输入图书名称"
              value={inputVal}
              onChange={inputValChange} />
            <Button type="primary" onClick={searchBtnClick}>搜索</Button>
          </div>
        </TopWrap>
        <MianWrap>
          <Table
            dataSource={list}
            columns={columns}
            rowKey="bookId"
            pagination={pagination} />
        </MianWrap>
      </>
    )
  }

  componentDidMount(){
    this.props.getBookList();
  }

}

export default BookUI;
