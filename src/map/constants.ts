import { LatLng, Region } from 'react-native-maps'
import Hofinan from 'src/map/forests/Hofinan_Seri_Otrobanda.json'
import Skerpene from 'src/map/forests/Kolektivo_Skerpene_Food_Forest.json'
import Organic from 'src/map/forests/Organic_farms_Curacao.json'

export const BASE_TAG = 'MapScreen'

export enum MapCategory {
  All = 'All',
  Vendor = 'Vendor',
  FoodForest = 'Food Forest',
}

export const LOCALE_LATLNG: LatLng = {
  latitude: 12.1696,
  longitude: -68.99,
}

export const LOCALE_OFFSET: Omit<Region, 'longitude' | 'latitude'> = {
  latitudeDelta: 0.1922,
  longitudeDelta: 0.1421,
}

export const FOREST_OFFSET: Omit<Region, 'longitude' | 'latitude'> = {
  latitudeDelta: 0.0055,
  longitudeDelta: 0.0055,
}

export const LOCALE_REGION: Region = { ...LOCALE_LATLNG, ...LOCALE_OFFSET }

export const GMAP_STYLE = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
]

export const FoodForest = {
  Skerpene: { data: Skerpene, ingress: { latitude: 12.11283457, longitude: -68.87177425 } },
  Hofinan: { data: Hofinan, ingress: { latitude: 12.11056768, longitude: -68.93777658 } },
  Organic: { data: Organic, ingress: { latitude: 12.29392, longitude: -69.0973749 } },
}
