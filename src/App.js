import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline/> 
       {/* <Navbar/>   */}
       {/* <Home/> */}
       {/* <RestaurantDetails/> */}
       {/* <Cart/> */}
       {/* <Profile/> */}
       <CustomerRouter/>
    </ThemeProvider>

    
  );
}

export default App;
