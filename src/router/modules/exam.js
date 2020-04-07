export default  [{
    path:'/exam/home',
    name:'home',
    component:() => import('@/views/exam/Home'),
    meta:{
        title: '扫码答题',
        requireAuth: true,
    }
}, {
    path: '/exam/home:/paperId:/type',
    name: 'home',
    component: () => import('@/views/exam/Home'),
    meta: {
        title: '扫码答题',
        requireAuth: true,
    }
},{
    path: '/exam/exam',
    name: 'exam',
    component: () => import('@/views/exam/Exam'),
    meta:{
        title:'试题详情',
        requireAuth:true
    }
}, {
    path: '/exam/history',
    name: 'history',
    component: () => import('@/views/exam/History'),
    meta: {
        title: '历史查询',
        requireAuth: true
    }
},{
    path: '/exam/parse',
    name: 'parse',
    component: () => import('@/views/exam/Parse'),
    meta: {
        title: '试题解析',
        requireAuth: true
    }
},{
    path: '/exam/report',
    name: 'report',
    component: () => import('@/views/exam/Report'),
    meta: {
        title: '考试报告',
        requireAuth: true
    }
}]
