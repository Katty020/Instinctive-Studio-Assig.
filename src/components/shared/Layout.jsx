import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-col md:flex-row">
			<Sidebar className="w-full md:w-64 lg:w-80" />
			<div className="flex flex-col flex-1">
				<Header className="w-full" />
				<div className="flex-1 p-2 sm:p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
