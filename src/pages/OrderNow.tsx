import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingCart, Package, Truck, Shield, Calculator, MessageCircle, Plus, Trash2, X } from 'lucide-react';
import { productSeries } from '../data/products';
import { useTheme } from '../context/ThemeContext';

interface CartItem {
  id: string;
  seriesId: string;
  qty: number | '';
  color: string;
  material: string;
  optPanels: boolean;
  optTV: boolean;
  optBedding: boolean;
  optSafe: boolean;
  optCard: boolean;
  optTable: boolean;
}

interface CustomerDetails {
  custName: string;
  custPhone: string;
  custEmail: string;
  custCompany: string;
  custGST: string;
  custCity: string;
  custAddr: string;
  custNotes: string;
}

const OrderNow: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    custName: '',
    custPhone: '',
    custEmail: '',
    custCompany: '',
    custGST: '',
    custCity: '',
    custAddr: '',
    custNotes: ''
  });

  const [pricing, setPricing] = useState({
    base: 0,
    delivery: 0,
    options: 0,
    taxable: 0,
    gst: 0,
    total: 0
  });

  // Initialize cart with URL parameter or default item
  useEffect(() => {
    const seriesParam = searchParams.get('series');
    const defaultItem: CartItem = {
      id: Date.now().toString(),
      seriesId: seriesParam && productSeries.find(s => s.id === seriesParam) ? seriesParam : '',
      qty: 1,
      color: 'White',
      material: 'ABS',
      optPanels: false,
      optTV: false,
      optBedding: false,
      optSafe: false,
      optCard: false,
      optTable: false
    };
    setCartItems([defaultItem]);
  }, [searchParams]);

  // Update material when series changes to ensure compatibility
  useEffect(() => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        const selectedSeries = productSeries.find(s => s.id === item.seriesId);
        if (selectedSeries && selectedSeries.availableMaterials.length > 0) {
          if (!selectedSeries.availableMaterials.includes(item.material)) {
            return { ...item, material: selectedSeries.availableMaterials[0] };
          }
        }
        return item;
      })
    );
  }, [cartItems.map(item => item.seriesId).join(',')]);

  const PRICING_CONFIG = {
    basePerSet: 500000,
    deliveryPerSet: 15000,
    gstRate: 0.18,
    options: {
      panels: 25000,
      tv: 30000,
      bedding: 6000,
      safe: 8000,
      card: 5000,
      table: 4000
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const calculatePricing = () => {
    let totalBase = 0;
    let totalDelivery = 0;
    let totalOptions = 0;

    cartItems.forEach(item => {
      const qty = Math.max(1, typeof item.qty === 'number' ? item.qty : 0);
      const base = PRICING_CONFIG.basePerSet * qty;
      const delivery = PRICING_CONFIG.deliveryPerSet * qty;

      let options = 0;
      if (item.optPanels) options += PRICING_CONFIG.options.panels * qty;
      if (item.optTV) options += PRICING_CONFIG.options.tv * qty;
      if (item.optBedding) options += PRICING_CONFIG.options.bedding * qty;
      if (item.optSafe) options += PRICING_CONFIG.options.safe * qty;
      if (item.optCard) options += PRICING_CONFIG.options.card * qty;
      if (item.optTable) options += PRICING_CONFIG.options.table * qty;

      totalBase += base;
      totalDelivery += delivery;
      totalOptions += options;
    });

    const taxable = totalBase + totalDelivery + totalOptions;
    const gst = Math.round(taxable * PRICING_CONFIG.gstRate);
    const total = taxable + gst;

    setPricing({ 
      base: totalBase, 
      delivery: totalDelivery, 
      options: totalOptions, 
      taxable, 
      gst, 
      total 
    });
  };

  useEffect(() => {
    calculatePricing();
  }, [cartItems]);

  const addCartItem = () => {
    const newItem: CartItem = {
      id: Date.now().toString(),
      seriesId: '',
      qty: 1,
      color: 'White',
      material: 'ABS',
      optPanels: false,
      optTV: false,
      optBedding: false,
      optSafe: false,
      optCard: false,
      optTable: false
    };
    setCartItems(prev => [...prev, newItem]);
  };

  const removeCartItem = (id: string) => {
    if (cartItems.length > 1) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const updateCartItem = (id: string, field: keyof CartItem, value: any) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateMessage = () => {
    let message = 'Capsule Beds Enquiry\n\n';
    
    // Add each cart item
    cartItems.forEach((item, index) => {
      const selectedSeries = productSeries.find(s => s.id === item.seriesId);
      const seriesName = selectedSeries ? selectedSeries.name : 'Unknown Series';
      
      const selectedOptions = [];
      if (item.optPanels) selectedOptions.push('Panels');
      if (item.optTV) selectedOptions.push('TV Module');
      if (item.optBedding) selectedOptions.push('Bedding Set');
      if (item.optSafe) selectedOptions.push('Safe Box');
      if (item.optCard) selectedOptions.push('Card Access');
      if (item.optTable) selectedOptions.push('Foldable Side Table');

      const displayQty = typeof item.qty === 'number' ? item.qty : 0;

      message += `Product ${index + 1}:\n`;
      message += `Series: ${seriesName}\n`;
      message += `Qty (sets): ${displayQty}\n`;
      message += `Color: ${item.color}\n`;
      message += `Material: ${item.material}\n`;
      message += `Add-ons: ${selectedOptions.length ? selectedOptions.join(', ') : 'None'}\n\n`;
    });

    message += `Total Price (ex-GST): ₹${formatNumber(pricing.taxable)}\n`;
    message += `GST @18%: ₹${formatNumber(pricing.gst)}\n`;
    message += `Total (incl. GST): ₹${formatNumber(pricing.total)}\n\n`;

    message += `Buyer:\n`;
    message += `Name: ${customerDetails.custName}\n`;
    message += `Phone: ${customerDetails.custPhone}\n`;
    message += `Email: ${customerDetails.custEmail}\n`;
    message += `Company: ${customerDetails.custCompany || '-'}\n`;
    message += `GSTIN: ${customerDetails.custGST || '-'}\n`;
    message += `City/State: ${customerDetails.custCity}\n`;
    message += `Address: ${customerDetails.custAddr}\n`;
    message += `Access notes: ${customerDetails.custNotes || '-'}`;

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!customerDetails.custName || !customerDetails.custPhone || !customerDetails.custEmail || !customerDetails.custCity || !customerDetails.custAddr) {
      alert('Please fill Name, Phone, Email, City/State and Delivery Address.');
      return;
    }

    if (cartItems.length === 0) {
      alert('Please add at least one product to your inquiry.');
      return;
    }

    const message = encodeURIComponent(generateMessage());
    const whatsappNumber = '91XXXXXXXXXX'; // Replace with actual WhatsApp number
    const fallbackEmail = 'biduaindistries@gmail.com';

    // Try WhatsApp first, fallback to email
    if (whatsappNumber && !whatsappNumber.includes('XXXXXXXXXX')) {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } else {
      window.open(`mailto:${fallbackEmail}?subject=Capsule%20Beds%20Enquiry&body=${message}`, '_blank');
    }
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => {
      return total + (typeof item.qty === 'number' ? item.qty : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Multi-Product <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Inquiry</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Select multiple capsule bed configurations and get a comprehensive quote for your entire project. 
            Add different series, quantities, and options to create your perfect solution.
          </p>
          
          {/* Key Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className={`bg-cyan-500/20 border border-cyan-400/40 rounded-full px-6 py-2 flex items-center space-x-2 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <Package className="h-5 w-5 text-cyan-400" />
              <span className="text-gray-900 dark:text-white font-semibold">1 set = 2 pods (upper + lower)</span>
            </div>
            <div className={`bg-cyan-500/20 border border-cyan-400/40 rounded-full px-6 py-2 flex items-center space-x-2 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <Shield className="h-5 w-5 text-cyan-400" />
              <span className="text-gray-900 dark:text-white font-semibold">GST 18% applies</span>
            </div>
            <div className={`bg-cyan-500/20 border border-cyan-400/40 rounded-full px-6 py-2 flex items-center space-x-2 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <Truck className="h-5 w-5 text-cyan-400" />
              <span className="text-gray-900 dark:text-white font-semibold">Delivery ₹15,000 / set (India)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 bg-gray-50/70 dark:bg-gray-950/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden shadow-2xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="h-8 w-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Product Selection</h2>
                </div>
                <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-full px-4 py-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                    {cartItems.length} Product{cartItems.length !== 1 ? 's' : ''} • {getTotalQuantity()} Total Sets
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Product Configurations */}
                <div className="space-y-6">
                  {cartItems.map((item, index) => {
                    const selectedSeries = productSeries.find(s => s.id === item.seriesId);
                    
                    return (
                      <div key={item.id} className={`bg-gray-50 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-200 dark:border-cyan-500/30 relative ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Product {index + 1}
                          </h3>
                          {cartItems.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeCartItem(item.id)}
                              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                              title="Remove this product"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div>
                            <label className="block text-gray-900 dark:text-white font-medium mb-2">Series</label>
                            <select
                              value={item.seriesId}
                              onChange={(e) => updateCartItem(item.id, 'seriesId', e.target.value)}
                              className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                              required
                            >
                              <option value="" disabled hidden>Select Product</option>
                              {(() => {
                                const availableOptions = productSeries.filter(series => 
                                  series.id === item.seriesId || 
                                  !cartItems.some(cartItem => cartItem.id !== item.id && cartItem.seriesId === series.id)
                                );
                                return availableOptions.map((series) => (
                                <option key={series.id} value={series.id}>
                                  {series.name}
                                </option>
                                ));
                              })()}
                            </select>
                            {(() => {
                              const availableOptions = productSeries.filter(series => 
                                series.id === item.seriesId || 
                                !cartItems.some(cartItem => cartItem.id !== item.id && cartItem.seriesId === series.id)
                              );
                              return availableOptions.length === 1 && item.seriesId === '' && (
                              <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                                Only this series is available (others already selected)
                              </p>
                              );
                            })()}
                          </div>
                          <div>
                            <label className="block text-gray-900 dark:text-white font-medium mb-2">Quantity (sets)</label>
                            <input
                              type="number"
                              value={item.qty}
                              onChange={(e) => updateCartItem(item.id, 'qty', e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value) || 0))}
                              min="0"
                              className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-900 dark:text-white font-medium mb-2">Color</label>
                            <select
                              value={item.color}
                              onChange={(e) => updateCartItem(item.id, 'color', e.target.value)}
                              className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                              required
                            >
                              <option>White</option>
                              <option>Pink</option>
                              <option>Yellow</option>
                              <option>Black</option>
                              <option>Blue</option>
                              <option>Orange</option>
                              <option>Grey</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-gray-900 dark:text-white font-medium mb-2">Material</label>
                            <select
                              value={item.material}
                              onChange={(e) => updateCartItem(item.id, 'material', e.target.value)}
                              className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                              required
                            >
                              {selectedSeries?.availableMaterials.map((material) => (
                                <option key={material} value={material}>
                                  {material === 'Wood' ? 'Wood (eco multi-layer board)' : material}
                                </option>
                              )) || [<option key="ABS" value="ABS">ABS</option>]}
                            </select>
                          </div>
                        </div>

                        {/* Options */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Add-ons (per set)</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {[
                              { key: 'optPanels', label: 'Panels (Side/Back/Top)', price: PRICING_CONFIG.options.panels },
                              { key: 'optTV', label: 'TV Module', price: PRICING_CONFIG.options.tv },
                              { key: 'optBedding', label: 'Bedding Set', price: PRICING_CONFIG.options.bedding },
                              { key: 'optSafe', label: 'Safe Box', price: PRICING_CONFIG.options.safe },
                              { key: 'optCard', label: 'Card Access', price: PRICING_CONFIG.options.card },
                              { key: 'optTable', label: 'Foldable Side Table', price: PRICING_CONFIG.options.table }
                            ].map((option) => (
                              <label key={option.key} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">
                                <input
                                  type="checkbox"
                                  checked={item[option.key as keyof CartItem] as boolean}
                                  onChange={(e) => updateCartItem(item.id, option.key as keyof CartItem, e.target.checked)}
                                  className="w-4 h-4 text-cyan-400 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
                                />
                                <span className="text-sm">{option.label} (+₹{formatNumber(option.price)})</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Add Product Button */}
                  {(() => {
                    const allSeriesSelected = cartItems.length >= productSeries.length;
                    return (
                      <div>
                        <button
                          type="button"
                          onClick={addCartItem}
                          disabled={allSeriesSelected}
                          className={`w-full py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 font-semibold shadow-lg ${
                            allSeriesSelected
                              ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 dark:text-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-400 hover:to-indigo-500 hover:shadow-purple-500/25'
                          }`}
                        >
                          <Plus className="h-5 w-5" />
                          <span>Add Another Product</span>
                        </button>
                        {allSeriesSelected && (
                          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-2">
                            All available product series have been added to your inquiry
                          </p>
                        )}
                      </div>
                    );
                  })()}
                </div>

                {/* Customer Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Buyer Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="custName"
                        value={customerDetails.custName}
                        onChange={handleCustomerChange}
                        className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="custPhone"
                        value={customerDetails.custPhone}
                        onChange={handleCustomerChange}
                        className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="custEmail"
                        value={customerDetails.custEmail}
                        onChange={handleCustomerChange}
                        className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="custCompany"
                        value={customerDetails.custCompany}
                        onChange={handleCustomerChange}
                        className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">GSTIN (if any)</label>
                      <input
                        type="text"
                        name="custGST"
                        value={customerDetails.custGST}
                        onChange={handleCustomerChange}
                        className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">City / State</label>
                      <input
                        type="text"
                        name="custCity"
                        value={customerDetails.custCity}
                        onChange={handleCustomerChange}
                        className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Delivery Address</label>
                    <textarea
                      name="custAddr"
                      value={customerDetails.custAddr}
                      onChange={handleCustomerChange}
                      rows={3}
                      className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Access Notes (stairs, lift, timings, etc.)</label>
                    <textarea
                      name="custNotes"
                      value={customerDetails.custNotes}
                      onChange={handleCustomerChange}
                      rows={2}
                      className="w-full bg-white dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Price Summary */}
                <div className={`bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-300 dark:border-cyan-500/30 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <div className="flex items-center space-x-2 mb-4">
                    <Calculator className="h-6 w-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Total Price Summary</h3>
                  </div>
                  <div className="space-y-2 font-mono text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Products:</span>
                      <span>{cartItems.length} configuration{cartItems.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Quantity:</span>
                      <span>{getTotalQuantity()} set{getTotalQuantity() !== 1 ? 's' : ''} (1 set = 2 pods)</span>
                    </div>
                    <hr className="border-gray-300 dark:border-gray-600 my-3" />
                    <div className="flex justify-between">
                      <span>Base:</span>
                      <span>₹{formatNumber(pricing.base)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span>₹{formatNumber(pricing.delivery)}</span>
                    </div>
                    {pricing.options > 0 && (
                      <div className="flex justify-between">
                        <span>Options:</span>
                        <span>₹{formatNumber(pricing.options)}</span>
                      </div>
                    )}
                    <hr className="border-gray-300 dark:border-gray-600 my-3" />
                    <div className="flex justify-between">
                      <span>Taxable:</span>
                      <span>₹{formatNumber(pricing.taxable)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST @18%:</span>
                      <span>₹{formatNumber(pricing.gst)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                      <span>Total:</span>
                      <span>₹{formatNumber(pricing.total)}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
                    GST 18% on (Base + Delivery + Options). Lead time: 25–35 days after deposit.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 group shadow-lg hover:shadow-cyan-500/25"
                  >
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Send Multi-Product Inquiry</span>
                  </button>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                  By submitting you agree to be contacted via WhatsApp/Email for quote and delivery details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pricing Note (India)</h3>
          <div className={`bg-white dark:bg-gray-900/60 rounded-xl p-6 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>• Base price: <strong className="text-gray-900 dark:text-white">₹5,00,000 per set (ex-GST)</strong> - Factory Direct</p>
              <p>• Delivery: <strong className="text-gray-900 dark:text-white">₹15,000 per set</strong> (added before GST)</p>
              <p>• <strong className="text-gray-900 dark:text-white">GST 18%</strong> on (base + delivery + options)</p>
              <p>• Lead time: <strong className="text-gray-900 dark:text-white">25–35 days</strong> after deposit (direct from manufacturing facility)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderNow;