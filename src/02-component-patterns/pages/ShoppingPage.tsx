import { ProductCard } from "../components";
import '../styles/custom-styles.css';
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
	const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				{
					products.map( product => 
						<ProductCard 
							product={ product }
							className="bg-dark"
							key={ product.id }							
							onChange={ onProductCountChange }
							value={ shoppingCart[product.id]?.count || 0 }
						>
							<ProductCard.Image
								className="custom-image"
							/>
							<ProductCard.Title 
								title=""
								className="text-white"
							/>
							<ProductCard.Buttons 
								className="custom-buttons"
							/>
						</ProductCard>
					)
				}
			</div>
			<div className="shopping-cart">

				{
					Object.entries( shoppingCart ).map( ([ key, product ]) => (					
						<ProductCard 
							product={ product }
							className="bg-dark"
							style={{ width: '100px'}}
							key={ key }
							value={ product.count }
							onChange={ onProductCountChange }
						>
							<ProductCard.Image
								className="custom-image"
							/>
							<ProductCard.Buttons 
								className="custom-buttons"
								style={{ display: 'flex', justifyContent: 'center' }}
							/>
						</ProductCard>
					 ))
				}
			</div>
    </div>
  )
}
