import './index.css'

const Item = props => {
  const {tabs, selectedTab, tabClicked} = props
  const onTabClicked = () => {
    tabClicked(tabs.tabId)
  }

  return (
    <button
      type="button"
      className={selectedTab === tabs.tabId ? 'tabs-active' : 'tabs'}
      onClick={onTabClicked}
    >
      {tabs.displayText}
    </button>
  )
}

export default Item
