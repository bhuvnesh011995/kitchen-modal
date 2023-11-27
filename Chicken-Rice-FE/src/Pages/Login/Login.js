import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/Images/logo1.png"
import { login } from "../../utility/auth/auth";
import { authContext } from "../../Context/AuthContext";



let year = new Date().getFullYear()
export default function Login() {
  const navigate = useNavigate()
  const [showPass,setShowPass] = useState(false)
  const [error,setError] = useState(null)
  const [data,setData] = useState({username:"",password:""})

const {user,setUser,initialUser} = useContext(authContext)


  async function handleSubmit(e){
    e.preventDefault()
try {
  let response = await login(data)
  if(response.status === 200){
    console.log("hi",response)
    setUser({
      username:response.data.username,
      name:response.data.name || "unknown user",
      email:response.email || "",
      token:response.data.accessToken
    })
    navigate(-1 || "/")
  }else if(response.status===401) setError("wrong username or password")
  else if(response.status===404) setError("pass correct inputs")
  else if(response.status===500) setError("some internal error occured")
} catch (error) {
  console.log("hiooo",error)
}
    return
  }

  return (
    <>
    <div className="position-absolute start-0 end-0 start-0 bottom-0 w-100 h-100">
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 800'>
                <g fillOpacity='0.22'>
                    <circle style={{fill:"#e8a00e38"}} cx='400' cy='400' r='600'/>
                    <circle style={{fill:"#e8a00e54"}} cx='400' cy='400' r='500'/>
                    <circle style={{fill:"#ffa50054"}} cx='400' cy='400' r='300'/>
                    <circle style={{fill:"#ffa50054"}} cx='400' cy='400' r='200'/>
                    <circle style={{fill:"#ffa50054"}} cx='400' cy='400' r='100'/>
                </g>
            </svg>
        </div>
        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-lg-5">
                        <div className="card">

                            {/* <!-- Logo --> */}
                            <div className="card-header py-4 text-center bg-primary login-bg">
                              
                              <span><img src={logo} alt="logo" height="72"/></span>
                                
                            </div>

                            <div className="card-body p-4">
                                
                                <div className="text-center w-100 m-auto">
                                    <h4 className="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                                    <p className="text-muted mb-4">Enter your username and password to access admin panel.</p>
                                </div>
                                {error && <div className="d-flex justify-content-center"><span style={{color:"red"}}>{error}</span></div>}

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label for="emailaddress" className="form-label">Username</label>
                                        <input onChange={(e)=>{
                                          setError(null)
                                          setData(preVal=>({...preVal,username:e.target.value}))
                                          }} className="form-control" type="text" value={data.username}  placeholder="Enter your username"/>
                                    </div>

                                    <div className="mb-3">
                                        <a href="#" className="text-muted float-end"><small>Forgot your password?</small></a>
                                        <label for="password" className="form-label">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{
                                              setError(null)
                                              setData(preVal=>({...preVal,password:e.target.value}))
                                            }
                                              } type={showPass?"text":"password"} id="password" value={data.password} className="form-control" placeholder="Enter your password"/>
                                            <div className="input-group-text">
                                                <span onMouseEnter={() => setShowPass(true)}
                                                      onMouseLeave={() => setShowPass(false)} className="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3 mb-0 text-center">
                                        <button className="btn btn-primary" type="submit"> Log In </button>
                                    </div>

                                </form>
                            </div>
                             {/* <!-- end card-body --> */}
                        </div>
                        {/* <!-- end card --> */}

                    
                        {/* <!-- end row --> */}

                    </div>
                     {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end page --> */}

        <footer className="footer footer-alt">
            ©  {`${year} `} | Developed By Braincavesoft Private Limited
        </footer></>
  );
}
{/* <Wraper>
      <div classNameName="card-body m-3 pt-0">
                <img
                  src={logo}
                  alt="logo"
                  height="34"
                />
        <div classNameName="p-2">
          <form classNameName="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
            <div classNameName="mb-3">
              <label for="username" classNameName="form-label">
                Username
              </label>
              <input
                type="text"
                classNameName="form-control"
                placeholder="Enter username"
                value={userData.username}
                onChange={(e) =>{setSuccessMsg(null)
                  setUserData((preVal) => ({
                    ...preVal,
                    username: e.target.value,
                  }))}
                }
              />
            </div>
            <div classNameName="mb-3">
              <label classNameName="form-label">Password</label>
              <div classNameName="input-group auth-pass-inputgroup">
                <input
                  type="password"
                  classNameName="form-control"
                  placeholder="Enter password"
                  value={userData.password}
                  onChange={(e) =>{setSuccessMsg(null)
                    setUserData((preVal) => ({
                      ...preVal,
                      password: e.target.value,
                    }))}
                  }
                />
              </div>
            </div>
            <div className="mt-5 d-grid">
              <button
                className="btn btn-primary waves-effect waves-light"
                type="submit"
              >
                Log In
              </button>
              {successMsg}
            </div>

            <div className="mt-4 text-center">
              <a
                onClick={() => navigate("/reset")}
                style={{ cursor: "pointer" }}
                className="text-muted"
              >
                <i className="mdi mdi-lock me-1"></i> Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Wraper> */}