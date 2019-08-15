import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component {
  state = { images: [] }
  fn = async (data) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query: data
      }
    })
    this.setState({ images: res.data.results })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar callback={this.fn} />
        <h3>Found total {this.state.images.length} images</h3>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
export default App