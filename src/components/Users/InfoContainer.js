import React from 'react'
import logo from '../../logo.svg'

function InfoContainer(props) {
    return(
	    <div className="ui feed">
		    {
			    props.posts.map(function(item, key) {
					return (
						<div className="event">
							<div className="label">
								<img src={logo} alt={item.title} />
							</div>
							<div className="content">
								<div className="summary">
									<a href={'#'+key}>Joe Henderson</a> posted on his page
									<div className="date">
										3 days ago
									</div>
								</div>
								<div className="extra text">
									{item.body}
								</div>
								<div className="meta">
									<a href={'#'+key} className="like">
										<i className="like icon"></i> 5 Likes
									</a>
								</div>
							</div>
						</div>
					)
			    })
		    }
	    </div>
    )
}

export default InfoContainer