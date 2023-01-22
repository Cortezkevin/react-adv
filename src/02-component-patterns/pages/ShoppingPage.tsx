import { ProductCard } from "../components";
import '../styles/custom-styles.css';

const product = {
	id: '1',
	title: 'Coffe Mug - Card'
}

export const ShoppingPage = () => {
  return (
    <div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				<ProductCard 
					product={ product }
					className="bg-dark"
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
				<ProductCard 
					product={ product }					
				>
					<ProductCard.Image						
					/>
					<ProductCard.Title 
						title=""						
					 />
					<ProductCard.Buttons 						
					/>
				</ProductCard>
			</div>
    </div>
  )
}
