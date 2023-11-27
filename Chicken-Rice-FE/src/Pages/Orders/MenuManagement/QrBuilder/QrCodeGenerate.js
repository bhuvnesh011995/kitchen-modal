import React, { useState,useRef } from 'react';
import MainPage from '../../../../Components/Common/MainPage';
import 'react-input-range/lib/css/index.css';
import Slider from '@mui/material/Slider';
import QRCode from 'qrcode.react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';  // Add this line
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
const QrCodeGenerator = () => {
  const location = useLocation();
  const rowData = location.state?.rowData || {};
  console.log("Row Data:", rowData);
  const [color, setColor] = useState('#000'); 
  const [size, setSize] = useState(); 
  const [height, setHeight] = useState(); 
  const [width, setWidth] = useState(); 
  const [style, setStyle] = useState('square');
  const [eyeStyle, setEyeStyle] = useState('square');
  const [type, setType] = useState('default');
  const [whiteSpace, setWhiteSpace] = useState();
  const qrCodeRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(rowData.selectedImage);
  const [selectedFile, setSelectedFile] = useState(null);
  const [vertical, setVertical] = useState();
  const [horizatal, setHorizatal] = useState();


  const [qrCodeValue, setQrCodeValue] = useState();
 
  
  console.log('qt',qrCodeValue)
  const fileInputRef = useRef(null);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  switch (name) {
    case 'color':
      setColor(value);
      break;
    // ... other cases
    default:
      break;
  }
};

const handleCancelImage = () => {
  setSelectedImage(null);
  setSelectedFile(null);

  if (fileInputRef.current) {
    fileInputRef.current.value = null;
  }
};

useEffect(() => {
  const qrCodeData = JSON.stringify(rowData);
  const Url = 'www.go.com';
  const finalUrl = `${Url}?data=${qrCodeData}`;
  console.log("ff",finalUrl)
  setQrCodeValue(finalUrl);

}, [rowData]);


  const handleSizeChange = (event, newSize) => {
    const adjustedSize = 100 + newSize;
    setSize(adjustedSize);
  };

  const handleImageHeight = (event, newSize) => {
    const adjustedheight = 20 + newSize;
    setHeight(adjustedheight);
  };

  const handleVertical = (event, newSize) => {
    const adjustedVertical =  newSize;
    setVertical(adjustedVertical);
  };
  const handleHorizatal = (event, newSize) => {
    const adjustedVertical =  newSize;
    setHorizatal(adjustedVertical);
  };

  const handleImageWidth = (event, newSize) => {
    const adjustedWidth = 25 + newSize;
    setWidth(adjustedWidth);
  };


  const handleWhiteSpaceChange = (event, newWhiteSpace) => {
    setWhiteSpace(newWhiteSpace);
  };
  useEffect(() => {
  }, [qrCodeRef.current]);
  

  const downloadQR = () => {
    const canvas = document.getElementById("yourCanvasId");
    console.log(canvas)
    if (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "your_qr_code.png";
        document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const downloadImagesAsZip = async () => {
    const zip = new JSZip();
  
    const carouselItems = document.querySelectorAll('#imageContainer .carousel-item');
    console.log('Carousel Items:', carouselItems);
      const canvasPromises = Array.from(carouselItems).map(async (item, index) => {
      const canvas = await html2canvas(item);
      zip.file(`image${index + 1}.png`, canvas.toDataURL('image/png').split(';base64,')[1], { base64: true });
    });
      await Promise.all(canvasPromises);
      zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'Images.zip');
    });
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <MainPage title="Qr Builder">
      <div className="row">
        <div className="col-lg-4 m-0">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title m-0">QR Code Generator</h4>
            </div>
            <div className="card-body">

              <form id="qrGenerator" method="POST">
              <div className="form-group mb-0">
</div>
                <div  className="form-group mb-0 " >

                  <label htmlFor="color">Color</label>
                 <input
  type="text"
  className="form-control form-control-sm"
  name="color"
  value={color}
  autoComplete="off"
  onChange={handleInputChange}
/>
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="size">Size</label>
                  <Slider
          aria-label="QR Code Size"
          value={size}
          step={1}
              defaultValue={30}
          valueLabelDisplay="auto"
          onChange={handleSizeChange}
        />
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="whiteSpace">White Space</label>
                  <Slider
  aria-label="QR Code WhiteSpace"
  value={whiteSpace}
  step={1}  
  defaultValue={1}
  valueLabelDisplay="auto"
  onChange={handleWhiteSpaceChange}
/>
                </div>
              
                <div className="form-group mb-0">
                  <label htmlFor="eyeStyle">Eye Style</label>
                  <select
                    name="eyeStyle"
                    className="form-select form-select-sm"
                    value={eyeStyle}
                    onChange={handleInputChange}
                  >
                    <option value="square">Square</option>
                    <option value="circle">Circle</option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="type">image</label>
                  <input type="file"className="form-control" placeholder="" ref={fileInputRef} onChange={handleImageChange}

