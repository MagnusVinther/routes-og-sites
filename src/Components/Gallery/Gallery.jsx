import styles from './Gallery.module.scss'
import arrImages from '../../Assets/data/arrGalleryImages';

export const Gallery = props => {
	console.log(props);

	return (
		<div className={styles.gallerywrapper}>
			{arrImages.map(item => {
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