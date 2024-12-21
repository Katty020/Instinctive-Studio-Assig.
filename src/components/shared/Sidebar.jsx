import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { FiMenu, FiX } from 'react-icons/fi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      
      <div className="md:hidden flex items-center justify-between bg-neutral-800 p-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Link_logo_%282019%29.svg"
          alt="Logo"
          className="h-8"
        />
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      <div
        className={classNames(
          'fixed top-0 left-0 h-full bg-neutral-550 w-60 p-3 flex flex-col transform transition-transform duration-300 z-50',
          {
            '-translate-x-full': !isOpen,
            'translate-x-0': isOpen,
          },
          'md:translate-x-0 md:static md:flex'
        )}
      >
        <div className="flex items-center gap-2 px-1 py-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Link_logo_%282019%29.svg"
            alt="Logo"
            className="h-10 w-60"
          />
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
