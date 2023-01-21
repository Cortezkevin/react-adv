import { ProductCard } from "../components"

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
				<ProductCard product={ product }>
					<ProductCard.Image />
					<ProductCard.Title title="" />
					<ProductCard.Buttons />					
				</ProductCard>
			</div>        
    </div>
  )
}
