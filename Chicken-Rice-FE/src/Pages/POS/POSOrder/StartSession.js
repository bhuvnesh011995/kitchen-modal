import React, { useState } from 'react';
import Navbar from '../../../Components/Common/Navbar';
import StartSessions from '../Dashboard/StartSession';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function StartSession() {
  const navigate = useNavigate();
   const [activeTab, setActiveTab] = useState('home-b1');
  const [open,setOpen] =useState(true)

  const [showStartSessions, setShowStartSessions] = useState(false);

 

  useEffect(()=>{
     const timer = setTimeout(()=>{
      setShowStartSessions(true)
     },2000)

     return ()=> clearTimeout(timer);

  },[]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getTabStyle = (tabId) => {
    return {
      backgroundColor: activeTab === tabId ? '#f26722' : '',
      color: activeTab === tabId ? '#fff' : '',
    };
  };
    
  const tables = [
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 1' },
    { id: 1, imgSrc: 'photo/2p-table.png', seats: 4, tableNumber: 'Table No: 2' },
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 3' },
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 4' },
    { id: 1, imgSrc: 'photo/2p-table.png', seats: 4, tableNumber: 'Table No: 5' },
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 6' },
    { id: 1, imgSrc: 'photo/2p-table.png', seats: 4, tableNumber: 'Table No: 7' },
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 8' },
    { id: 1, imgSrc: 'photo/4p-circletable.png', seats: 4, tableNumber: 'Table No: 9' },
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 8' },
    { id: 1, imgSrc: 'photo/4p-table.png', seats: 4, tableNumber: 'Table No: 3' },

  ];

  const handleClick=()=>{
    navigate('/posmain')
  }


  return (
    <div className="page-wrapper pagehead" style={{ margin: 3, padding: '69px 0 0' }}>
      <Navbar></Navbar>
     {showStartSessions &&  <StartSessions show={open} setShow={setOpen}/>}
      <div className="content p-0">
        <ul className="nav nav-tabs nav-justified nav-bordered">
          <li className="nav-item">
            <a
              onClick={() => handleTabClick('home-b1')}
              data-bs-toggle="tab"
              aria-expanded="false"
              className="nav-link active"
              style={getTabStyle('home-b1')}
            >
              <i className="mdi mdi-home-variant d-md-none d-block"></i>
              <span className="d-none d-md-block">Main Floor</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => handleTabClick('profile-b1')}
              data-bs-toggle="tab"
              aria-expanded="true"
              className="nav-link"
              style={getTabStyle('profile-b1')}
            >
              <i className="mdi mdi-account-circle d-md-none d-block"></i>
              <span className="d-none d-md-block">Patio</span>
            </a>
          </li>
        </ul>
        <div className="tab-content p-5">
      <div className="tab-pane show active" id="home-b1">
        <div className="container">
          <div className="row">
          {tables.map((table) => (
                  <div className="col-md-2" key={table.id} onClick={handleClick}>
                    <a >
                      <div className="card table-card">
                        <div className="card-body">
                          <div className="table-img">
                            <img src={table.imgSrc} alt="table-img" style={{ width: '50%', height: '50%' }} />
                          </div>
                          <div className="seats">
                            <span>{table.seats}</span>
                          </div>
                          <div className="table-number">
                            <span style={{ fontSize: '14px', color: '#800' }} className="fw-bold">
                              {table.tableNumber}
                            </span>
                          </div>
                          <span className="badge t-badge rounded-pill order-count">1</span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            {/* Add more col-md-2 components for additional tables */}
          </div>
          {/* Add more rows for additional rows of tables */}
        </div>

        <style>
          {`                      
        .table-card {
            border: 2px solid #800;
            cursor: pointer;
        }

        .table-card .body {
            padding: 0.5rem !important;
        }

        .table-img {
            text-align: center;
        }

        .table-img img {
            width: 75px;
        }

        .seats {
            text-align: center;
        }

        .seats span {
            color: #FFF !important;
            background-color: #800 !important;
            font-size: 1.05rem !important;
            border-radius: 0.25rem !important;
            padding: 4px 8px 4px 8px;
        }

        .table-card .t-badge {
            display: flex;
            height: 25px;
            width: 25px;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -6px;
            right: -6px;
            background-color: #800;
        }
        .table-number{
            margin-top: 0.5rem;
            text-align: center;
        }
        `}
    </style>
    <style>
      {`       
        .nav-link {
            padding: 1rem 1rem;
        }
        .nav-tabs .nav-link {
            color: #800;
            font-weight: 600;
            background-color: #fff;
            border: 1px solid  #d8dadd;
        }
        `}
    </style>
    
    
      </div>
    </div>
        <div className="tab-pane" id="profile-b1">
          {/* ... Your tab content here ... */}
        </div>
      </div>
    </div>
  );
}
