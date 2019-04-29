const defaultState = {
  menus: [
    { id: 1, name: '图书管理', icon: 'book', href: '/' },
    { id: 2, name: '用户管理', icon: 'user', href: '/user' }
  ],
  defaultMenu: ['1']
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    default:
      break;
  }
  return newState;
}
