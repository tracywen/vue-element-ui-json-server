import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Dashboard from '@/views/Dashboard'
import SectionList from '@/views/Section/List'
import SectionForm from '@/views/Section/Form'

Vue.use(Router)

const Tmpl = {
	template: '<router-view></router-view>'
}

export default new Router({
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/admin',
			component: Admin,
			children:[
				{
					path: '',
					component: Dashboard
				},
				{
					path: 'section',
					component: Tmpl,
					children: [
						{
							path: '',
							component: SectionList,
						},
						{
							path: 'form',
							component: SectionForm
						}
					]
				}
			]
		}
	]
})
