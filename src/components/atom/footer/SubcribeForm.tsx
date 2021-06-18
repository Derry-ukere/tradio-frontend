import React, { FormEvent, useState } from 'react';

const SubcribeForm = () => {

  const [email,setEmail] = useState('');

  const handleSubmit =  (e : FormEvent) => {    
    e.preventDefault();
    console.log(email);
    setEmail('');
 
  };



  return (
    <form onSubmit = {handleSubmit} className="form direct ">
      <div className="input-group input-group--rounded d-flex">
        <input type="email"  className="form-control direct" style = {{  color : 'blue'}}   placeholder="Enter your email" value = {email} onChange ={(e) => setEmail(e.target.value)} />
        <button className="btn btn-bg--primary rounded--full btn-hover--splash form-position" type="submit">
          <span className="btn__text">Join Now</span>
        </button>
      </div>
    </form>
  );
};

export const MemoizedSubcribeForm =React.memo(SubcribeForm);
