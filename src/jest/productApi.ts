interface ProductType {
  id: number;
  title: string;
  description: string;
}

export const fetchProductData = async (productId: number): Promise<ProductType> => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const result = await response.json();
  console.log("result", result);
  return result;
};