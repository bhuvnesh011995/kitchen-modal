import { Link } from "react-router-dom";
export default function MainPage({ title, children, module }) {
  let year = new Date().getFullYear();
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">{title}</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li>
                      <Link to={"/"}> Dashboard</Link>{" "}
                    </li>
                    <li className="breadcrumb-item">
                      {" "}
                      <a>{module}</a>{" "}
                    </li>
                    <li className="breadcrumb-item active">{title} </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
      <footer
        className="footer fixed"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">{year} © Braincave HRMS.</div>
            <div className="col-sm-5">
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by
                <a href="https://braincavesoft.com/" target="_blank">
                  Braincave Software Private Limited
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
