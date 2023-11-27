import React from 'react'
import FacebookLogin from '../SocialMediaLogin/FacebookLogin'
import MainPage from '../../../Components/Common/MainPage'
import FacebookPixelInstructions from './FacebookPixel'
import GoogleAnalyticsSettings from './GoogleAnalyticsSetting'
export default function AnalyticsTools() {
  return (
    <MainPage title={"Analytics Tools"}>
        <div className='row'>
    <FacebookLogin/>
    <FacebookPixelInstructions/>
    <GoogleAnalyticsSettings/>
    </div>
    </MainPage>
  )
}
