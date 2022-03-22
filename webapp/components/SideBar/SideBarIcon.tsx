import PropTypes from 'prop-types';
import { Grid, Tooltip } from '@mui/material';

export const SideBarIcon = (props) => {
  const {
    // label,
    icon: IconElement,
    // isExpanded,
    iconProps,
  } = props;

  return (
    <Tooltip title={/*! isExpanded ? label : */ ''} placement="right">
      <Grid container={true} justifyContent="center" alignItems="center">
        <IconElement {...iconProps} />
      </Grid>
    </Tooltip>
  );
};
SideBarIcon.propTypes = {
  // label: PropTypes.string,
  icon: PropTypes.object.isRequired,
  iconProps: PropTypes.object,
  // isExpanded: PropTypes.bool,
};
SideBarIcon.defaultProps = {
  // label: "",
  iconProps: {
    sx: {
      mx: 'auto',
    },
  },
  // isExpanded: false,
};

export default SideBarIcon;
