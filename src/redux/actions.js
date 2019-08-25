const SHOW_NEWS = 'SHOW_NEWS';
const SHOW_SERVER = 'SHOW_SERVER';
const SHOW_TAB = 'SHOW_TAB';
const SHOW_IMGES = 'SHOW_IMGES';
const SHOW_IMG = 'SHOW_IMG';

export const showNews = (text) => {
    return{
        type: SHOW_NEWS,
        show: text
    }
}
export const showServer = (text) => {
    return{
        type: SHOW_SERVER,
        show: text
    }
}
export const showTab = (text) => {
    return {
        type:SHOW_TAB,
        show:text
    }
}
export const showImges = (text) => {
    return {
        type:SHOW_IMGES,
        show: text % 4
    }
}
export const showImg = (text) => {
    return {
        type:SHOW_IMG,
        show: text
    }
}
