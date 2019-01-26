import React from 'react';

function PeopleItems(props) {
	return(
		props.items.map(function(item, key) {
			return (
				<div key={key} className={"people-item card border-off"}>
					<div className={"avatar card-img-top"}>
						<img src={item.picture.large}/>
					</div>
					<div className={"card-body"}>
						<div className={"name card-title"}>
							{item.name.first} {item.name.last}
						</div>
						<div className={"email card-text"}>
							{item.email}
						</div>
					</div>
				</div>
			)
		})
	)
}

export default PeopleItems;