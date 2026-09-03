import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import SignatureSection from './components/SignatureSection';
import MenuShowcase from './components/MenuShowcase';
import CustomizerModal from './components/CustomizerModal';
import CartDrawer from './components/CartDrawer';
import FloatingCartBar from './components/FloatingCartBar';
import CheckoutModal from './components/CheckoutModal';
import ReceiptModal from './components/ReceiptModal';
import PitchDeckModal from './components/PitchDeckModal';
import ConceptGallery from './components/ConceptGallery';
import FranchiseSection from './components/FranchiseSection';
import Outlets from './components/Outlets';
import Footer from './components/Footer';
import { syncSheetImagesWithAppData } from './data/sabubaData';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPitchDeckOpen, setIsPitchDeckOpen] = useState(false);
  const [completedOrderData, setCompletedOrderData] = useState(null);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [, setRefreshKey] = useState(0);

  useEffect(() => {
    // Automatically sync latest menu photos from Google Sheet CSV
    syncSheetImagesWithAppData(() => {
      setRefreshKey(k => k + 1);
    });
  }, []);


  const totalCartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2000);
  };

  const handleAddToCart = (item, quantity = 1, selectedToppings = [], notes = '') => {
    const toppingsTotal = selectedToppings.reduce((sum, t) => sum + (t.price || 0), 0);
    const unitPrice = (item.promoPrice || item.price || 0) + toppingsTotal;
    const itemTotalPrice = unitPrice * quantity;
    const cartId = `${item.id}-${Date.now()}`;

    setCartItems((prev) => [
      ...prev,
      {
        cartId,
        id: item.id,
        name: item.name,
        image: item.image,
        quantity,
        selectedToppings,
        notes,
        unitPrice,
        totalPrice: itemTotalPrice,
      },
    ]);

    triggerToast(`"${item.name}" berhasil ditambahkan ke keranjang!`);
  };

  const handleUpdateQuantity = (cartId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(cartId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const unitPrice = item.totalPrice / item.quantity;
          return {
            ...item,
            quantity: newQty,
            totalPrice: unitPrice * newQty,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleFocusSearch = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-600 selection:text-white relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Header & Navbar */}
      <Navbar
        totalItems={totalCartItemsCount}
        setIsCartOpen={setIsCartOpen}
        onSearchClick={handleFocusSearch}
        onOpenPitchDeck={() => setIsPitchDeckOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section (Apple 3D Carousel) */}
        <Hero
          onAddToCart={(item) => setQuickViewItem(item)}
          onQuickView={(item) => setQuickViewItem(item)}
        />

        {/* 2. Visual Category Selector */}
        <CategoryGrid
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 3. Promo Sarapan Hemat Section */}
        <SignatureSection
          onAddToCart={(item) => setQuickViewItem(item)}
          onQuickView={(item) => setQuickViewItem(item)}
        />

        {/* 4. Full Menu Showcase & Customizer */}
        <MenuShowcase
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddToCart={(item) => setQuickViewItem(item)}
          onQuickView={(item) => setQuickViewItem(item)}
        />

        {/* 5. Concept Showcase (Tenda, Restaurant, Booth, Zeger Collab) */}
        <ConceptGallery />

        {/* 6. Franchise Kemitraan */}
        <FranchiseSection onOpenPitchDeck={() => setIsPitchDeckOpen(true)} />

        {/* 7. Outlets & Locations */}
        <Outlets />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-over Drawers */}
      <CustomizerModal
        item={quickViewItem}
        isOpen={!!quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={handleProceedCheckout}
      />

      <FloatingCartBar
        totalItems={totalCartItemsCount}
        totalPrice={totalCartPrice}
        onClick={() => setIsCartOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onSuccessOrder={(data) => {
          setCompletedOrderData(data);
          setCartItems([]);
        }}
      />

      <ReceiptModal
        isOpen={!!completedOrderData}
        onClose={() => setCompletedOrderData(null)}
        orderData={completedOrderData}
        onOpenWhatsApp={() => {
          if (completedOrderData?.waUrl) {
            window.open(completedOrderData.waUrl, '_blank');
          }
        }}
      />

      {/* McKinsey Pitch Deck & Proposal Modal */}
      <PitchDeckModal
        isOpen={isPitchDeckOpen}
        onClose={() => setIsPitchDeckOpen(false)}
      />
    </div>
  );
}

