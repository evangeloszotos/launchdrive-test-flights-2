import { Tooltip } from '@mui/material';
import React, { ReactElement } from 'react';
import Centered from '../Centered';
import { SideBarItemLabel } from '../SideBarItemLabel/SideBarItemLabel';

interface SideBarItemProperties {
  label?: string;
  icon?: ReactElement;
}

export const SideBarItemPrefabTestbuilder: React.FC<SideBarItemProperties> = (props) => {
  const { label, icon } = props;

  return (
    <Tooltip title={/*! isExpanded ? label : */ ''} placement="right">
      <Centered direction="column">
        {icon}
        <SideBarItemLabel>{label}</SideBarItemLabel>
      </Centered>
    </Tooltip>
  );
};

export default SideBarItemPrefabTestbuilder;
