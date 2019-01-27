import React from 'react'

function PaginationContainer(props) {
	return(
		<a href={'#'+props.item} key={props.id} onClick={props.onClick}>
			{props.item}
		</a>
	)
}

export default PaginationContainer;