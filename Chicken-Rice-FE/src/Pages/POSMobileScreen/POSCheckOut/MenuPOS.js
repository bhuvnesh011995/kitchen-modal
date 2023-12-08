import React from 'react';
// import './Menu.css'; // Make sure to adjust the import path if needed
import styles from './App.module.css';

const MenuComponent = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentStickyFooter}>
        <div class={styles.container}>
          <div class="text-left">
          <ul className={styles.menuList}>
              <li>
                <a
                  href="#"
                  className={`${styles.btn} ${styles.btnDefault} ${styles.filterButton}`}
                  data-filter="all"
                  style={{ minWidth: 'auto', padding: '6px' }}
                >
                  <span>All</span>
                </a>
              </li>
              <li>
                <a 
                                 className={`${styles.btn} ${styles.btnDefault} ${styles.filterButton}`}
                                 data-filter="chicken">
                  <img src="photo/nonveg1.jpeg" alt="" />
                  <span>Chicken</span>
                </a>
              </li>
              <li>
                <a href="#noodles" class="btn btn-default filter-button" data-filter="noodles">
                  <img src="img/pexels-photo-257816.jpeg" alt="" class="img-fluid" />
                  <span>Noodles</span>
                </a>
              </li>
              <li>
                <a href="#salad" class="btn btn-default filter-button" data-filter="Salad">
                  <img src="img/pexels-photo-2664216.jpeg" alt="" class="img-fluid" />
                  <span>Salad</span>
                </a>
              </li>
              <li>
                <a href="#" class="btn btn-default filter-button">
                  <img src="img/pexels-photo-257816.jpeg" alt="" class="img-fluid" />
                  <span>Noodles</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
