import { Nav } from '../Nav/Nav.jsx'
import styles from './Header.module.scss'

const navItems = [
	{ name: 'Forside', path: '/' },
	{ name: 'Om os', path: '/about' },
	{ name: 'Galleri', path: '/gallery' }
]

export const Header = (props) => {

	return (
		<div className={styles.wrapper}>
			<header>
				<h1>{(props.pagetitle) ? props.pagetitle : 'My New REACT App'}</h1>
				<Nav navItems={navItems} />
			</header>
		</div>
	)
  }