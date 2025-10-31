import React from 'react';
import { ProductDetail } from '../components/product/ProductDetail';

interface ProductPageProps {
  productId?: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ productId = '1' }) => {
  return <ProductDetail productId={productId} />;
};