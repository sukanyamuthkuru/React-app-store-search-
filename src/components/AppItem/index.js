import './index.css'

const AppItem = props => {
  const {detailsOfApp} = props
  const {imageUrl, appName} = detailsOfApp

  return (
    <li className="app-item-containers">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-names">{appName}</p>
    </li>
  )
}

export default AppItem
