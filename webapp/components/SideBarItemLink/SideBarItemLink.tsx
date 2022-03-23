import NextLink from 'next/link';
import React from 'react';
import { SideBarItem, SideBarItemProperties } from '../SideBarItem/SideBarItem';

interface SideBarLinkItemProperties extends SideBarItemProperties {
  href: string;
}

export const SideBarItemLink: React.FC<SideBarLinkItemProperties> = (props) => {
  const { children, href, ...other } = props;

  return (
    <NextLink key={href} href={href ?? '#'} passHref={true}>
      <div>
        <SideBarItem {...other}>{children}</SideBarItem>
      </div>
    </NextLink>
  );
};

export default SideBarItemLink;
