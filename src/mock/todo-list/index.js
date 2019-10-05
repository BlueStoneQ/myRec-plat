import Mock from 'mockjs'
import Config from '$config'

// 定义一个mock模版并拦截url中请求
Mock.mock(`${Config.API_BASE_URL}/todoList/getTodoList`, function () {
  const data = Mock.mock({
    'data|4': [{
      'id|+1': 0,
      text: /[a-z]{5}[0-9]{5}/
    }]
  })
  return data['']
})
