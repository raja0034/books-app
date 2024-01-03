import React from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer';
import { ErrorBoundary }  from './ErrorBoundary';

const Layout: React.FC = () => {
    return (
        <div>
            <ErrorBoundary>
            <Header />
            <Home />
            <Footer />
            </ErrorBoundary>
        </div>
    );
};

export default Layout;
