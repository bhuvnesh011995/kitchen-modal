export default function CashOut() {
    return (
        <>
        <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Amount</label>
                            <div class="input-group">
                                <span class="input-group-text" id="">$</span>
                                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby=""/>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="">Reason</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="" style={{height: "70px"}}></textarea>
                        </div>
                    </div>
    
                 </div>
                 <button class="btn btn-primary me-2">Confirm $0.00</button>
                 <button class="btn btn-warning">Cancel</button>
        </>
    )
};
