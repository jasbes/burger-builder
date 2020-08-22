import React from 'react';

import './styles.css';

interface LayoutProps {}

const Layout:React.FC<LayoutProps> = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </>
);

export default Layout;