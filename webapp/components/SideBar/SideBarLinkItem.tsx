import NextLink from 'next/link';
import React from 'react';
import { SideBarItem } from './SideBarItem';

interface SideBarLinkItemProperties {
  href: string;
  isSelected?: boolean;
}

export const SideBarLinkItem: React.FC<SideBarLinkItemProperties> = (props) => {
  const { children, href, isSelected } = props;

  return (
    <NextLink key={href} href={href ?? '#'} passHref={true}>
      <div>
        <SideBarItem isSelected={isSelected}>{children}</SideBarItem>
      </div>
    </NextLink>
  );
};

export default SideBarLinkItem;
