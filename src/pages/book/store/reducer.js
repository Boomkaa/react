import { INPUTCHANGE,SETBOOKDATA,SETPAGENUM } from './actionTypes';
const defaultState = {
  //图书集合
  list: [],
  //搜索框的值
  inputVal: '',
  //页码数
  pageNum: 1,
  //一个页面有多少条数据
  pageSize: 1,
  //总条数
  total:1
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    case INPUTCHANGE:
      newState.inputVal = action.value;
      break;

    case SETBOOKDATA:
      newState.list = action.data.list;
      newState.total = action.data.total;
      break;

    case SETPAGENUM:
      newState.pageNum = action.value;
      break;

    default:
      break;
  }
  return newState;
}
