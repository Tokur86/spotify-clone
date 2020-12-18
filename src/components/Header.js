import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {
    // const [{user}, dispatch] = useStateValue();
    const [{user}] = useStateValue();
	return (
		<div className="header">
			<div className="header_left">
				<SearchIcon />
				<input placeholder="Search for Artists, Songs, Genres, or Podcasts" type="text" />
			</div>
			<div className="header_right">
			<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
			<h4>{user?.display_name}</h4>
			{/* <h4>Display Name</h4> */}
		</div>
		</div>
	);
}

export default Header;
