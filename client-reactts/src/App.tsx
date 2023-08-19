import { useRoutes } from 'react-router-dom';
import router from 'src/router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeContext as StoreContext, store } from './Store';
function App() {
  const content = useRoutes(router);
  return (
    <StoreContext.Provider value={store}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <>
            {/* <CssBaseline /> */}
            {content}
            <ToastContainer
              position="top-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </>
        </LocalizationProvider>
      </ThemeProvider>
    </StoreContext.Provider>
  );
}
export default App;
