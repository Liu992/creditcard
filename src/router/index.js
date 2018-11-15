import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/view/Signup'
import TaskList from '@/view/TaskList'
import Introduce from '@/view/Introduce'
import CreditCard from '@/view/CreditCard'
import Account from '@/view/Account'
import Invitation from '@/view/Invitation'
import Progress from '@/view/Progress'
import Withdraw from '@/view/Withdraw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: "Signup",
      component: Signup,
      meta: {
        title:"注册",
        content: 'disable'
      }
    },
    {
      path: '/tasklist',
      name: "TaskList",
      component: TaskList,
      meta: {
        title:"任务列表",
        content: 'disable'
      }
    },
    {
      path: '/introduce/:id',
      name: "Introduce",
      component: Introduce,
      meta: {
        title:"介绍",
        content: 'disable'
      }
    },
    {
      path: '/creditcard',
      name: "CreditCard",
      component: CreditCard,
      meta: {
        title:"办信用卡",
        content: 'disable'
      }
    },
    {
      path: '/account',
      name: "Account",
      component: Account,
      meta: {
        title:"账户",
        content: 'disable'
      }
    },
    {
      path: '/invitation',
      name: "Invitation",
      component: Invitation,
      meta: {
        title:"我的邀请好友",
        content: 'disable'
      }
    },
    {
      path: '/progress',
      name: "Progress",
      component: Progress,
      meta: {
        title:"进度查询",
        content: 'disable'
      }
    },
    {
      path: '/withdraw',
      name: "Withdraw",
      component: Withdraw,
      meta: {
        title:"提现",
        content: 'disable'
      }
    }
  ]
})
