import React from 'react'
import { setFormat, setParas } from '../../features/paragraphSlice';
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch();
    const paras = useSelector((state) => state.paragraph.paras);
    const format = useSelector((state) => state.paragraph.format);
    
   

  return (
    <form className='flex '>
          <div className='flex  flex-col pr-2 py-2'>
              <label className='mb-2 text-paragraph font-medium'>Paragraphs</label>
              <input type="number" value={paras} onChange={(e) => dispatch(setParas(Number(e.target.value)))} className=' text-black px-2 ' />
          </div> 
          <div className='flex flex-col py-2'>
              <label className='mb-2 text-paragraph font-medium'>Include Html</label>
              <select name="" id="" value={format} onChange={(e) => dispatch(setFormat(e.target.value))} className='text-black rounded-sm px-2' >
                  <option value="text">Yes</option>
                  <option value="html">No</option>
              </select>
          </div>
    </form>
  )
}

export default Form