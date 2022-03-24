import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Grid, GridTypeMap, styled, Toolbar } from '@mui/material';
import { OverridableComponent } from '@mui/types';

interface AppBarStyleProps {
  backgroundColor?: string;
}
interface LogoStyleProps {
  dividerColor?: string;
}
interface AppBarProps extends AppBarStyleProps, LogoStyleProps, MuiAppBarProps {
  logoWidth?: number;
  logo: React.ReactElement;
  startContent?: React.ReactElement;
  centerContent?: React.ReactElement;
  endContent?: React.ReactElement;
}

//

const StyledMuiAppBar = styled<React.FC<AppBarStyleProps>>(MuiAppBar)(
  (props) => ({
    backgroundColor: props.backgroundColor,
  })
);
const StyledToolbar = styled(Toolbar)`
  padding-left: 0 !important;
`;
const LogoContainer = styled<
  OverridableComponent<GridTypeMap<LogoStyleProps, 'div'>>
>(Grid)((props) => ({
  borderRight: `1px solid ${props.dividerColor}`,
}));
const ContentContainer = styled(Grid)`
  width: auto;
  flex-grow: 1;
`;

//

export const AppBar: React.VoidFunctionComponent<AppBarProps> = (props) => {
  const {
    logoWidth = 64,
    backgroundColor = '#010D31',
    dividerColor = '#4d556e',
    logo,
    startContent,
    centerContent,
    endContent,
    ...other
  } = props;

  return (
    <StyledMuiAppBar backgroundColor={backgroundColor} {...other}>
      <StyledToolbar variant="dense">
        <Grid container alignItems="center">
          {logo && (
            <LogoContainer
              container
              justifyContent="center"
              width={logoWidth}
              dividerColor={dividerColor}
            >
              {logo}
            </LogoContainer>
          )}
          <ContentContainer
            container
            justifyContent="space-between"
            alignItems="center"
            height="100%"
          >
            <Grid
              container
              width="auto"
              alignItems="center"
              justifyContent="flex-start"
            >
              {startContent}
            </Grid>

            <Grid
              container
              width="auto"
              alignItems="center"
              justifyContent="center"
            >
              {centerContent}
            </Grid>

            <Grid
              container
              width="auto"
              alignItems="center"
              justifyContent="flex-end"
            >
              {endContent}
            </Grid>
          </ContentContainer>
        </Grid>
      </StyledToolbar>
    </StyledMuiAppBar>
  );
};

export default AppBar;
