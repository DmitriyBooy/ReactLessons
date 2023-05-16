import PreLoader from '../../../assets/images/loader.svg'
import React from 'react'
import s from './Preloader.module.css'

const Preloader = () => {
  return <>
    <div className={s.preloader_wrapper}>
      <img
        src={PreLoader}
        className={s.preloader}
      />
    </div>
  </>
}

export default Preloader
