import PropTypes from 'prop-types';
import MuiAppBar from '@mui/material/AppBar';
import { Grid, IconButton, Toolbar } from '@mui/material';
import { ArrowBackIosNew, Notifications, Widgets } from '@mui/icons-material';
import Link from 'next/link';
import Logo from './Logo.svg';
import Leslie from './Leslie.png';
import TextWithIcon from '../TextWithIcon';

export const AppBar = (props) => {
  const { title, backHref } = props;

  return (
    <MuiAppBar position="static" sx={{ backgroundColor: '#010D31' }}>
      <Toolbar variant="dense" disableGutters={true}>
        <Grid container={true} justifyContent="space-between" height="100%">
          <Grid container={true} width="auto" alignItems="center">
            <Grid container={true} justifyContent="center" width={64}>
              <img src={Logo} alt="Logo" />
            </Grid>

            <TextWithIcon
              color="white"
              label={title}
              icon={
                <Link href={backHref}>
                  <IconButton size="medium" color="inherit" aria-label="menu" sx={{ mr: -0.5 }}>
                    <ArrowBackIosNew sx={{ fontSize: 20 }} />
                  </IconButton>
                </Link>
              }
              letterSpacing={0.15}
              fontSize={16}
            />
          </Grid>

          <Grid container={true} width="auto" alignItems="center" sx={{ pr: 4 }}>
            <IconButton size="medium" color="inherit" aria-label="menu" sx={{ mr: 0.5 }}>
              <Notifications sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="medium" color="inherit" aria-label="menu" sx={{ mr: 1.5 }}>
              <Widgets sx={{ fontSize: 20 }} />
            </IconButton>

            <TextWithIcon color="white" label="Leslie" icon={<img src={String(Leslie)} alt="Leslie" />} fontSize={12} />
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  backHref: PropTypes.string.isRequired,
};

export default AppBar;
