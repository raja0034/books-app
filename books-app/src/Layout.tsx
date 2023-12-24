import React from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer';

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
};

export default Layout;
