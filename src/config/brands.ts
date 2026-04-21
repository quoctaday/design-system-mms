import UnipayLogo from '../assets/Unipay.svg';
import OCBLogo from '../assets/OCB.svg';
import BVBLogo from '../assets/BVB.svg';
import MPayLogo from '../assets/MPAY.svg';
import AppotapayLogo from '../assets/Appotapay.svg';

export interface BrandConfig {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  description: string;
  primaryColor: string;
  fontFamily?: {
    heading: string;
    body: string;
    googleFont?: string; // Link to Google Fonts if needed
  };
  grayVariant?: 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand';
}

export const BRANDS: BrandConfig[] = [
  {
    id: 'unipay',
    name: 'Unipay',
    shortName: 'unipay',
    logo: UnipayLogo,
    description: 'Digital payment platform',
    primaryColor: '#1288FF',
    fontFamily: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    },
    grayVariant: 'slate'
  },
  {
    id: 'ocb',
    name: 'OCB',
    shortName: 'ocb',
    logo: OCBLogo,
    description: 'Banking & financial services',
    primaryColor: '#008C4F',
    fontFamily: {
      heading: 'Outfit, sans-serif',
      body: 'Inter, sans-serif',
      googleFont: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap'
    },
    grayVariant: 'sage'
  },
  {
    id: 'bvb',
    name: 'BVB',
    shortName: 'bvb',
    logo: BVBLogo,
    description: 'Banking & investment',
    primaryColor: '#232A75',
    fontFamily: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    },
    grayVariant: 'mauve'
  },
  {
    id: 'mpay',
    name: 'MPay',
    shortName: 'mpay',
    logo: MPayLogo,
    description: 'Mobile payment solution',
    primaryColor: '#363793',
    fontFamily: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    },
    grayVariant: 'slate'
  },
  {
    id: 'appotapay',
    name: 'Appotapay',
    shortName: 'appo',
    logo: AppotapayLogo,
    description: 'Payment gateway service',
    primaryColor: '#178E38',
    fontFamily: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    },
    grayVariant: 'olive'
  },
];
