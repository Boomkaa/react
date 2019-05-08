//book创建动作的文件
import { INPUTCHANGE, SETBOOKDATA, SETPAGENUM } from './actionTypes';
import http from '@/utils/http';

/*
*创建inputVal修改的动作
* @param {String} value 输入的内容
*/
export const inputChange = (value) => {
  return {
    type: INPUTCHANGE,
    value
  }
}

/*
  创建获取图书信息的动作
 */
export const getBookListAction = () => {
  /*
  dispath:它本身就会传入一个动作
  getState:这里获取的是整个仓库的数据
   */
  return (dispatch, getState) => {
    const { inputVal, pageNum, pageSize } = getState().book;
    //let bookName = this.state.inputVal;
    http.get('/api/book', {
      params: {
        bookName: inputVal,
        pageNum,
        pageSize
      }
    }).then(res => {
      //console.log(res);
      if (res.code === 0) {
        dispatch({
          type: SETBOOKDATA,
          data: res.data
        })
        // this.setState((prevState) => ({
        //   list: res.data.list,
        //   pagination: {
        //     ...prevState.pagination,
        //     total: res.data.total
        //   }
        // }))
      }
    })
  }
}

/*
  创建搜索的动作
 */
export const searchBookAction = () => {
  return (dispatch) => {
    //1、先将pageNum设置为1
    dispatch({
      type: SETPAGENUM,
      value: 1
    })
    //2、发送ajax请求
    dispatch(getBookListAction());
  }
}

/*
  创建分页点击的动作
 */
export const pageClickAction = (page) => {
  return (dispatch) => {
    //1、先将pageSize设置为page
    dispatch({
      type: SETPAGENUM,
      value: page
    })
    //2、发送ajax请求
    dispatch(getBookListAction());
  }
}
