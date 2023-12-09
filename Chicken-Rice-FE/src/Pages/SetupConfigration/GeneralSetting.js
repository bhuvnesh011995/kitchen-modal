import React, { useCallback, useEffect, useState } from "react";
import MainPage from "../../Components/Common/MainPage";
import { set, useForm } from "react-hook-form";
import { deleteLogos, getGeneralSetting, updateGeneralSetting } from "../../utility/generalSetting.js/generalSetting";
import { toast } from "react-toastify";
import BASEURL from "../../Config/Config";
import DeleteModal from "../../Components/Common/DeleteModal";

export default function GeneralSetting() {
  const [data,setData] = useState({})
  const [updateData,setUpdateData] = useState(null)
  const [info,setInfo] = useState({})
  const [showDeleteModal,setShowDeleteModal]= useState(false)
  const [ready,setReady] = useState(false)
  useEffect(()=>{
    if(ready){
      getSystemData()
    }else setReady(true)
  },[ready])
  const {
    handleSubmit,
    register,
    reset,
    formState:{errors}
  } = useForm()

  const getSystemData = useCallback(async ()=>{
    try {
      let res = await getGeneralSetting()
      if(res.status===200){
        setData(res.data)
        reset(res.data)
      }else{
        console.log(res)
        toast.error('error occured while fetching')
      }
    } catch (error) {
      console.log(error)
      toast.error("error occured while fetching")
    }
  },[])
  const onSubmit = useCallback(async data =>{
    if(!data) return toast.info('give some info to update')
    let res = await updateGeneralSetting(data)
    if(res.status===200){
      toast.success("system updated successfully")
      setData(res.data)
      setUpdateData(null)
    }
  },[])

  const deleteFile = useCallback(async (field)=>{
    let res = await deleteLogos(field)
    if(res.status===204){
      setData(preVal=>({...preVal,[field]:null}))
      return {success:true,message:field+" deleted successfully"}
    }else{
      return {success:false,message:"error occured while deleting"}
    }
  },[])
  return (
    <MainPage title={"General Setting"}>
    {
      showDeleteModal && <DeleteModal
    info={info}
    setInfo={setInfo}
    show={showDeleteModal}
    setShow={setShowDeleteModal}
    callback={deleteFile}
     />
    }
    
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">System Settings</h5>
            </div>
            <div className="card-body">
              <form className="form-horizontal row" onSubmit={handleSubmit(()=>onSubmit(updateData))}>
                <div className="form-group col-md-6 mb-3">
                  <label>System Name</label>
                  <input
                    type="text"
                    {...register("systemName",{onChange:e=>{
                      setUpdateData(preVal=>({...preVal,systemName:e.target.value}))
                    }})}
                    className="form-control"
                    />
                </div>
                {/* <div className="form-group col-md-6 mb-3">
                  <label>System Timezone</label>
                  <select name="" id="" className="form-select">
                    <option value="0">(GMT+08:00) Perth</option>
                    <option value="1">(GMT+08:00) Singapore</option>
                    <option value="2">(GMT+08:00) Kuala Lumpur</option>
                    <option value="3">(GMT+01:00) Tirana</option>
                  </select>
                </div> */}
                {/* <div className="form-group col-md-4">
                  <label>System Logo - Black</label>
                  <div className="input-group" data-toggle="aizuploader" data-type="image">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-soft-secondary">Browse</div>
                    </div>
                    <div className="form-control file-amount">1 File selected</div>
                    <input type="hidden" name="types[]" value="system_logo_black" />
                    <input type="hidden" name="system_logo_black" value="69" className="selected-files" />
                  </div>
                  <div className="file-preview my-3 text-center">
                    <img width="105" className="rounded-10 border" src="assets/images/dummy-img.jpg" alt="image" />
                    <div className="remove">
                      <button className="btn btn-sm btn-primary p-1 rounded remove-attachment" type="button">
                        <i className="ri-close-fill"></i>
                      </button>
                    </div>
                  </div>
                </div> */}

                <div className="form-group col-md-6 mb-3">
                  <label>Title for Title Bar</label>
                  <input
                  {...register("title",{onChange:e=>{
                    setUpdateData(preVal=>({...preVal,title:e.target.value}))
                  }})}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label>Short Title</label>
                  <input
                  {...register("shortTitle",{onChange:e=>{
                    setUpdateData(preVal=>({...preVal,shortTitle:e.target.value}))
                  }})}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>System Logo</label>
                  <div className="custom-file">
                    <input
                    key={data.systemLogo}
                    onChange={e=>{
                      setUpdateData(preVal=>({...preVal,systemLogo:e.target.files[0]}))
                    }}
                      type="file"
                      className="form-control"
                    />
                  </div>
                  {data.systemLogo && <div className="file-preview my-3 text-center">
                    <img
                      width="105"
                      className="rounded-10 border"
                      src={BASEURL+"/files/"+data.systemLogo}
                      alt="image"
                    />
                    <div className="remove">
                      <button
                      onClick={()=>{
                        setShowDeleteModal(true)
                        setInfo({id:"systemLogo",message:"Do You Really want to delete System Logo",Header:"System Logo File"})
                      }}
                        className="btn btn-sm btn-primary p-1 rounded remove-attachment"
                        type="button"
                      >
                        <i className="bx bx-trash-alt"></i>
                      </button>
                    </div>
                  </div>}
                </div>
                <div className="form-group col-md-6">
                  <label>Logo (250 x 250)</label>
                  <div className="custom-file">
                    <input
                    key={data.logo}
                    onChange={(e)=>setUpdateData(preVal=>({...preVal,logo:e.target.files[0]}))}
                      type="file"
                      id="example-fileinput"
                      className="form-control"
                    />
                  </div>
                  {data.logo && 
                  <div className="file-preview my-3 text-center">
                    <img
                      width="105"
                      className="rounded-10 border"
                      src={BASEURL+"/files/"+data.logo}
                      alt="image"
                    />
                    <div className="remove">
                      <button
                      onClick={()=>{
                        setShowDeleteModal(true)
                        setInfo({id:"logo",message:"Do You Really want to delete logo",Header:"Logo File"})
                      }}
                        className="btn btn-sm btn-primary p-1 rounded remove-attachment"
                        type="button"
                      >
                        <i className="bx bx-trash-alt"></i>
                      </button>
                    </div>
                  </div>}
                </div>
                <div className="form-group col-md-6">
                  <label>Fevicon (250 x 250)</label>
                  <div className="custom-file">
                    <input
                    key={data.fevicon}
                      type="file"
                      onChange={e=>setUpdateData(preVal=>({...preVal,fevicon:e.target.files[0]}))}
                      className="form-control"
                    />
                  </div>
                  {data.fevicon && 
                  <div className="file-preview my-3 text-center">
                    <img
                      width="105"
                      className="rounded-10 border"
                      src={BASEURL+"/files/"+data.fevicon}
                      alt="image"
                    />
                    <div className="remove">
                      <button
                      onClick={()=>{
                        setShowDeleteModal(true)
                        setInfo({id:"fevicon",message:"Do You Really want to delete fevicon",Header:"Fevicon File"})
                      }}
                        className="btn btn-sm btn-primary p-1 rounded remove-attachment"
                        type="button"
                      >
                        <i className="bx bx-trash-alt"></i>
                      </button>
                    </div>
                  </div>}
                </div>

                <div className="col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
