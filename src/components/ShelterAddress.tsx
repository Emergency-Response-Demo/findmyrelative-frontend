import React, { useState } from 'react'
import { Text } from '@patternfly/react-core'
import { getShelterData } from '../mock/mockShelterData'

interface ShelterAddressProps {
  id: string;
}

const ShelterAddress: React.FC<ShelterAddressProps> = ({ id }) => {
  const shelterName = getShelterData(id).map.shelter.map.name
  const [shelter, setShelter] = useState(shelterName)
  if (!process.env.REACT_APP_MOCK_API) {
    fetch(process.env.REACT_APP_BACKEND_URL + `/find/shelter/${id}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setShelter(jsonData.map.shelter.map.name)
      })
  }
  return <Text>{`Shelter: ${shelter}`}</Text>
}

export default ShelterAddress
