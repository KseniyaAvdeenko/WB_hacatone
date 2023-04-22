import { baseAPI } from './api'
import {createRefresh} from 'react-auth-kit'
import jwtDecode from 'jwt-decode';

const refreshApi = createRefresh({
  
  interval: 9,   
  
refreshApiCallback: ({ authToken, authTokenExpireAt, refreshToken, refreshTokenExpiresAt, authUserState
  })  => {
    return baseAPI.refreshToken(refreshToken).then(({data}) =>{
      return {
        isSuccess: true, 
        newAuthToken: data.access,
        newAuthTokenExpireIn: jwtDecode(data.access).exp
      }
  }).catch((e)=>{
    console.error(e)
    return{
      isSuccess:false 
    }
  })
}}
)

export default refreshApi
