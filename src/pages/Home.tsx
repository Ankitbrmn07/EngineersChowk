import React from 'react';
import { Hero } from '../components/home/Hero';
import { CategoryTiles } from '../components/home/CategoryTiles';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { HowItWorks } from '../components/home/HowItWorks';
import { TrustSignals } from '../components/home/TrustSignals';
import { MembershipBanner } from '../components/common/MembershipBanner';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <CategoryTiles />
      <FeaturedProducts />
      <HowItWorks />
      <TrustSignals />
      <MembershipBanner />
    </div>
  );
};