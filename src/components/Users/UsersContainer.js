import React from 'react'
import { Link } from 'react-router-dom'

function UsersContainer(props) {
	return(
			<div key={props.id} className={"people-item card border-off"}>
				<div className={"avatar card-img-top"}>
					<Link to={'/users/'+props.id}>
						<img alt={props.item.username} src={props.item.picture.large}/>
					</Link>
				</div>
				<div className={"card-body"}>
					<div className={"name card-title"}>
						{props.item.name.first} {props.item.name.last}
					</div>
					<div className={"email card-text"}>
						<a href={'/users/'+props.id}>{props.item.email}</a>
					</div>
				</div>
			</div>
	)
}

export default UsersContainer