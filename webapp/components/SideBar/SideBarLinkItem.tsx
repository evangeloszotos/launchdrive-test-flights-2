import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { SideBarItem } from './SideBarItem';

export const SideBarLinkItem = (props) => {
  const { children, href, isSelected } = props;

  return (
    <NextLink key={href} href={href ?? '#'} passHref={true}>
      <div>
        <SideBarItem isSelected={isSelected}>{children}</SideBarItem>
      </div>
    </NextLink>
  );
};
SideBarLinkItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  href: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};
SideBarLinkItem.defaultProps = {
  children: [],
  isSelected: false,
};

export default SideBarLinkItem;
