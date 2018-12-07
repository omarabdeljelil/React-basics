import { Link } from 'react-router'
import { FaHome } from 'react-icons/fa'
import { FaPlusSquare } from 'react-icons/fa'
import { FaThList } from 'react-icons/fa'

export const Menu = () => 
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<FaHome />
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<FaPlusSquare />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<FaThList />
		</Link>
	</nav>