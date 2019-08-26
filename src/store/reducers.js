import { combineReducers } from "redux";
const initialState = { showNews: '公告', showServer: '头像', showImges: 'active0', showIds: '0', showImg: 'active4', showId:'2' }
const show = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NEWS':
            return { ...state, showNews: action.show }
        case 'SHOW_SERVER':
            return { ...state, showServer: action.show }
        case 'SHOW_TAB':
            return { ...state, showTab: action.show }
        case 'SHOW_IMGES':
                return { ...state, showImges: `active${action.show}`, showIds: action.show }
        case 'SHOW_IMG':
                return { ...state, showImg: `active${action.show}`, showId: action.show }
        default:
            return state;
    }
}

export default combineReducers({
    show
})
