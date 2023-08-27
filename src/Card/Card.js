import React from 'react';
import {  FaCalendar, FaComments, FaLayerGroup, FaPaperclip } from "react-icons/fa";
const Card = ({users,fileHandler,quantity,attachmentNum}) => {
    const {name,pic,comment,date}=users;
    return (
     
      <div className='bg-white mt-5 mb-5 pt-2 pb-2 rounded mx-1 px-1 '>
      <div className='flex gap-36 items-center'>
      <div className='flex gap-2 items-center'>
          <img className='w-10 h-10 rounded-full' src={pic} alt="" />
          <h2>{name}</h2>
      </div>
      <div className='flex gap-2 items-center'>
          <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
          <h2>Istiaq ahmed</h2>
      </div>
      </div>
      <div className='flex gap-16 mt-4 '>
          <div className='flex gap-1 items-center text-slate-500'> <FaLayerGroup/><p className='flex-wrap text-slate-500'>Lorem ipsum dolor sit, amet consectetur </p></div>
          <div className='flex gap-1 items-center text-slate-500'>
              <FaCalendar/><p className='flex-wrap text-slate-500'>1/2</p>
          </div>

      </div>
      <div className='mt-5 flex gap-7 mx-auto justify-center'>
      <div>
          <img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt="" />
      </div>
      <div>
          <img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" alt="" />
      </div>
      <div className='w-7 h-7 flex items-center rounded-full bg-slate-500'>
          12+
      </div>
      <div className='flex items-center gap-2 text-slate-600'>
          <FaComments/><span>{comment}</span>
      </div>
     
      <form onClick={attachmentNum} action="">
      <input onChange={fileHandler} name='file' multiple type="file" id="my_file_input" style={{display:"none"}}/>
<label className='flex items-center text-slate-600 gap-2' htmlFor="my_file_input">
 <FaPaperclip/><span>{quantity}</span>
</label>
      </form>
     
      <div className='flex items-center gap-2 text-slate-600'>
          <FaCalendar/><span>{date}</span>
      </div>
      </div>
      </div>
    );
};

export default Card;