import styles from './Gallery.module.scss'

export const Gallery = props => {
	console.log(props);

	return (
		<div className={styles.gallerywrapper}>
			{props && props.imageList && props.imageList.map(item => {
				return (
					<figure>
					<figcaption>
						<h3> {item.name} </h3>
					</figcaption>
						<img key={item.id} src={require(`../../Assets/images/artwork/${item.image}`)} alt={item.name} />
					</figure>
				)
			})}
		</div>
	)
}