import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

export default function Centered(props) {
  const { children, sx } = props;

  return (
    <Grid container={true} justifyContent="center" alignItems="center" {...sx}>
      {children}
    </Grid>
  );
}
Centered.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
Centered.defaultProps = {
  children: [],
  sx: {
    width: '100%',
    height: '100%',
  },
};
