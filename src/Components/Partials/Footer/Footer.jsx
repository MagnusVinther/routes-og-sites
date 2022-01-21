import styles from './Footer.module.scss'

export const Footer = () => {
	return (
	  <footer className={styles.wrapper}>
		  <h2>Det her er en Footer</h2>
		  <div className={styles.footerContainer}>
		  	<h4>Adresse: nogetmednoget</h4>
		  	<h4>Adresse: nogetmednoget</h4>
		  	<h4>Adresse: nogetmednoget</h4>
		  	<h4>Adresse: nogetmednoget</h4>
		  </div>
	  </footer>
	)
  }