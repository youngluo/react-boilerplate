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

Mock.mock(`${apiDomain}/getArticles`, {
    'success': true,
    'data|5-10': [
        {
            'id|+1': 0,
            'title': '@cword(8,16)',
            'name': '@cname',
            'create_time': '@now',
            'update_time': '@now'
        }
    ],
    'message': '数据获取成功'
});