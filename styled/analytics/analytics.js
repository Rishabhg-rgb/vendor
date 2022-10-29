import styled from "styled-components"

export const AnalyticsContainerHalf = styled.div`
	
	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #dedede;
	margin-top: 10px;
	padding: 20px;
	width: calc( 50% - 5px);
	${

		props => props.marginRight && `

			margin-right: 10px;

		`

	}

`
export const AnalyticsContainerFull = styled.div`
	
	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #dedede;
	margin-top: 10px;
	padding: 20px;

`
export const AnalyticsTitle = styled.h4`
	
	margin: unset;
	
`
export const AnalyticsSubTitle = styled.h5`

	margin: unset;

`

export const AnalyticsBucket = styled.div`
	
	background-color: #dedede;
	border-radius: 2px;
	font-size: 14px;
	padding: 10px 20px;
	width: ${ props => props.widthDynamic }%;
	max-width: 80%;
	white-space: nowrap;
	min-height: 40px;

`
export const AnalyticsBucketCount = styled.div`

	font-size: 14px;

`

export const AnalyticsBucketItem = styled.div`
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 5px;
	align-items: center;

`

export const AnalyticsBucketContainer = styled.div`
	
	margin-top: 20px;
	height: calc( 100% - 40px);

`
export const AnalyticsActionUnderway = styled.div`
	
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

`

export const AnalyticsActionText = styled.div`
	
	color: #555;
	font-size: 12px;
	font-style: italic;

`
