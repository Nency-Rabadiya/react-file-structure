import React, { useState, useEffect } from "react";
import  {fetchProductData}  from "./productApi.ts";

interface ProductInterface {
  title: string;
  description: string;
}

interface ProductProfileProps {
  productId: number;
}

const ProductProfile: React.FC<ProductProfileProps> = ({ productId }) => {
  const [productData, setProductData] = useState<ProductInterface | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await fetchProductData(productId);
      setProductData(data);
    };
    fetchData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productData.title}</h1>
      <p>{productData.description}</p>
    </div>
  );
};

export default ProductProfile;