import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";

export const useShoppingCart = () => {
																											//x cantidad de llaves: de tipo ProductInCart
  const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});
	
	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart(prev => {
			
			const productInCart: ProductInCart = prev[ product.id ] || { ...product, count: 0 };

			if( Math.max( productInCart.count + count, 0 ) > 0){
				productInCart.count += count;
				return {
					...prev,
					[product.id]: productInCart
				}
			}

			const { [product.id]: toDelete, ...rest } = prev;
			return rest;
		});
	}
  return {
		onProductCountChange,
		shoppingCart
  }
}