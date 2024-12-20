import React from 'react'
import RecentOrders from '../components/stuRecord'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			
			<div className="flex flex-row gap-4 w-full">
				
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				
			</div>
		</div>
	)
}
