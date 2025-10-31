import React from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { ProductUploadPage } from './pages/ProductUploadPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SellerDashboard } from './components/seller/SellerDashboard';
import { AuthModal } from './components/auth/AuthModal';
import { NotFound } from './components/common/NotFound';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return <CatalogPage />;
      case 'product':
        return <ProductPage />;
      case 'seller':
        return <SellerDashboard />;
      case 'profile':
        return <UserProfilePage />;
      case 'upload':
        return <ProductUploadPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case '404':
        return <NotFound />;
      default:
        return <Home />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Header 
          onNavigate={setCurrentPage} 
          onAuthClick={() => setShowAuthModal(true)} 
        />
        <main>
          {currentPage === 'home' ? (
            <Home onNavigate={setCurrentPage} />
          ) : (
            renderPage()
          )}
        </main>
        {currentPage !== '404' && <Footer />}
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;