/>  
                </div>
                {selectedImage && (
        <div className='m-3'>
          <img src={selectedImage}  alt="Avatar" width="50" height="50"  />
          <span style={{marginLeft:'10%'}}>  
          <button className="btn btn-danger" onClick={handleCancelImage}>Cancel</button>
          </span>
        </div>
      )}
      <div className="form-group mb-0">
                  <label htmlFor="whiteSpace">Vertical image</label>
                <Slider
  valueLabelDisplay="auto"
  aria-label="Temperature"
    step={1}  
              onChange={handleVertical}
/>
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="whiteSpace">horizatal image</label>
                <Slider
  valueLabelDisplay="auto"
  aria-label="Temperature"
    step={1}  
              onChange={handleHorizatal}
/>
                </div>
                  <div className="form-group mb-0">
                  <label htmlFor="whiteSpace">Image Height</label>
                <Slider
  valueLabelDisplay="auto"
  aria-label="Temperature"
    step={1}  
              onChange={handleImageHeight}
/>
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="whiteSpace">Image width</label>
                <Slider
  valueLabelDisplay="auto"
  aria-label="Temperature"
    step={1}  
              onChange={handleImageWidth}
/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-white">
            <div className="card-header" style={{ borderBottom: '1px solid #ebecec' }}>
              <h4 className="card-title m-0" style={{ color: '#575962' }}>Preview</h4>
            </div>
            <div className="card-body text-center py-3">
              <div className=" p-3 border-rounded d-inline-block border" style={{ backgroundColor: '#f8f9fa'}}>
              <QRCode
             id="yourCanvasId"
                  value={qrCodeValue}
                  fgColor={color}
                  size={size}
                  eyeRadius={[
                    5,  // top/left eye
                    10, // top/right eye
                    5,  // bottom/left eye
                  ]}
                                                      includeMargin={whiteSpace}

                                    imageSettings={{
                                      src: selectedImage,
                                      x: vertical,
   
                    y: horizatal,
                    height:height,
                    width: width,
                    excavate: false,
                  }}

                />  
              </div>

            </div>
            <div className="card-footer text-center bg-white m-2 " style={{ borderTop: '1px solid #ebecec' }}>
            <a   className="btn btn-primary" onClick={downloadQR}> Download QR </a>            </div>
          </div>
          <span id="text-size" style={{ visibility: 'hidden' }}></span>
        </div>
        <div className="col-lg-4">
        <div className="card bg-white">
          <div className="card-header ">
            <h5 className="card-title d-flex justify-content-between ">
              <span>Included QR Code Banners (PSDs)</span>
              <a className="btn btn-sm btn-primary" href="#">Download</a>
            </h5>
          </div>
          <div className="card-body">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
              <div className="carousel-inner" role="listbox" id="imageContainer">
              <div id="imageContainer" class="carousel-item active">
                <img className="d-block img-fluid" src="/photo/image3.png" alt="Second slide" />
                <div className="qr-code-overlay" style={overlayStyle}>
        <QRCode
          id="qrCodeOverlay1"
          value={qrCodeValue}
          fgColor={color}
          size={size}
          includeMargin={whiteSpace}
          imageSettings={{
            src: selectedImage,
            x: vertical,
            y: undefined,
            height: height,
            width: width,
            excavate: false,
          }}
        />
      </div>
                </div>
                <div id="imageContainer" class="carousel-item active">
                <img className="d-block img-fluid" src="/photo/image1.png" alt="Second slide" />
                <div className="qr-code-overlay" style={overlayStyle}>
        <QRCode
          id="qrCodeOverlay1"
          value={qrCodeValue}
          fgColor={color}
          size={size}
          includeMargin={whiteSpace}
          imageSettings={{
            src: selectedImage,
            x: vertical,
            y: undefined,
            height: height,
            width: width,
            excavate: false,
          }}
        />
      </div>
                </div>
                <div id="imageContainer" class="carousel-item active">
                <img className="d-block img-fluid" src="/photo/image2.png" alt="Second slide" />   
                <div className="qr-code-overlay" style={overlayStyle}>
        <QRCode
          id="qrCodeOverlay1"
          value={qrCodeValue}
          fgColor={color}
          size={size}
          includeMargin={whiteSpace}
          imageSettings={{
            src: selectedImage,
            x: vertical,
            y: undefined,
            height: height,
            width: width,
            excavate: false,
          }}
        />
      </div> 
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" ariahidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <div className="card-footer text-center bg-white m-2">
            <a className="btn btn-primary mt-2"  onClick={downloadImagesAsZip}>
                        Download PSD
                      </a>
</div>
</div>

           </div>
           </div>
      </div>

    </MainPage>
  );
};

export default QrCodeGenerator;
