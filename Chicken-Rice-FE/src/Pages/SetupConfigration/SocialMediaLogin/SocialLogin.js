import React from 'react'
import GoogleLoginCredential from './GoogleLogin'
import MainPage from '../../../Components/Common/MainPage'
import FacebookLogin from './FacebookLogin'
import TwitterLogin from './TwitterLogin'
export default function SocialLogin() {
  return (
<MainPage title={"Social Media"}>                  
<div className='row'>
<GoogleLoginCredential/>
<FacebookLogin/>
<TwitterLogin/>
</div> 
</MainPage>
   )
}
