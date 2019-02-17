import React from 'react'
import { Link } from 'gatsby'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Layout from '../components/layout'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import { graphql } from "gatsby"
// import Image from '../components/image'
import SEO from '../components/seo'

const SITE_TITLE = "New Orleans Surveillance Cameras Analysis"
const SITE_TAGS = [`new orleans`, `surveillance`, `police`, `cameras`, `monitor`, `oversight`]
const DEFAULT_LOCATION = { lat: 29.951022, lng: -90.081142, zoom: 15 }


class IndexPage extends React.Component {
  state = DEFAULT_LOCATION

  componentDidMount() {
  }

  renderCameraMarker(edge) {
    const node = edge.node
    const description = node.Description === "" ? "No additional details." : node.Description
    const position = [node.Lat, node.Lng]
    return (
      <Marker key={node.Camera} position={position}>
        <Popup>{description}</Popup>
      </Marker>
    )
  }

  renderCallMarker(edge) {
    const node = edge.node
    const description = node.Description === "" ? "No additional details." : node.Description
    const position = [node.Lat, node.Lng]
    return (
      <Marker key={node.Item_Number} position={position}>
        <Popup>{description}</Popup>
      </Marker>
    )
  }

  render() {
    const mapPosition = [this.state.lat, this.state.lng]

    if (typeof window !== 'undefined') {
      const cameraData = this.props.data.allCamerasCsv.edges
      const cameraMarkers = cameraData.map(this.renderCameraMarker)

      const callData = this.props.data.allCallsCsv.edges
      // const callMarkers = callData.map(this.renderCallMarker)

      return (
          <Layout>
            <SEO title={SITE_TITLE} keywords={SITE_TAGS} />
            <h1>Camera Locations & 911 Calls</h1>
            <p>Camera locations were collected by <a href="https://stopwatchingnola.org">stopwatchingnola.org</a></p>
            <Map center={mapPosition} zoom={this.state.zoom} id="mapid">
              <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={callData}
                longitudeExtractor={edge => edge.node.Lng}
                latitudeExtractor={edge => edge.node.Lat}
                intensityExtractor={m => 1} />

              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {cameraMarkers}
            </Map>
            <Link to="/page-2/">Go to page 2</Link>
          </Layout>

      )
    }
    return (
      <Layout>
        <SEO title={SITE_TITLE} keywords={SITE_TAGS} />
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
          Description
          Lat
          Lng
        }
      }
    }
    allCallsCsv {
      edges {
        node {
          Lat
          Lng
        }
      }
    }
  }
`