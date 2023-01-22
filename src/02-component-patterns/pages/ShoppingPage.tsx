import { ProductCard } from "../components";
import '../styles/custom-styles.css';
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
			<h1>Shopping Store</h1>
			<hr />	

			<ProductCard 
				key={ product.id }
				product={ product }
				className="bg-dark"				
				initialValues={{
					count: 4,
					maxCount: 6
				}}
			>
				{
					({ reset, count, increaseBy, isMaxCountReached }) => (
						<>
							<ProductCard.Image className="custom-image"/>
							<ProductCard.Title className="text-white"/>
							<ProductCard.Buttons className="custom-buttons"/>

							<button onClick={ reset }>Reset</button>
							<button onClick={() => increaseBy(-2)}>-2</button>
							{
								!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
							}							
							<span>{count}</span>
						</>
					)
				}
			</ProductCard>

    </div>
  )
}
