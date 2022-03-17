import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const styles =
  'flex items-center p-4 rounded-lg hover:text-indigo-200 hover:bg-indigo-700'

export function SideBarItem(props) {
  const { name, icon: IconElement, selected, onClick } = props

  return (
    <button
      key={name}
      type="button"
      onClick={onClick}
      onKeyDown={onClick}
      className={clsx(styles, {
        'text-indigo-500': !selected,
        'bg-indigo-700': selected,
        'text-indigo-100': selected,
      })}
    >
      <IconElement className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </button>
  )
}

SideBarItem.propTypes = {
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
SideBarItem.defaultProps = {
  selected: false,
}

export default SideBarItem
