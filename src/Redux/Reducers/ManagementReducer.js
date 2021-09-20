import Data from '../../Data/Songs.js'

const stateDefautl = {
    playList: Data,
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    currentVolume: 50 / 100,
    isMute: false,
}
const DataManagementReducer = (state = stateDefautl, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_INDEX': {
            state.currentIndex = action.newIndex
            return { ...state }
        }
        default: return { ...state }
    }
}
export default DataManagementReducer;