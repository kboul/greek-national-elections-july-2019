const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'win_party',
      stops: [
        [0, '#dae0e5'],
        [2, '#1A5CC6'],
        [4, '#EE818F']
      ]
    },
    'fill-outline-color': 'white'
  }
};

const mapSettings = {
  dragPan: false,
  scrollZoom: false,
  doubleClickZoom: false
};

const initialMapWidth = '100vw';
const initialMapHeight = '84.6vh';

const initialViewState = {
  latitude: 38.5,
  longitude: 23.7,
  zoom: 6
};

const mapStyle = 'mapbox://styles/mapbox/streets-v11';

export {
  dataLayer,
  mapSettings,
  mapStyle,
  initialViewState,
  initialMapHeight,
  initialMapWidth
};
