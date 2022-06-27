
// import React,{useState,useEffect} from 'react'
// import {Link,useHistory} from 'react-router-dom'
// import M from 'materialize-css'
// const SignIn  = ()=>{
//     const history = useHistory()
//     const [name,setName] = useState("")
//     const [password,setPasword] = useState("")
//     const [email,setEmail] = useState("")
//     const [image,setImage] = useState("")
//     const [url,setUrl] = useState(undefined)
//     useEffect(()=>{
//         if(url){
//             uploadFields()
//         }
//     },[url])
//     const uploadPic = ()=>{
//         const data = new FormData()
//         data.append("file",image)
//         data.append("upload_preset","new-insta")
//         data.append("cloud_name","cnq")
//         fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
//             method:"post",
//             body:data
//         })
//         .then(res=>res.json())
//         .then(data=>{
//            setUrl(data.url)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }
//     const uploadFields = ()=>{
//         if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
//             M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
//             return
//         }
//         fetch("/signup",{
//             method:"post",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 name,
//                 password,
//                 email,
//                 pic:url
//             })
//         }).then(res=>res.json())
//         .then(data=>{
//            if(data.error){
//               M.toast({html: data.error,classes:"#c62828 red darken-3"})
//            }
//            else{
//                M.toast({html:data.message,classes:"#43a047 green darken-1"})
//                history.push('/signin')
//            }
//         }).catch(err=>{
//             console.log(err)
//         })
//     }
//     const PostData = ()=>{
//         if(image){
//             uploadPic()
//         }else{
//             uploadFields()
//         }
       
//     }

//    return (
//       <div className="mycard">
//           <div className="card auth-card input-field">
//             <h2>Instagram</h2>
//             <input
//             type="text"
//             placeholder="name"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             />
//             <input
//             type="text"
//             placeholder="email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             />
//             <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e)=>setPasword(e.target.value)}
//             />
//             <div className="file-field input-field">
//             <div className="btn #64b5f6 blue darken-1">
//                 <span>Upload pic</span>
//                 <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
//             </div>
//             <div className="file-path-wrapper">
//                 <input className="file-path validate" type="text" />
//             </div>
//             </div>
//             <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
//             onClick={()=>PostData()}
//             >
//                 SignUP
//             </button>
//             <h5>
//                 <Link to="/signin">Already have an account ?</Link>
//             </h5>
             
               
         
            
    
//         </div>
//       </div>
//    )
// }


// export default SignIn



import React, { useState } from 'react'
// import { Link, useNavigate} from 'react-router-dom'
import M from 'materialize-css'
// import './Signup.css'
import { useHistory,Link } from 'react-router-dom'
const Signup = () => {
  // const navigate = useNavigate
  const history = useHistory()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const PostData = () =>{
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
      return
    }
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"#c62828 red darken-3"})
      }
      else{
        M.toast({html:data.message,classes:"#43a047 green darken-1"})
        history.push('/signin')
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className='mycard'>
    <div className="card auth-card" style={{boxShadow:"0px 5px 15px grey"}}>
        <h2>Instagram</h2>
        <h6 style={{fontSize:"25px",marginBottom:"10px",color:"grey"}}>Sign up to see photos and videos from your friends.</h6>
        <input type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn waves-effect waves-light #64b5f   blue darken-1" 
        onClick={()=>PostData()}>
          Signup
        </button>
        <h6 style={{fontSize:"15px"}}>
          Have an account? <Link to='/signin'><span style={{color:"#0095f6"}}>Log in</span></Link>
        </h6>
    </div>
</div>
  )
}

export default Signup