import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import {
  ArchiveIcon,
  BanIcon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from '@heroicons/react/outline';

import SideBar from '../components/SideBarLegacy';
import SideBarItem from '../components/SideBarItem';

const user = {
  name: 'Whitney Francis',
  email: 'whitneyfrancis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  {
    name: 'Inboxes',
    href: '#',
    children: [
      { name: 'Technical Support', href: '#' },
      { name: 'Sales', href: '#' },
      { name: 'General', href: '#' },
    ],
  },
  { name: 'Reporting', href: '#', children: [] },
  { name: 'Settings', href: '#', children: [] },
];
const sidebarNavigation = [
  { name: 'Open', href: '#', icon: InboxIcon, current: true },
  { name: 'Archive', href: '#', icon: ArchiveIcon, current: false },
  { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
  { name: 'Spam', href: '#', icon: BanIcon, current: false },
  { name: 'Drafts', href: '#', icon: PencilAltIcon, current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-full flex flex-col">
      {/* Top nav */}
      <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
        {/* Logo area */}
        <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
          <a
            href="#"
            className="flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
          >
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </a>
        </div>

        {/* Picker area */}
        <div className="mx-auto md:hidden">
          <div className="relative">
            <label htmlFor="inbox-select" className="sr-only">
              Choose inbox
            </label>
            <select
              id="inbox-select"
              className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"
              defaultValue={sidebarNavigation.find((item) => item.current).name}
            >
              {sidebarNavigation.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Menu button area */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav area */}
        <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
              <label htmlFor="desktop-search" className="sr-only">
                Search
              </label>
              <input
                id="desktop-search"
                type="search"
                placeholder="Search"
                className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
            <nav aria-label="Global" className="flex space-x-10">
              <a href="#" className="text-sm font-medium text-gray-900">
                Inboxes
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                Reporting
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                Settings
              </a>
            </nav>
            <div className="flex items-center space-x-8">
              <span className="inline-flex">
                <a
                  href="#"
                  className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </span>

              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom section */}
      <div className="min-h-0 flex-1 flex overflow-hidden">
        {/* Narrow sidebar */}

        <SideBar>
          <SideBarItem
            name="Home"
            icon={BanIcon}
            onClick={() => console.log('Clicked')}
          />
          <SideBarItem
            selected={true}
            name="Home"
            icon={BellIcon}
            onClick={() => console.log('Clicked')}
          />
          <SideBarItem
            name="Home"
            icon={InboxIcon}
            onClick={() => console.log('Clicked')}
          />
          <SideBarItem
            name="Home"
            icon={ArchiveIcon}
            onClick={() => console.log('Clicked')}
          />
          <SideBarItem
            name="Home"
            icon={UserCircleIcon}
            onClick={() => console.log('Clicked')}
          />
          <SideBarItem
            name="Home"
            icon={FlagIcon}
            onClick={() => console.log('Clicked')}
          />
          <SideBarItem
            name="Home"
            icon={PencilAltIcon}
            onClick={() => console.log('Clicked')}
          />
        </SideBar>

        {/* Main area */}
        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
          >
            <h1 id="primary-heading" className="sr-only">
              Home
            </h1>
            {/* Your content */}
            Primary
          </section>

          {/* Secondary column (hidden on smaller screens) */}
          <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
            <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto">
              {/* Your content */}
              Secondary
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
