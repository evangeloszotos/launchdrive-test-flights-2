import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';

export const IconText = (props) => {
  const { icon, label, color, fontSize, letterSpacing, fontWeight, textSx } =
    props;

  return (
    <Box sx={{ flexShrink: 0 }}>
      <Grid container={true} sx={{ color }}>
        {icon}
        <Box sx={{ ml: 1 }}>
          <Grid
            container={true}
            alignItems="center"
            sx={{
              height: '100%',
              fontSize,
              letterSpacing,
              fontWeight,
              ...textSx,
            }}
          >
            {label}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
IconText.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  letterSpacing: PropTypes.number,
  fontWeight: PropTypes.string,
  textSx: PropTypes.object,
};
IconText.defaultProps = {
  color: 'primary.main',
  fontSize: 16,
  letterSpacing: 0,
  fontWeight: 'normal',
  textSx: {},
};

export default IconText;
