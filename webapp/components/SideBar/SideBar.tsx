import PropTypes from 'prop-types';

export const SideBar = (props) => {
const { onClick, children } = props;

return (
<div onClick={onClick} onKeyDown={onClick}>
  {children}
</div>
);
}
SideBar.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onClick: PropTypes.func,
};
SideBar.defaultProps = {
  children: [],
  onClick: () => {},
};

export default SideBar;
