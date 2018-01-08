// the config of app router
import Help from './components/help/Help.vue';
import Feedback from './components/feedback/Feedback.vue';
import UserInfo from './components/business/UserInfo.vue';
import DepartmentList from   './components/business/DepartmentList.vue';
import EmployeeList from './components/business/EmployeeList.vue';
import App from './App.vue'
export default [{
        path: '/index',
        component: App,
        children: [{
                name: '业务',
                path: 'axios',
                component: UserInfo
            },
            {
                name: 'departmentList',
                path: 'departmentList',
                component: DepartmentList
            },
            {
                name: 'employeeList',
                path: 'employeeList',
                component: EmployeeList
            },

            {
                name: '帮助中心',
                path: 'help',
                component: Help
            },


            {
                name: '意见反馈',
                path: 'feedback',
                component: Feedback
            },
        ]
    },
    {
        path: '*',
        redirect: '/index/axios'
    }
]