import { LatLng, Region } from 'react-native-maps'

export const BASE_TAG = 'MapScreen'

export const LOCALE_LATLNG: LatLng = {
  latitude: 12.1224,
  longitude: -68.8824,
}

export const LOCALE_OFFSET: Omit<Region, 'longitude' | 'latitude'> = {
  latitudeDelta: 0.1922,
  longitudeDelta: 0.1421,
}

export const LOCALE_REGION: Region = { ...LOCALE_LATLNG, ...LOCALE_OFFSET }
