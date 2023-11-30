import React from 'react'

export default function QueueDisplay() {
  return (
    <div className="main-content" style={{ marginLeft: 0, backgroundColor: '#800' }}>
    <div className="page-content p-0">
      <div className="container-fluid h-100">
        <div className="row justify-content-center" style={{ height: '94.2vh' }}>
          <div className="col-md-4">
            <h2 className="mb-0" style={{ backgroundColor: '#f4c402', color: '#fff', padding: '0.5rem' }}>Total Serving</h2>
            <h1 style={{ fontSize: '5.5rem', color: '#fff' }}>2704</h1>
          </div>
          <div className="col-md-4">
            <div className="inner-content">
              <h2 className="mb-0 ps-0" style={{ color: '#fff', padding: '0.5rem' }}>Now Preparing</h2>
              <h2 style={{ color: '#fff' }}>2704</h2>
              <h2 style={{ color: '#fff' }}>2704</h2>
              <h2 style={{ color: '#fff' }}>2704</h2>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <img src="/photo/favicon.png" style={{ height: '50%' }} alt="Logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 border-top py-2">
            <h5 className="mb-0 text-center" style={{ color: '#fff' }}>Welcome To Mr.Chiken Rice</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
