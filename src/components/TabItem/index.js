import './index.css'

const TabItem = props => {
  const {tabObject, onclickTabitem, isActive} = props
  const {displayText, tabId} = tabObject
  const onTab = () => {
    onclickTabitem(tabId)
  }
  const styling = isActive ? 'color-change' : 'button'
  return (
    <li className="list-item">
      <button className={styling} type="button" onClick={onTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
