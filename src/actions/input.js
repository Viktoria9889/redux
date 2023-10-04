import {
    INPUT_SET_DATA
} from './../reducers/types'

export const action = (data) => ({
    type: INPUT_SET_DATA,
    payload: {data}
})

// import {
//     PAGE_SET_TITLE
// } from './../reducers/types';

// // action creators
// const actionSetPage = (title) => ({
//     type: PAGE_SET_TITLE,
//     payload: { title }
// });


// const setTitle = (title, dispath) => {
//     const action = actionSetPage(title);
//     dispath(action);
// }

// export { setTitle };