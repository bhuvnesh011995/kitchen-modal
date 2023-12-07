import { useCallback, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/Images/logo1.png";
import logo2 from "../../assets/Images/logo2.png";
import { authContext } from "../../Context/AuthContext";
import { logout } from "../../utility/auth/auth";
import { getAllLanguage } from "../../utility/language/language";
import { toast } from "react-toastify";
import { useSetting } from "../../Context/SettingContext";

export default function Navbar({ inactive, setInactive, show = true }) {
  const { getLanguageData } = useSetting();
  const [ready, setReady] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setSelectedLang] = useState(null);
  useEffect(() => {
    if (ready) getLanguages();
    else setReady(true);
  }, [ready]);

  const getLanguages = useCallback(async () => {
    try {
      let res = await getAllLanguage();
      if (res.status === 200) {
        setLanguages(res.data);
        res.data?.length && getLanguageData(res.data[0]?._id);
        res.data?.length && setSelectedLang(res.data[0]);
      } else {
        console.log(res);
        toast.error("error while fetching languages");
      }
    } catch (error) {
      console.log(error);
      toast.error("error while fetching languages");
    }
  }, [getLanguageData]);
  useEffect(() => {
    if (inactive) {
      document.body.classList.add("sidebar-enable", "vertical-collpsed");
    } else {
      document.body.classList.remove("sidebar-enable", "vertical-collpsed");
    }
  }, [inactive]);

  const navigate = useNavigate();

  const { user, setUser, initialUser } = useContext(authContext);

  // async function logoutUser(){
  //     let res = await logout()

  //     if(res.status ===200){
  //         setUser(initialUser)
  //         navigate("/login")
  //     }
  // }

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}
          <div onClick={() => navigate("/")} className="navbar-brand-box">
            <a className="logo logo-dark">
              <span className="logo-sm">
                <img src={logo1} alt="" height="40" />
              </span>
              <span className="logo-lg">
                <img src={logo2} alt="" height="70" />
              </span>
            </a>
          </div>

          {show ? (
            <button
              onClick={() => setInactive(!inactive)}
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
          ) : null}

          <form class="app-search d-none d-lg-block">
            <div class="position-relative">
              <input type="text" class="form-control" placeholder="Search..." />
              <span class="bx bx-search-alt"></span>
            </div>
          </form>
        </div>

        <div className="d-flex">
          <div class="dropdown d-inline-block">
            <button
              type="button"
              class="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {selectedLang && <span>{selectedLang.name}</span>}
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              {languages.map((ele) => (
                <a
                  key={ele._id}
                  onClick={() => {
                    setSelectedLang(ele);
                    getLanguageData(ele._id);
                  }}
                  class="dropdown-item notify-item language"
                >
                  <span>{ele.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div class="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              class="btn header-item noti-icon waves-effect"
              data-bs-toggle="fullscreen"
            >
              <i class="bx bx-fullscreen"></i>
            </button>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                {user.name || "admin"}
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* <!-- item--> */}
              <a className="dropdown-item" href="#">
                <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                <span key="t-profile">Profile</span>
              </a>

              <div className="dropdown-divider"></div>
              <a
                onClick={() => {
                  setUser(initialUser);
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="dropdown-item text-danger"
                href="#"
              >
                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                <span key="t-logout">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
