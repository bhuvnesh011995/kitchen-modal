import React from 'react'
import MainPage from '../../../Components/Common/MainPage'
export default function FacebookPixelSetting() {
  return (
    <div class="col-md-6">
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0 h6">Facebook Pixel Setting</h5>
        </div>
        <div class="card-body">
            <form class="form-horizontal row" action="#">
             
                <div class="form-group col-md-12 mb-2">
                    <div class="d-flex align-items-center gap-3" >
                        <label>Facebook Pixel</label>
                        <div class="switch">
                            <input type="checkbox" id="switch0" data-switch="none"/>
                            <label for="switch0" data-on-label="" data-off-label=""></label>
                        </div>
                    </div>
                    
                  
                </div>
               
                <div class="form-group col-md-12 mb-2">
                    <label>Facebook Pixel ID</label>
                    <input type="text" name="site_name" class="form-control" placeholder="Facebook Pixel ID"/>
                </div>
               
                <div class="text-end">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
            
        </div>
    </div>
    </div>
  )
}
