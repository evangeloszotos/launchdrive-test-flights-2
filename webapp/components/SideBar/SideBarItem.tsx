import { alpha, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { theme } from '../../mui-theme';

export const SideBarItem = (props) => {
  const { children, isSelected, onClick } = props;

  // TODO: Use "Centered" here
  return (
    <Grid
      container={true}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        cursor: 'pointer',
        backgroundColor: isSelected ? alpha(theme.palette.primary.main, 0.12) : 'transparent',
        color: isSelected ? theme.palette.primary.main : theme.palette.grey['600'],
      }}
      p={1}
      onClick={onClick}
    >
      {children}
    </Grid>
  );
};
SideBarItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};
SideBarItem.defaultProps = {
  children: null,
  isSelected: false,
  onClick: () => {},
};

export default SideBarItem;
