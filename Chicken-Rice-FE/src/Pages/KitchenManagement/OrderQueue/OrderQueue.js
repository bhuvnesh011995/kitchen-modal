import MainPage from "../../../Components/Common/MainPage";

export default function OrderQueue() {
  return (
    <MainPage title={"Order Queue"}>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="board">
                <div
                  class="tasks"
                  data-plugin="dragula"
                  data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'
                >
                  <h5 class="mt-0 task-header">New Order</h5>

                  <div id="task-list-one" class="task-list-items">
                    {/* <!-- Task Item --> */}
                    <div class="card mb-0">
                      <div class="card-body p-3">
                        <small class="float-end text-muted">
                          10 April 2024
                        </small>
                        <span class="badge bg-danger">#0032456</span>
                        <h5 class="mt-2 mb-2">
                          <label
                            for=""
                            style={{
                              color: "#800",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            Order Details
                          </label>{" "}
                          <br />
                          <ul class="kanban-order-list">
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Chilli
                                Chicken
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Fried
                                Rice
                              </a>
                            </li>
                          </ul>
                        </h5>
                        <p class="mb-3">
                          <label for="">Customer Note</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            style={{ height: "50px" }}
                            class="form-control"
                            placeholder="Add Extra cheese"
                          ></textarea>
                        </p>

                        <div class="dropdown float-end">
                          <a
                            href="#"
                            class="dropdown-toggle text-muted arrow-none"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical font-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-pencil me-1"></i>Edit
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-delete me-1"></i>Delete
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-plus-circle-outline me-1"></i>
                              Add People
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-exit-to-app me-1"></i>Leave
                            </a>
                          </div>
                        </div>

                        <p class="mb-0">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            alt="user-img"
                            class="avatar-xs rounded-circle me-1"
                          />
                          <span class="align-middle">Robert Carlile</span>
                        </p>
                      </div>
                      {/* <!-- end card-body --> */}
                    </div>
                    {/* <!-- Task Item End -->
        
                                              <!-- Task Item --> */}
                    <div class="card mb-0">
                      <div class="card-body p-3">
                        <small class="float-end text-muted">
                          10 April 2024
                        </small>
                        <span class="badge bg-danger">#123698</span>
                        <h5 class="mt-2 mb-2">
                          <label
                            for=""
                            style={{
                              color: "#800",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            Order Details
                          </label>{" "}
                          <br />
                          <ul class="kanban-order-list">
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Chilli
                                Chicken
                              </a>
                            </li>
                          </ul>
                        </h5>
                        <p class="mb-3">
                          <label for="">Customer Note</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            style={{ height: "50px" }}
                            class="form-control"
                            placeholder="Add Extra cheese"
                          ></textarea>
                        </p>

                        <div class="dropdown float-end">
                          <a
                            href="#"
                            class="dropdown-toggle text-muted arrow-none"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical font-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-pencil me-1"></i>Edit
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-delete me-1"></i>Delete
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-plus-circle-outline me-1"></i>
                              Add People
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-exit-to-app me-1"></i>Leave
                            </a>
                          </div>
                        </div>

                        <p class="mb-0">
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt="user-img"
                            class="avatar-xs rounded-circle me-1"
                          />
                          <span class="align-middle">Jhon Doe</span>
                        </p>
                      </div>
                      {/* / <!-- end card-body --> */}
                    </div>
                    {/* <!-- Task Item End --> */}
                  </div>
                  {/* /  <!-- end company-list-1--> */}
                </div>

                <div class="tasks">
                  <h5 class="mt-0 task-header text-uppercase"> Cooking</h5>

                  <div id="task-list-two" class="task-list-items">
                    {/* <!-- Task Item --> */}
                    <div class="card mb-0">
                      <div class="card-body p-3">
                        <small class="float-end text-muted">
                          10 April 2024
                        </small>
                        <span class="badge bg-warning">#987632</span>
                        <h5 class="mt-2 mb-2">
                          <label
                            for=""
                            style={{
                              color: "#800",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            Order Details
                          </label>{" "}
                          <br />
                          <ul class="kanban-order-list">
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Fried
                                Rice{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Hakka
                                Noodles
                              </a>
                            </li>
                          </ul>
                        </h5>
                        <p class="mb-3">
                          <label for="">Customer Note</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            style={{ height: "50px" }}
                            class="form-control"
                            placeholder="Add Extra cheese"
                          ></textarea>
                        </p>

                        <div class="dropdown float-end">
                          <a
                            href="#"
                            class="dropdown-toggle text-muted arrow-none"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical font-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-pencil me-1"></i>Edit
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-delete me-1"></i>Delete
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-plus-circle-outline me-1"></i>
                              Add People
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-exit-to-app me-1"></i>Leave
                            </a>
                          </div>
                        </div>

                        <p class="mb-0">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            alt="user-img"
                            class="avatar-xs rounded-circle me-1"
                          />
                          <span class="align-middle">Jason Willam</span>
                        </p>
                      </div>
                      {/* <!-- end card-body --> */}
                    </div>
                    {/* <!-- Task Item End --> */}
                  </div>
                  {/* <!-- end company-list-2--> */}
                </div>

                <div class="tasks">
                  <h5 class="mt-0 task-header text-uppercase">Ready</h5>
                  <div id="task-list-three" class="task-list-items">
                    {/* <!-- Task Item --> */}
                    <div class="card mb-0">
                      <div class="card-body p-3">
                        <small class="float-end text-muted">
                          10 April 2024
                        </small>
                        <span class="badge bg-success">#56332</span>
                        <h5 class="mt-2 mb-2">
                          <label
                            for=""
                            style={{
                              color: "#800",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            {" "}
                            Order Details
                          </label>{" "}
                          <br />
                          <ul class="kanban-order-list">
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Prawn
                                Manchurian
                              </a>
                            </li>
                          </ul>
                        </h5>
                        <p class="mb-3">
                          <label for="">Customer Note</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            style={{ height: "50px" }}
                            class="form-control"
                            placeholder="Add Extra cheese"
                          ></textarea>
                        </p>

                        <div class="dropdown float-end">
                          <a
                            href="#"
                            class="dropdown-toggle text-muted arrow-none"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical font-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-pencil me-1"></i>Edit
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-delete me-1"></i>Delete
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-plus-circle-outline me-1"></i>
                              Add People
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-exit-to-app me-1"></i>Leave
                            </a>
                          </div>
                        </div>

                        <p class="mb-0">
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            alt="user-img"
                            class="avatar-xs rounded-circle me-1"
                          />
                          <span class="align-middle">Joy Dutta</span>
                        </p>
                      </div>
                      {/* <!-- end card-body --> */}
                    </div>
                    {/* <!-- Task Item End -->
        
                                                    <!-- Task Item -->
                                                    <!-- Task Item --> */}
                    <div class="card mb-0">
                      <div class="card-body p-3">
                        <small class="float-end text-muted">
                          10 April 2024
                        </small>
                        <span class="badge bg-success">#9988321</span>
                        <h5 class="mt-2 mb-2">
                          <label
                            for=""
                            style={{
                              color: "#800",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            Order Details
                          </label>{" "}
                          <br />
                          <ul class="kanban-order-list">
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Chilli
                                Paneer
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Butter
                                Naan
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-body">
                                {" "}
                                <i class=" ri-checkbox-circle-line"></i> Chicken
                                Butter Masala
                              </a>
                            </li>
                          </ul>
                        </h5>
                        <p class="mb-3">
                          <label for="">Customer Note</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            style={{ height: "50px" }}
                            class="form-control"
                            placeholder="Add Extra cheese"
                          ></textarea>
                        </p>

                        <div class="dropdown float-end">
                          <a
                            href="#"
                            class="dropdown-toggle text-muted arrow-none"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical font-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-pencil me-1"></i>Edit
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-delete me-1"></i>Delete
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-plus-circle-outline me-1"></i>
                              Add People
                            </a>
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item">
                              <i class="mdi mdi-exit-to-app me-1"></i>Leave
                            </a>
                          </div>
                        </div>

                        <p class="mb-0">
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            alt="user-img"
                            class="avatar-xs rounded-circle me-1"
                          />
                          <span class="align-middle">Tomojit Bose</span>
                        </p>
                      </div>
                      {/* <!-- end card-body --> */}
                    </div>
                    {/* <!-- Task Item End -->
                                                    <!-- Task Item End --> */}
                  </div>
                  {/* <!-- end company-list-3--> */}
                </div>
              </div>
              {/* <!-- end .board--> */}
            </div>
          </div>
        </div>
        {/* <!-- end col --> */}
      </div>
    </MainPage>
  );
}
