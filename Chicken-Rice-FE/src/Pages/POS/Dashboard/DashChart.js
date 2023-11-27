import dropdown from "../../../assets/Images/icons/dropdown.svg"
import product1 from "../../../assets/Images/product/product22.jpg"
import product2 from "../../../assets/Images/product/product23.jpg"
import product3 from "../../../assets/Images/product/product24.jpg"
import product4 from "../../../assets/Images/product/product6.jpg"
import Chart from "./Chart"

export default function DashChart() {
    return(
        <div class="row">
                    <div class="col-lg-7 col-sm-12 col-12 d-flex">
                        <div class="card flex-fill">
                            <div class="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h5 class="card-title mb-0">Purchase & Sales</h5>
                                <div class="graph-sets">
                                    
                                    <div class="dropdown">
                                        <button class="btn btn-white btn-sm dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            2023 <img src={dropdown} alt="img" class="ms-2"/>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <a href="#" class="dropdown-item">2023</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item">2022</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item">2021</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <Chart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-sm-12 col-12 d-flex">
                        <div class="card flex-fill">
                            <div class="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h4 class="card-title mb-0">Recently Added Products</h4>
                                <div class="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" aria-expanded="false"
                                        class="dropset">
                                        <i class="fa fa-ellipsis-v"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a href="productlist.html" class="dropdown-item">Product List</a>
                                        </li>
                                        <li>
                                            <a href="addproduct.html" class="dropdown-item">Product Add</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive dataview">
                                    <table class="table datatable ">
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Products</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td class="productimgname">
                                                    <a href="productlist.html" class="product-img">
                                                        <img src={product1} alt="product"/>
                                                    </a>
                                                    <a href="productlist.html">Apple Earpods</a>
                                                </td>
                                                <td>$891.2</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td class="productimgname">
                                                    <a href="productlist.html" class="product-img">
                                                        <img src={product2} alt="product"/>
                                                    </a>
                                                    <a href="productlist.html">iPhone 11</a>
                                                </td>
                                                <td>$668.51</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td class="productimgname">
                                                    <a href="productlist.html" class="product-img">
                                                        <img src={product3} alt="product"/>
                                                    </a>
                                                    <a href="productlist.html">samsung</a>
                                                </td>
                                                <td>$522.29</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td class="productimgname">
                                                    <a href="productlist.html" class="product-img">
                                                        <img src={product4} alt="product"/>
                                                    </a>
                                                    <a href="productlist.html">Macbook Pro</a>
                                                </td>
                                                <td>$291.01</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
};
