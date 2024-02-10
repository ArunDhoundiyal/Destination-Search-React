import './index.css'

const DestinationItem = props => {
  const {listItem} = props
  const {name, imgUrl} = listItem
  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="style-image" />
      <p className="style-name">{name}</p>
    </li>
  )
}

export default DestinationItem
