import { Box, Tooltip } from '@mui/material';
import React, { ReactElement } from 'react';
import Centered from '../Centered';

interface SideBarItemProperties {
  label?: string;
  icon?: ReactElement;
}

export const SideBarTestbuilderItem: React.FC<SideBarItemProperties> = (props) => {
  const { label, icon } = props;

  return (
    <Tooltip title={/*! isExpanded ? label : */ ''} placement="right">
      <Centered direction="column">
        {icon}
        <Box
          sx={{
            fontSize: '10px',
            lineHeight: '12px',
            pt: 0.5,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          {label}
        </Box>
      </Centered>
    </Tooltip>
  );
};

export default SideBarTestbuilderItem;
