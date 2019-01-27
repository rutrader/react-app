import React from 'react'

function UsersContainer(props) {
	return(
		<div key={props.id} className={"people-item card border-off"}>
			<div className={"avatar card-img-top"}>
				<img alt={props.item.username} src={props.item.picture.large}/>
			</div>
			<div className={"card-body"}>
				<div className={"name card-title"}>
					{props.item.name.first} {props.item.name.last}
				</div>
				<div className={"email card-text"}>
					{props.item.email}
				</div>
			</div>
		</div>
	)
}

export default UsersContainer