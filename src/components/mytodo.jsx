import React,{useState} from 'react'


const Mytodo = () => {

    const [userRegister, setuserRegister] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
 
    }
    );
  const handelInput = (e) =>{
      const name = e.target.name;
      const value = e.target.value; 
      setuserRegister({...userRegister, [name] : value})
  } 
  const [errors,setErrors] = useState({
    username:"",
    email:"",
    phone:"",
  }
  )
 

  const [records,setRecords] = useState([]);
  
  const clear = () =>{
     localStorage.clear()
     setRecords([]);
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
      let user = {...userRegister};
      if(user.username.trim() == ""){
        setErrors({...errors, ['username'] : 'Please enter your name'});
          return false;
      }else{
        setErrors({...errors, ['username'] : ''});
      }
      if(user.email.trim() == ""){     
        setErrors({...errors, ['email'] : 'Please enter email'});
        return false;
       }else{
        setErrors({...errors, ['email'] : ''});
      }
       if(user.phone.trim() == ""){
        setErrors({...errors, ['phone'] : 'Please enter phone no'});
        return false;
       }else{
        setErrors({...errors, ['phone'] : ''});
      }
    
    const newRegister={...userRegister, id: new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRegister]);
    localStorage.setItem("myrecords",JSON.stringify([...records, newRegister]));
     setuserRegister({username:"", email:"", phone:"", password:""})
 
  }

  
  const removeUser = (e, index) => {
    e.preventDefault();
    const newrecords = [...records];  
    newrecords.splice(index, 1);
    setRecords(newrecords)
};


 
  //prsntstate.find(c => c.id == entry.pmfbystate.id);
 
  
        return (
            <div className="container">
            <div className="mytodo">
                <div className="d-flex">
                  <div className="col-md-6">
                     <form action="" onSubmit={handleSubmit}>
                
                        <div className="form-floating mb-3">
                
                            <input type="text" className="form-control" 
                            autoComplete="off" 
                            id="floatingFname" 
                            placeholder="full name" 
                            name="username"
                            value={userRegister.username}
                            onChange={handelInput}                     
                            />
                             {
								errors.username? (
								<p className="error no-pos"> {errors.username}</p>
								):(null)
							  }
                            <label for="floatingFname">Full Name</label>
                        </div>
                       
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" autoComplete="off" 
                            placeholder="name@example.com" name="email"
                            value={userRegister.email}
                            onChange={handelInput}
                            />
                              {
								errors.email? (
								<p className="error no-pos"> {errors.email}</p>
								):(null)
							  }
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingPhone" autoComplete="off" 
                            placeholder="phonenumber"  name="phone"
                            value={userRegister.phone}
                            onChange={handelInput}
                            />
                             {
								errors.phone? (
								<p className="error no-pos"> {errors.phone}</p>
								):(null)
							  }
                           
                            <label for="floatingPhone">Phone No </label>
                        </div>                     
                        <button type="submit" className="btn btn-primary">Add</button>
                        <br /><br />
                        <button type="button" onClick={clear} className="btn btn-primary">Clear</button>
                        </form>
                  </div>

                  <div className="col-md-6">
                        {
                           records.map((currnetElm,key) => {
                               const{ id, username, email, phone, password} = currnetElm;
                               return(
                                   <div className="d-flex">
                                       <div className="featchData card" key={id}>
                                       <p className="">{username}</p>
                                       <p className="">{email}</p>
                                       <p className="">{phone}</p>
                                       <p className="">{password}</p>

                                       <div className="remove">
                                           <a href="javascript:void(0)" onClick={e=>removeUser(e,key)}>x</a>
                                           </div>
                                   </div>
                                   </div>
                               )
                           })
                       }
                   </div>

                </div>
                </div>
               </div>
        )


}
export default Mytodo