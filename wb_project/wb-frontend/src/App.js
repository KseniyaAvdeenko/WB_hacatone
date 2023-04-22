import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from 'react-auth-kit'
import { default as SignUp } from './components/SignUp/SignUp'
import { default as refreshApi} from'./api/refreshAPI'
import { default as Dashboard} from './components/Dashboard/Dashboard'

function App() {
  return (
    <AuthProvider authName={"_auth"}
                  authType={"cookie"}
                  refresh={refreshApi}
                  cookieDomain={window.location.hostname}
                  >
      <BrowserRouter>
        <div className="container">
          <div className='app-content'>
            <>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='signup' element={<SignUp />} />
                <Route path='dashboard/*' element={<Dashboard />} />
              </Route>            
            </Routes>
            </>
          </div>
          </div>  
      </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
