import Head from 'next/head'
import Nav from './Nav'

import layoutStyles from '../styles/Layout.module.css'
import navStyles from '../styles/Nav.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={layoutStyles.container}>
            <div className={layoutStyles.main}>
                {children}
            </div>
        </div>
        </>
    );
}

export default Layout