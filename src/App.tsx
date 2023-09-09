
import './App.css';
import {createTheme, colors, ThemeProvider} from '@mui/material'


import MuiAlert from './components/MuiAlert';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiAccordian from './components/MuiAccordian';
// import MuiBreadcrums from './components/MuiBreadcrums';
// import MuiDrawer from './components/MuiDrawer';
// import MuiLink from './components/MuiLink';
// import MuiNavbar from './components/MuiNavbar';
// import MuiBootomNavigation from './components/MuiBootomNavigation';
// import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiChip from './components/MuiChip';
import MuiDialog from './components/MuiDialog';
import MuiList from './components/MuiList';
import MuiLoadingButton from './components/MuiLoadingButton';
import MuiProgress from './components/MuiProgress';
import MuiSkeleton from './components/MuiSkeleton';
import MuiSnackbar from './components/MuiSnackbar';
import MuiTable from './components/MuiTable';
import MuiTooltip from './components/MuiTooltip';
import MuiPicker from './components/MuiPicker';
import MuiDateRangePicker from './components/MuiDateRangePicker';
import MuiTabs from './components/MuiTabs';
import MuiTimeline from './components/MuiTimeline';
import MuiMasonry from './components/MuiMasonry';
import MuiResponsiveness from './components/MuiResponsiveness';
import { red } from '@mui/material/colors';
// import MuiImageList from './components/MuiImageList';
// import MuiCard from './components/MuiCard';
// import MuiLayout from './components/MuiLayout';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiButton from './components/MuiButton';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiTextField from './components/MuiTextField';
// import MuiTypography from './components/MuiTypography';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiRating from './components/MuiRating';
// import MuiSelect from './components/MuiSelect';
// import MuiSwitch from './components/MuiSwitch';

const theme = createTheme({
  status: {
    danger: 'red'
  }
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">

      {/* <MuiTypography/>
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton/>
      <MuiCheckbox/>
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutocomplete/>
      <MuiLayout/>
      <MuiCard/>
      <MuiAccordian/>
      <MuiImageList/>
      <MuiNavbar/>
      <MuiLink/>
      <MuiBreadcrums/>
      <MuiDrawer/>
      <MuiSpeedDial/>
      <MuiBootomNavigation/>
      <MuiAvatar/> */}
      {/* <MuiBadge/> */}
      {/* <MuiList/> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      <MuiSnackbar/>
      <MuiDialog/>
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      <MuiPicker/>
      <MuiDateRangePicker/>
      <MuiTabs/>
      <MuiTimeline/>
      <MuiMasonry/>
      <MuiResponsiveness/>
    </div>
    </ThemeProvider>
  );
}

export default App;
