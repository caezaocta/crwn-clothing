import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to='/'>
					<div><CrwnLogo /></div>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/contact">
						CONTACT
					</Link>
					<Link className="nav-link" to="/sign-in">
						SIGN IN
					</Link>
				</div>
				{/* <div className="links-container">
				</div>
				<div className="links-container">
				</div> */}
			</div>
			<Outlet />
		</>
	)
}

export default Navigation;