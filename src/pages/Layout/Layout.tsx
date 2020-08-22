import React from 'react';

interface LayoutProps {}

const Layout:React.FC<LayoutProps> = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default Layout;