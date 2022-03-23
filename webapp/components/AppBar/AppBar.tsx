import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Grid, styled, Toolbar } from '@mui/material';

interface AppBarStyleProps {
  backgroundColor?: string;
}
interface AppBarProps extends AppBarStyleProps, MuiAppBarProps {
  logoWidth?: number;
  logo: React.ReactElement;
  startContent?: React.ReactElement;
  centerContent?: React.ReactElement;
  endContent?: React.ReactElement;
}

//

const StyledMuiAppBar = styled<React.FC<AppBarStyleProps>>(MuiAppBar)((props) => ({
  backgroundColor: props.backgroundColor,
}));
const StyledToolbar = styled(Toolbar)`
  padding-left: 0 !important;
`;
const LogoContainer = styled(Grid)`
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;
const ContentContainer = styled(Grid)`
  width: auto;
  flex-grow: 1;
`;

//

export const AppBar: React.VoidFunctionComponent<AppBarProps> = (props) => {
  const {
    logoWidth = 64,
    backgroundColor = '#010D31',
    logo,
    startContent,
    centerContent,
    endContent,
    ...other
  } = props;

  return (
    <StyledMuiAppBar backgroundColor={backgroundColor} {...other}>
      <StyledToolbar variant="dense">
        <Grid container={true} alignItems="center">
          {logo && (
            <LogoContainer container={true} justifyContent="center" width={logoWidth}>
              {logo}
            </LogoContainer>
          )}
          <ContentContainer container={true} justifyContent="space-between" alignItems="center" height="100%">
            <Grid container={true} width="auto" alignItems="center" justifyContent="flex-start">
              {startContent}
            </Grid>

            <Grid container={true} width="auto" alignItems="center" justifyContent="center">
              {centerContent}
            </Grid>

            <Grid container={true} width="auto" alignItems="center" justifyContent="flex-end">
              {endContent}
            </Grid>
          </ContentContainer>
        </Grid>
      </StyledToolbar>
    </StyledMuiAppBar>
  );
};

export default AppBar;
