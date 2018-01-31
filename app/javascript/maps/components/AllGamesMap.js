import _ from "lodash";
import React from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const AllGamesMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

export default AllGamesMap;

// export default class AllGamesMap extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             courts: this.props.courts
//         }
//     }
//
//     render() {
//         return (
//             <GoogleMap
//               defaultZoom={8}
//               defaultCenter={{ lat: -34.397, lng: 150.644 }}
//             >
//               {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//             </GoogleMap>
//         );
//     }
// }
