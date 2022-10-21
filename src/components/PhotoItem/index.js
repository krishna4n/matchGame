import './index.css'

const Item = props => {
  const {photo, randomImage} = props
  const onImageClick = () => {
    randomImage(photo.id)
  }

  return (
    <li className="item">
      <button type="button" className="image-button" onClick={onImageClick}>
        <img
          src={photo.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default Item
