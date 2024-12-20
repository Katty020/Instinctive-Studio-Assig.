import {
	HiOutlineViewGrid,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineUser
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'student',
		label: 'Student',
		path: '/student',
		icon: <HiOutlineUser />
	},
	{
		key: 'chapters',
		label: 'Chapters',
		path: '/chapters',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'support',
		label: 'Help',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'Reports',
		label: 'Reports',
		path: '/Reports',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
	
]
