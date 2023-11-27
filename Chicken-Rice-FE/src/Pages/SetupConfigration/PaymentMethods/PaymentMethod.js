import React from 'react'
import MainPage from '../../../Components/Common/MainPage'
import PaypalCredentials from './PaypalCredentials'
import StripeCredentials from './StripeCredentials'
import BkashCredentials from './BkashCredentials'
import NagadCredential from './NagadCredential'
import SslcommerzCredential from './SslcommerzCredential'
import RazorPayCredential from './RazorPayCredential'
import InstamojoCredential from './InstamojoCredential'
import PayStackCredential from './PayStackCredential'
import PayHereCredential from './PayHereCredential'
import VoguePayCredential from './VoguePayCredential'
import IyzicoCredential from './IyzicoCredential'
import ProxyPayCredential from './ProxyPayCredential'
export default function PaymentMethod() {
  return (
  <MainPage title={"Payment Methods"}>
        <div className="row">
        <PaypalCredentials/>        
        <StripeCredentials/> 
        <BkashCredentials/> 
        <NagadCredential/>
        <SslcommerzCredential/>
        <RazorPayCredential/>
        <InstamojoCredential/>
        <PayStackCredential/>
        <PayHereCredential/>
        <NagadCredential/>
        <VoguePayCredential/>
        <IyzicoCredential/>
        <ProxyPayCredential/>
        </div>
  </MainPage>
  )
}
