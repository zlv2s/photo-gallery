import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import Loading from './Loading'


class App extends React.Component {
  state = { images: [], loading: false }
  fn = async (data) => {
    this.setState({ loading: true })
    const res = await unsplash.get('/search/photos', {
      params: {
        query: data
      }
    })
    this.setState({ images: res.data.results, loading: false })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar callback={this.fn} />
        <h3>Found total {this.state.images.length} images</h3>
        {
          this.state.loading ? <Loading /> : <ImageList images={this.state.images} />
        }
      </div>
    )
  }
}
export default App