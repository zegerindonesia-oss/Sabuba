import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import CustomizerModal from './components/CustomizerModal';
import WhyUs from './components/WhyUs';
import ConceptGallery from './components/ConceptGallery';
import FranchiseSection from './components/FranchiseSection';
import Outlets from './components/Outlets';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizerItem, setCustomizerItem] = useState(null);

  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      // Check if exact same item with same spicy level and toppings already exists
      const existingIdx = prev.findIndex(item => 
        item.id === newItem.id &&
        item.spicyLevel === newItem.spicyLevel &&
        JSON.stringify(item.selectedToppings) === JSON.stringify(newItem.selectedToppings) &&
        item.notes === newItem.notes
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        const existing = updated[existingIdx];
        const newQty = existing.quantity + newItem.quantity;
        updated[existingIdx] = {
          ...existing,
          quantity: newQty,
          totalPrice: existing.unitPrice * newQty
        };
        return updated;
      }
      return [...prev, newItem];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.unitPrice * newQuantity
        };
      }
      return item;
    }));
  };

  const handleRemoveItem = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sabuba-red selection:text-white bg-sabuba-creambg">
      {/* Navigation */}
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <MenuShowcase 
          onSelectCustomizer={(item) => setCustomizerItem(item)}
          onAddToCartDirect={handleAddToCart}
        />
        <WhyUs />
        <ConceptGallery />
        <FranchiseSection />
        <Outlets />
      </main>

      {/* Footer */}
      <Footer />

      {/* Customizer Modal */}
      {customizerItem && (
        <CustomizerModal
          item={customizerItem}
          onClose={() => setCustomizerItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
