import Link from "next/link"
import Image from "next/image"

import { LogoutIcon } from "@heroicons/react/solid"

const NavigationItemComponent = ( props ) => {

	const {

		navigationActiveTab,
		navigationIcon,
		navigationIconAlt,
		navigationLink,
		navigationName,
		isImageComponent,
		IconComponent,

	} = props

	console.log( IconComponent )

	return(

		<Link href={ "/" + navigationLink } passHref>
			<a>
				<div className="relative flex group">
					<div className="absolute top-5">
						{
							!isImageComponent &&
							<Image
								height={ 25 }
								src={ navigationIcon }
								width={ 25 }
								alt={ navigationIconAlt }
								unoptimised={ true }
							/>
						}
						{
							isImageComponent &&
							<IconComponent className="h-6 w-6 group-hover:text-slate-700 text-slate-400"/>
						}
					</div>
					<div className="w-full bg-slate-100 mt-2.5 cursor-pointer ml-2.5 px-5 py-2.5 text-sm border border-slate-100 group-hover:border-slate-200 text-slate-500 group-hover:text-slate-900" isActive={ navigationActiveTab === navigationName }>{ navigationName }</div>
				</div>
			</a>
		</Link>

	)

}

export default NavigationItemComponent
