// import {
//   LOGIN_USER_SUCESS,
//   GET_USER_PROFILE_REQUEST,
//   REGISTER_USER_REQUEST,
//   LOGIN_REQUEST,
//   REGISTER_USER_SUCESS,
//   GET_USER_PROFILE_SUCESS,
//   LOGIN_USER_FAILURE,
//   REGISTER_USER_FAILURE,
//   GET_USER_PROFILE_FAILURE,
// } from "./ActionType";

// const initailState = {
//   user: null,
//   loading: false,
//   error: null,
//   jwt: null,
// };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case REGISTER_USER_REQUEST:
//     case GET_USER_PROFILE_REQUEST:
//       return { ...state, loading: true, error: null };

//     case LOGIN_USER_SUCESS:
//     case REGISTER_USER_SUCESS:
//       return { ...state, loading: false, error: null, jwt: ation.payload };

//       case GET_USER_PROFILE_SUCESS:
//         return{...state,loading:false,error:null,user:action.payload}

//         case LOGIN_USER_FAILURE:
//            case REGISTER_USER_FAILURE:
//             case GET_USER_PROFILE_FAILURE:
//             return{...state,loading:false,error:action.payload} 

//             default:
//                 return state;
//   }
// };
