import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { chart_global_danger_Color_100 } from '@patternfly/react-tokens'
import './MapDisplay.css'

const LIGHT_RED = chart_global_danger_Color_100.value

interface MapDisplayProps {
  lat: string;
  lon: string;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ lat, lon }) => {
  useEffect(() => {
    const lngLat = [Number(lon), Number(lat)] as [number, number]
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || ''
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: lngLat,
      zoom: 10
    })
    new mapboxgl.Marker({ color: LIGHT_RED }).setLngLat(lngLat).addTo(map)
  }, [lat, lon])
  return <div id="map"></div>
}

export default MapDisplay
