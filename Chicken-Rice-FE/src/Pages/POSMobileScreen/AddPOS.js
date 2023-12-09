

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function SpiceLevels() {
  const [showModal, setShowModal] = useState(true);

  const [spiceLevels, setSpiceLevels] = useState({
    tum: false,
    noSpicy: false,
    lessSpicy: false,
    normalSpicy: false,
    moreSpicy: false,
  });

  const handleCheckboxChange = (level) => {
    setSpiceLevels((prevLevels) => ({
      ...prevLevels,
      [level]: !prevLevels[level],
    }));
  };



  return (
    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
       <Modal.Header closeButton> 
  <span style={{ width: '57px', height: '57px', objectFit: 'cover', marginRight: '10px' }}>
<img src='photo/nonveg1.jpeg' alt="Food" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25%' }} />
</span ><span style={{fontWeight:'bold',fontSize:'23px'}}>  Vegetarian Basil Rice       </span>  
  </Modal.Header>
  <Modal.Header  > 
    <div style={{color:'#000000',fontWeight:'470'}}>              
  our Vegetarian stir-fried basil rice ia a must try for fans of the cuisines. made width frant   
  </div>
  </Modal.Header>

      <Modal.Body>
   
        {/* ... your modal body content ... */}
        <div>
          <div>
            Spicy Level Tum (Pick 1)
          </div>
          <input
            type="checkbox"
            id="tum"
            checked={spiceLevels.tum}
            onChange={() => handleCheckboxChange('tum')}
          />
          <label htmlFor="tum">Tum</label>
        </div>

        {/* ... (other spice levels checkboxes) ... */}
      </Modal.Body>

      <Modal.Footer>
                           
        <Button variant="danger" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
  <span>Add To Cart</span>
  <span>200.0</span>
</Button>
      </Modal.Footer>
    </Modal>
  );
}
