import React from 'react'
import { Link } from 'gatsby'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  }

  componentDidMount() {
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    if (typeof window !== 'undefined') {
      return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Map center={position} zoom={this.state.zoom} id="mapid">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            <Link to="/page-2/">Go to page 2</Link>
          </Layout>

      )
    }
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Loading</h1>

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
    // return (
    //   <Layout>
    //     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    //     <h1>Hi people</h1>
    //     <p>Welcome to your new Gatsby site.</p>
    //     <p>Now go build something great.</p>
    //     <Map center={position} zoom={this.state.zoom}>
    //       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //     </Map>
    //     <Link to="/page-2/">Go to page 2</Link>
    //   </Layout>
    // )
  }
}

export default IndexPage
