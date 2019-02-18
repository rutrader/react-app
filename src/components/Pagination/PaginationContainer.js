import React from 'react'
import { Link } from 'react-router-dom'

function PaginationContainer(props) {
	let prefix = props.type ? '/by/'+props.type + '/' : '/';
	
	return(
		<Link to={prefix + props.item}>
			{props.item}
		</Link>
	)
}

export default PaginationContainer;