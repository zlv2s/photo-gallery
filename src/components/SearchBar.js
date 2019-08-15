import React from 'react'

class SearchBar extends React.Component {
  state = { search: '' }

  onInputChange = (e) => {
    this.setState({ search: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.callback(this.state.search)

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <div className="ui huge fluid icon input">
          <input
            type="text"
            id="search"
            onChange={this.onInputChange}
            value={this.state.search} placeholder="Search..."
          />
          <i className="search icon"></i>
        </div>
      </form>
    )
  }
}

export default SearchBar