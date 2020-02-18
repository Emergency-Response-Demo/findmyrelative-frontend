import React, { useState } from 'react'
import { Text } from '@patternfly/react-core'

const addressApi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'

interface TextAddressProps {
  lat: string;
  lon: string;
}

const TextAddress: React.FC<TextAddressProps> = ({ lon, lat }) => {
  const [address, setAddress] = useState('')
  const fetchURL =
    addressApi +
    lon +
    ',' +
    lat +
    '.json?' +
    new URLSearchParams({
      /* eslint @typescript-eslint/camelcase: ["error", {allow: ["access_token"]}] */
      access_token: process.env.REACT_APP_MAPBOX_TOKEN as string
    })
  fetch(fetchURL)
    .then((response) => response.json())
    .then((jsonData) => setAddress(jsonData.features[0].place_name))
  return <Text>{address}</Text>
}

export default TextAddress
