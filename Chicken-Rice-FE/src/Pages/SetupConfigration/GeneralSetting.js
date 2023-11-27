import React from 'react';
import MainPage from '../../Components/Common/MainPage';

export default function GeneralSetting() {
      return (
    <MainPage title={"General Setting"}>   
    <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Admin Panel Settings</h5>
            </div>
            <div className="card-body">
              <form className="form-horizontal row" action="#">
                <div className="form-group col-md-6 mb-3">
                  <label>System Name</label>
                  <input type="text" name="site_name" className="form-control" value="Enter System Name" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label>System Timezone</label>
                  <select name="" id="" className="form-select">
                    <option value="0">(GMT+08:00) Perth</option>
                    <option value="1">(GMT+08:00) Singapore</option>
                    <option value="2">(GMT+08:00) Kuala Lumpur</option>
                    <option value="3">(GMT+01:00) Tirana</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label>System Logo - White</label>
                  <div className="custom-file">
                    <input type="file" id="example-fileinput" className="form-control" />
                  </div>
                  <div className="file-preview my-3 text-center">
                    <img width="105" className="rounded-10 border" src="assets/images/dummy-img.jpg" alt="image" />
                    <div className="remove">
                      <button className="btn btn-sm btn-primary p-1 rounded remove-attachment" type="button">
                        <i className="ri-close-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-4">
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
                 
                </div>
                <div className='col-md-12'>
                         <button type="submit" class="btn btn-primary">Update</button>
                                        
                      </div>
              </form>
            </div>
          </div>
        </div>
      
      </div>
      <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Website Settings</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal row" action="#">
                            {/* System Name */}
                            <div className="form-group col-md-6 mb-3">
                                <label>Title for Title Bar</label>
                                <input type="text" name="site_name" className="form-control" value="Chicken Rice" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label>Short Title</label>
                                <input type="text" name="site_name" className="form-control" value="Restaurant" />
                            </div>

                            {/* System Logo - White */}
                            <div className="form-group col-md-6">
                                <label>Logo (250 x 250)</label>
                                <div className="custom-file">
                                    <input type="file" id="example-fileinput" className="form-control" />
                                </div>
                                <div className="file-preview my-3 text-center">
                                    <img width="105" className="rounded-10 border" src="assets/images/dummy-img.jpg" alt="image" />
                                    <div className="remove">
                                        <button className="btn btn-sm btn-primary p-1 rounded remove-attachment" type="button">
                                            <i className="ri-close-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* System Logo - Black */}
                            <div className="form-group col-md-6">
                                <label>Favicon (16 x 16)</label>
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
                            </div>
                            <div className='col-md-12'>
                                            <button type="submit" class="btn btn-primary">Update</button>
                                        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </MainPage>
  );
};
