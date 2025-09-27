import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Globe } from "lucide-react";

type Language = 'en' | 'hi';

interface LanguageContent {
  en: string;
  hi: string;
}

const languages: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  hi: { name: 'हिंदी', flag: '🇮🇳' }
};

export const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span>{languages[currentLanguage].flag}</span>
      <span>{languages[currentLanguage].name}</span>
    </Button>
  );
};

// Text content provider hook
export const useLanguageContent = () => {
  const [currentLanguage] = useState<Language>('en');

  const t = (content: LanguageContent): string => {
    return content[currentLanguage];
  };

  return { t, currentLanguage };
};

// Common text content
export const textContent = {
  // Navigation
  marketplace: { en: 'Marketplace', hi: 'बाज़ार' },
  community: { en: 'Community', hi: 'समुदाय' },
  about: { en: 'About', hi: 'हमारे बारे में' },
  contact: { en: 'Contact', hi: 'संपर्क' },
  signIn: { en: 'Sign In', hi: 'साइन इन' },
  getStarted: { en: 'Get Started', hi: 'शुरू करें' },

  // Dashboard
  welcomeBack: { en: 'Welcome back', hi: 'वापस स्वागत है' },
  ceramicArtist: { en: 'Ceramic Artist', hi: 'मिट्टी के बर्तन कलाकार' },
  memberSince: { en: 'Member since', hi: 'सदस्य बने' },
  totalSavings: { en: 'Total Savings', hi: 'कुल बचत' },
  activeOrders: { en: 'Active Orders', hi: 'सक्रिय ऑर्डर' },
  groupOrders: { en: 'Group Orders', hi: 'समूह ऑर्डर' },

  // Marketplace
  searchMaterials: { en: 'Search materials or suppliers...', hi: 'सामग्री या आपूर्तिकर्ता खोजें...' },
  allCategories: { en: 'All Categories', hi: 'सभी श्रेणियां' },
  allLocations: { en: 'All Locations', hi: 'सभी स्थान' },
  cart: { en: 'Cart', hi: 'कार्ट' },
  addToCart: { en: 'Add to Cart', hi: 'कार्ट में जोड़ें' },
  quote: { en: 'Quote', hi: 'कोटेशन' },
  stock: { en: 'Stock', hi: 'स्टॉक' },

  // Common
  save: { en: 'Save', hi: 'सेव करें' },
  cancel: { en: 'Cancel', hi: 'रद्द करें' },
  loading: { en: 'Loading...', hi: 'लोड हो रहा है...' },
  error: { en: 'Error', hi: 'त्रुटि' },
  success: { en: 'Success', hi: 'सफलता' }
};