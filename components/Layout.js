import Nav from '../components/Nav';
import style from '../styles/Layout.module.css';

import React from 'react';

class Layout extends React.Component{
    render() {
        const { children } = this.props;
        return (
            <>
                <Nav />
                <div className={style.container}>
                    <main className={style.main}>
                        {children}
                    </main>
                </div>
            </>
        )
    }
}
    
export default Layout;