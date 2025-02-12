import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

interface MetalPrice {
  price_gram_24k: number;
  price_gram_22k: number;
  price_gram_18k: number;
  currency: string;
  metal: string;
  timestamp: number;
}

export function MetalPrices() {
  const [goldPrice, setGoldPrice] = useState<MetalPrice | null>(null);
  const [silverPrice, setSilverPrice] = useState<MetalPrice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const headers = new Headers({
        'x-access-token': 'goldapi-3end9gsm71bt2sa-io',
        'Content-Type': 'application/json'
      });

      try {
        const [goldResponse, silverResponse] = await Promise.all([
          fetch('https://www.goldapi.io/api/XAU/INR', { headers }),
          fetch('https://www.goldapi.io/api/XAG/INR', { headers })
        ]);

        const goldData = await goldResponse.json();
        const silverData = await silverResponse.json();

        setGoldPrice(goldData);
        setSilverPrice(silverData);
      } catch (error) {
        console.error('Error fetching metal prices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    // Refresh prices every 5 minutes
    const interval = setInterval(fetchPrices, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <p className="text-sm">Loading metal prices...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goldPrice && (
            <div className="flex items-center justify-center gap-4 bg-gray-800 rounded-lg p-4">
              <Coins className="text-gold-400" size={24} />
              <div>
                <h4 className="text-gold-400 font-semibold mb-1">Gold Rates</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">24K</p>
                    <p className="font-semibold">₹{goldPrice.price_gram_24k.toFixed(2)}/g</p>
                  </div>
                  <div>
                    <p className="text-gray-400">22K</p>
                    <p className="font-semibold">₹{goldPrice.price_gram_22k.toFixed(2)}/g</p>
                  </div>
                  <div>
                    <p className="text-gray-400">18K</p>
                    <p className="font-semibold">₹{goldPrice.price_gram_18k.toFixed(2)}/g</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {silverPrice && (
            <div className="flex items-center justify-center gap-4 bg-gray-800 rounded-lg p-4">
              <Coins className="text-gray-400" size={24} />
              <div>
                <h4 className="text-gray-400 font-semibold mb-1">Silver Rate</h4>
                <p className="text-sm">
                  <span className="text-gray-400">Today's Rate: </span>
                  <span className="font-semibold">₹{silverPrice.price_gram_24k.toFixed(2)}/g</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}