

export default function MenuItems({items}) {

    return(
        <div class="row">
            {items.map((item,i)=><div key={i} class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter nonveg">
                                            <div class="card d-block">
                                                <img class="card-img-top img-fluid" src={item.logo} alt="" style={{width: "100%", height: "200px", objectFit: "cover"}}/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.type}</h5>
                                                    <p class="card-text">{item.dec}</p>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <a href="#" class="card-link text-custom" style={{color: "#800"}}>{item.price}</a>
                                                        </div>
                                                        <div class="col-md-6 text-end">
                                                            <a href="#" class="card-link text-custom">{item.remaining}</a>
                                                        </div>
                                                    </div>
                                                </div>                                              
                                                
                                            </div>
                                        </div>)}
        </div>
    )
};
