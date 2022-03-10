import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export function SideBar(props) {
  const { children, className } = props

  return (
    <div className={clsx('hidden lg:flex lg:flex-shrink-0', className)}>
      <div className="flex flex-col w-20">
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-white">
          {/* </div><div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600"> */}
          <div className="flex-1">
            <nav
              aria-label="Sidebar"
              className="py-6 flex flex-col items-center space-y-3"
            >
              {children}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
SideBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
SideBar.defaultProps = {
  className: '',
  children: null,
}

export default SideBar
