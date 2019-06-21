import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const newBand = {
        id: uuid(),
        name: action.text
      }

      // console.log('ADD_BAND state', state)

      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      // console.log('DELETE_BAND state', state)
      const stateCopy = [...state.bands]
      const filterBand = stateCopy.filter(band => {
        return band.id !== action.id
      })

      return { ...state, bands: filterBand }

    default:
      return state;
  }
};
