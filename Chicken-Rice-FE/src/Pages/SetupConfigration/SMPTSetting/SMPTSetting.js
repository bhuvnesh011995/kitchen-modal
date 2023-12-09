import React, { useCallback, useEffect, useState } from 'react'
import MainPage from '../../../Components/Common/MainPage'
import useCustomEffect from '../../../utility/CustomHook/useCustomEffect'
import { getMailConfiguration, updateEmailConfig } from '../../../utility/mailConfig/mailConfig'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'


export default function SMPTSetting() {
  const {register,reset,handleSubmit,formState:{errors},watch} = useForm()
  const [updateData,setUpdateData] =useState({})
  const getMailConfig = useCallback(async()=>{
      try {
        const res = await getMailConfiguration()
        if(res.status ===200){
          reset(res.data)
        }else toast.error("error occured while fetching")
      } catch (error) {
        toast.success("some error occured")
      }
    },[])
  useCustomEffect(getMailConfig)

  const updataConfig = useCallback(async configData=>{
    try {
      if(!configData) return toast.info("change some info to update")
       let res = await updateEmailConfig(configData)
      if(res.status===200){
        toast.success("update succesfull")
       reset(res.data)
       setUpdateData(null)
      }else toast.error("error occured while updating")
    } catch (error) {
      toast.error("some error occured")
    }
  },[])



  return (
    <MainPage title={"SMT SETTING"}>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(async data=>updataConfig(updateData))}>
              <div className="form-group">
                <label className="col-form-label">Type</label>
                <select
                {...register("TYPE",{onChange:e=>setUpdateData(preVal=>({...preVal,TYPE:e.target.value}))})}
                  className="form-select mb-2 mb-md-0" id="mailTypeSelect">
                  <option value="smtp">SMTP</option>
                  <option value="mailgun">Mailgun</option>
                </select>
              </div>
              {watch("TYPE")!="mailgun" && <div className="mt-2">
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL HOST</label>
                  <input
                    {...register("HOST",{onChange:e=>setUpdateData(preVal=>({...preVal,HOST:e.target.value}))})}
                    type="text"
                    className="form-control"
                    placeholder="MAIL HOST"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL PORT</label>
                  <input
                   {...register("PORT",{onChange:e=>setUpdateData(preVal=>({...preVal,PORT:e.target.value}))})}
                    type="text"
                    className="form-control"
                    placeholder="MAIL PORT"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL USERNAME</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("USERNAME",{onChange:e=>setUpdateData(preVal=>({...preVal,USERNAME:e.target.value}))})}
                    placeholder="MAIL USERNAME"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL PASSWORD</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("PASSWORD",{onChange:e=>setUpdateData(preVal=>({...preVal,PASSWORD:e.target.value}))})}
                    placeholder="MAIL PASSWORD"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL ENCRYPTION</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("ENCRYPTION",{onChange:e=>setUpdateData(preVal=>({...preVal,ENCRYPTION:e.target.value}))})}
                    placeholder="MAIL ENCRYPTION"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL FROM ADDRESS</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("ADDRESS",{onChange:e=>setUpdateData(preVal=>({...preVal,ADDRESS:e.target.value}))})}
                    placeholder="MAIL FROM ADDRESS"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL FROM NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("NAME",{onChange:e=>setUpdateData(preVal=>({...preVal,NAME:e.target.value}))})}
                    placeholder="MAIL FROM NAME"
                  />
                </div>
              </div>}
            {watch("TYPE")==="mailgun" &&<div className="mt-2">
              <div className="form-group mb-2">
                <label className="col-from-label">MAILGUN DOMAIN</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("MAILGUN_DOMAIN",{onChange:e=>setUpdateData(preVal=>({...preVal,MAILGUN_DOMAIN:e.target.value}))})}
                  placeholder="MAILGUN DOMAIN"
                />
              </div>
              <div className="form-group">
                <label className="col-from-label">MAILGUN SECRET</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("MAILGUN_SECRET",{onChange:e=>setUpdateData(preVal=>({...preVal,MAILGUN_SECRET:e.target.value}))})}
                  placeholder="MAILGUN SECRET"
                />
              </div>
            </div>}
              <div className="form-group mb-0 mt-3 text-end">
                <button type="submit" className="btn btn-primary">Save Configuration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Test SMTP configuration</h5>
          </div>
          <div className="card-body">
            <form action="#" method="post">
              <div className="row">
                <div className="col">
                  <input type="email" className="form-control" name="email" value="superadmin@gmail.com" placeholder="Enter your email address" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">Send test email</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Instruction</h5>
          </div>
          <div className="card-body">
            <p className="text-danger">Please be careful when configuring SMTP. Incorrect configuration can result in errors during order placement, new registrations, and newsletter sending.</p>
            <h5 className="fw-bold" style={{ color: '#800000' }}>For Non-SSL</h5>
            <ul className="list-group">
              <li className="list-group-item text-dark">Select 'sendmail' for Mail Driver if you face any issues after configuring SMTP as the Mail Driver.</li>
              <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings.</li>
              <li className="list-group-item text-dark">Set Mail port as 587.</li>
              <li className="list-group-item text-dark">Set Mail Encryption as SSL if you face issues with TLS.</li>
            </ul>
            <br />
            <h5 className="fw-bold" style={{ color: '#800000' }}>For SSL</h5>
            <ul className="list-group mar-no">
              <li className="list-group-item text-dark">Select 'sendmail' for Mail Driver if you face any issues after configuring SMTP as the Mail Driver.</li>
              <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings.</li>
              <li className="list-group-item text-dark">Set Mail port as 465.</li>
              <li className="list-group-item text-dark">Set Mail Encryption as SSL.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </MainPage>
    )
}
