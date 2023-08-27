
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';

function App() {
  const [user,setUser]=useState([]);
  const [file,setFile]=useState();
  const [quantity,setQuantity]=useState(25)

  const attachmentNum =()=>{
    setQuantity((prev) => prev + 1)
  }

  const fileHandler=(e)=>{
  
    const reader =new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
         
          setFile(reader?.result) 
         
          const files ={"file":quantity}

          fetch("http://localhost:5000/users",{
            method:"PUT",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(files)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        }



  }
 
  useEffect(()=>{

    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  return (
    
       <div className='flex hh gap-3'>
       <section>
       <div className='w-[450px] mx-auto border bg-slate-300 '>
          <div className='flex items-center justify-center bg-slate-300 gap-72 pt-2 sticky top-0'>
           <div className='flex items-center gap-2 '>
            <div style={{ "border-radius":" 10px 0px 0px 10px"}} className='w-5 h-5  bg-red-700 '></div> <span className='text-xl font-medium '> Incomplete</span>
            </div> 
            <div className='w-5 h-5 bg-slate-400 flex  justify-center rounded-md  text-white  '>
                <h3 className='pb-1'>0</h3>
            </div>
        </div>
       <div className='snap-y  scroll-p-0.5 scroll-smooth ss'>
       {
          user.map(users=><Card
            attachmentNum={attachmentNum}
            quantity={quantity}
            fileHandler={fileHandler}
          key={users.name}
          users={users}
          ></Card>)
        }
       </div>
      
      </div>
       </section>
       <section>
       <div className='w-[450px] mx-auto border bg-slate-300 '>
          <div className='flex items-center justify-center bg-slate-300 gap-72 pt-2 sticky top-0'>
           <div className='flex items-center gap-2 '>
            <div style={{ "border-radius":" 10px 0px 0px 10px"}} className='w-5 h-5  bg-blue-500 '></div> <span className='text-xl font-medium '> To Do</span>
            </div> 
            <div className='w-5 h-5 bg-slate-400 flex  justify-center rounded-md  text-white  '>
                <h3 className='pb-1'>0</h3>
            </div>
        </div>
       <div className='snap-y  scroll-p-0.5 scroll-smooth ss'>
       {
          user.map(users=><Card
            attachmentNum={attachmentNum}
          quantity={quantity}
            fileHandler={fileHandler}
          key={users.name}
          users={users}
          ></Card>)
        }
       </div>
      
      </div>
       </section>
       <section>
       <div className='w-[450px] mx-auto border bg-slate-300 '>
          <div className='flex items-center justify-center bg-slate-300 gap-72 pt-2 sticky top-0'>
           <div className='flex items-center gap-2 '>
            <div style={{ "border-radius":" 10px 0px 0px 10px"}} className='w-5 h-5  bg-yellow-300 '></div> <span className='text-xl font-medium '> Doing</span>
            </div> 
            <div className='w-5 h-5 bg-slate-400 flex  justify-center rounded-md  text-white  '>
                <h3 className='pb-1'>0</h3>
            </div>
        </div>
       <div className='snap-y  scroll-p-0.5 scroll-smooth ss'>
       {
          user.map(users=><Card
            attachmentNum={attachmentNum}
            quantity={quantity}
            fileHandler={fileHandler}
          key={users.name}
          users={users}
          ></Card>)
        }
       </div>
      
      </div>
       </section>
       <section>
       <div className='w-[450px] mx-auto border bg-slate-300 '>
          <div className='flex items-center justify-center bg-slate-300 gap-72 pt-2 sticky top-0'>
           <div className='flex items-center gap-2 '>
            {/* <div style={{ "border-radius":" 10px 0px 0px 10px"}} className='w-5 h-5  bg-yellow-300 '></div> */}
             <span className='text-xl font-medium '> Under Review</span>
            </div> 
            <div className='w-5 h-5 bg-slate-400 flex  justify-center rounded-md  text-white  '>
                <h3 className='pb-1'>0</h3>
            </div>
        </div>
       <div className='snap-y  scroll-p-0.5 scroll-smooth ss'>
       {
          user.map(users=><Card
            attachmentNum={attachmentNum}
            quantity={quantity}
            fileHandler={fileHandler}
          key={users.name}
          users={users}
          ></Card>)
        }
       </div>
      
      </div>
       </section>
       <section>
       <div className='w-[450px] mx-auto border bg-slate-300 '>
          <div className='flex items-center justify-center bg-slate-300 gap-72 pt-2 sticky top-0'>
           <div className='flex items-center gap-2 '>
            {/* <div style={{ "border-radius":" 10px 0px 0px 10px"}} className='w-5 h-5  bg-yellow-300 '></div>  */}
            <span className='text-xl font-medium '> Completed</span>
            </div> 
            <div className='w-5 h-5 bg-slate-400 flex  justify-center rounded-md  text-white  '>
                <h3 className='pb-1'>0</h3>
            </div>
        </div>
       <div className='snap-y  scroll-p-0.5 scroll-smooth ss'>
       {
          user.map(users=><Card
            attachmentNum={attachmentNum}
            quantity={quantity}
            fileHandler={fileHandler}
          key={users.name}
          users={users}
          ></Card>)
        }
       </div>
      
      </div>
       </section>
       </div>
    
    
  );
}

export default App;
