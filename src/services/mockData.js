import Mock from 'mockjs';

const apiDomain = 'http://api.test.com';

Mock.mock(`${apiDomain}/getUsers`, {
    'success': true,
    'data|5-10': [
        {
            'id|+1': 0,
            'name': '@cname',
            'age': '@integer(16, 60)',
            'create_time': '@now'
        }
    ],
    'message': '数据获取成功'
});