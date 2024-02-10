import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {search: ''}

  onClickInput = event => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const {name, destinationsList} = this.props
    const {search} = this.state
    const checkDestination = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(search),
    )

    return (
      <div className=" bg-container">
        <h1 className="top-heading">{name}</h1>
        <div className="search-container">
          <input
            placeholder="Search..."
            type="search"
            className="style-input"
            onChange={this.onClickInput}
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="all-item-container">
          {checkDestination.map(listItem => (
            <DestinationItem key={listItem.id} listItem={listItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
