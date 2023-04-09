import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchText } from '../../features/paragraphSlice';

const Text = () => {
    const dispatch = useDispatch();
    const paras = useSelector((state) => state.paragraph.paras);
    const format = useSelector((state) => state.paragraph.format);

    const text = useSelector((state) => state.paragraph.items);

    useEffect(() => {
        dispatch(fetchText({ paras: paras, format: format }))
    },[dispatch, paras, format]);
  return (
      <div className='py-4'>
          <p className=' text-paragraph font-normal'>{ text }</p>
      </div>
  )
}

export default Text