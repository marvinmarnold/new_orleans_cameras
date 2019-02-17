import React from 'react'
import { Link } from 'gatsby'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Layout from '../components/layout'
import { graphql } from "gatsby"
// import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  state = {
    lat: 29.951022,
    lng: -90.081142,
    zoom: 13
  }

  componentDidMount() {
  }

  renderMarker(edge) {
    const node = edge.node
    console.log("Adding node")
    console.log(node)
    const position = [node.Y, node.X]
    return (
      <Marker key={node.Camera} position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
      )
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const title = "New Orleans Surveillance Cameras Analysis"
    const tags = [`new orleans`, `surveillance`, `police`, `cameras`, `monitor`, `oversight`]

    if (typeof window !== 'undefined') {
      const data = this.props.data.allCamerasCsv.edges
      const markers = data.map(this.renderMarker)
      return (
          <Layout>
            <SEO title={title} keywords={tags} />
            <h1>Camera Locations & 911 Calls</h1>
            <p>Camera locations were collected by <a href="https://stopwatchingnola.org">stopwatchingnola.org</a></p>
            <Map center={position} zoom={this.state.zoom} id="mapid">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {markers}
            </Map>
            <Link to="/page-2/">Go to page 2</Link>
          </Layout>

      )
    }
    return (
      <Layout>
        <SEO title={title} keywords={tags} />
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

export const IndexQuery = graphql`
  query {   
    allCamerasCsv {
      edges {
        node {
          Camera
          X
          Y
        }
      }
    }
  }
`