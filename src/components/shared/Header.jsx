import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

export default function Header() {
	const navigate = useNavigate()

	return (
		<div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
			<div className="relative">
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search your Course"
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
				/>
			</div>
			<div className="flex items-center gap-2 mr-2">
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineQuestionMarkCircle fontSize={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">

									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
									<div
										className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 cursor-pointer"
										onClick={() => navigate('/Help')}
									>
										<strong className="text-gray-700 font-medium">Help</strong>
										<div className="mt-2 py-1 text-sm">This is help panel.</div>
									</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineChatAlt fontSize={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Messages</strong>
										<div className="mt-2 py-1 text-sm">This is messages panel.</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineBell fontSize={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Notifications</strong>
										<div className="mt-2 py-1 text-sm">This is notification panel.</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Menu as="div" className="relative">
					<div>
						<Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<span className="sr-only">Open user menu</span>
							<div
								className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}
							>
							</div>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/profile')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Your Profile
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/settings')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Settings
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Sign out
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	)
}
