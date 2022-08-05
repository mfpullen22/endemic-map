import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BlastoMap from './blasto_map';
import HistoMap from './histo_map';
import CocciMap from './cocci_map';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <section
        aria-labelledby="section-heading"
        className="max-w-full mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
                <Box
                    boxShadow={4}
                    p={0}
                    sx={{ marginBottom: 4,  bgcolor: 'background.paper', height: "100%" }}>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        value={value}
                        onChange={handleChange}
                        aria-label="scrollable auto tabs">
                        <Tab label="Blastomycosis" {...a11yProps(0)} />
                        <Tab label="Histoplasmosis" {...a11yProps(1)} />
                        <Tab label="Coccidiodomycosis" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <BlastoMap />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <HistoMap />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CocciMap />
                    </TabPanel>
                </Box>
    </section>
    );
  }