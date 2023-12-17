import * as React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MusicsTab from './tabs/MusicsTab';
//import LazyLoadedMusicsTab from './tabs/MusicsTab';
import ArtistsTab from './tabs/ArtistsTab';
import AlbumsTab from './tabs/AlbumsTab';
import StatisticsTab from './tabs/StatisticsTab';
import TabContext from '@mui/lab/TabContext';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabBar() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        width: '100%', // Take full width
        margin: 'auto', // Center horizontally
        bgcolor: 'background.paper',
      }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="Musiques" {...a11yProps(0)} />
          <Tab label="Artistes" {...a11yProps(1)} />
          <Tab label="Albums" {...a11yProps(2)} />
          <Tab label="Statistiques" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabContext
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value || 0}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <LazyLoadedMusicsTab /> */}
          <MusicsTab />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ArtistsTab />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <AlbumsTab />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <StatisticsTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
