import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

export const CenteredHorizontallyOnly = (props) => (
  <Grid
    {...props}
    container={true}
    justifyContent="center"
    alignItems="center"
  />
);
CenteredHorizontallyOnly.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
CenteredHorizontallyOnly.defaultProps = {
  children: null,
  sx: {},
};

export const Centered = styled(CenteredHorizontallyOnly)`
  width: 100%;
  height: 100%;
`;
export default Centered;
