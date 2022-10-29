import CategoryItem from "../category/CategoryItem"

const CategoriesList = ( props ) => {

	const {

		categoriesData

	} = props

	console.log( categoriesData )

	return(

		<div className="bg-white rounded border border-slate-300 p-5 shadow">
			<h1 className="text-2xl text-slate-900 font-bold">Categories</h1>
			<div className="mt-5 grid grid-cols-4 gap-2.5">
				{
					categoriesData !== null && categoriesData.map( ( value, index ) => {

						return(

							<CategoryItem
								categoryData={ value }
								isLast={ index === categoriesData.length - 1 }
								key={ "category-item-" +index }
							/>

						)

					})

				}
			</div>
		</div>

	)

}

export default CategoriesList
