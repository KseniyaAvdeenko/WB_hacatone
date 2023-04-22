import { Outlet } from 'react-router-dom'
import { default as  Header } from './Header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />  
            <footer>2023</footer>
        </>
    )
}
export default Layout