// import React,{useState,useEffect,useContext} from 'react'
// import {UserContext} from '../../App'
// import {Link} from 'react-router-dom'
// import './Home.css'
// import _ from 'lodash';

// const pageSize = 3;
// const Home  = ()=>{
//     const [data,setData] = useState([])
//     const {state,dispatch} = useContext(UserContext)
//     const [paginatedPost,setPaginatedPost] = useState()
//     const [currentPage,setCurrentPage] = useState(1)
//     useEffect(()=>{
//        fetch('/allpost',{
//            headers:{
//                "Authorization":"Bearer "+localStorage.getItem("jwt")
//            }
//        }).then(res=>res.json())
//        .then(result=>{
//            console.log(result)
//            setData(result.posts)
//            setPaginatedPost(_(result.posts).slice(0).take(pageSize).value())
//        })
//     },[])

//     const likePost = (id)=>{
//           fetch('/like',{
//               method:"put",
//               headers:{
//                   "Content-Type":"application/json",
//                   "Authorization":"Bearer "+localStorage.getItem("jwt")
//               },
//               body:JSON.stringify({
//                   postId:id
//               })
//           }).then(res=>res.json())
//           .then(result=>{
//                    //   console.log(result)
//             const newData = data.map(item=>{
//                 if(item._id==result._id){
//                     return result
//                 }else{
//                     return item
//                 }
//             })
//             setData(newData)
//           }).catch(err=>{
//               console.log(err)
//           })
//     }
//     const unlikePost = (id)=>{
//           fetch('/unlike',{
//               method:"put",
//               headers:{
//                   "Content-Type":"application/json",
//                   "Authorization":"Bearer "+localStorage.getItem("jwt")
//               },
//               body:JSON.stringify({
//                   postId:id
//               })
//           }).then(res=>res.json())
//           .then(result=>{
//             //   console.log(result)
//             const newData = data.map(item=>{
//                 if(item._id==result._id){
//                     return result
//                 }else{
//                     return item
//                 }
//             })
//             setData(newData)
//           }).catch(err=>{
//             console.log(err)
//         })
//     }

//     const makeComment = (text,postId)=>{
//           fetch('/comment',{
//               method:"put",
//               headers:{
//                   "Content-Type":"application/json",
//                   "Authorization":"Bearer "+localStorage.getItem("jwt")
//               },
//               body:JSON.stringify({
//                   postId,
//                   text
//               })
//           }).then(res=>res.json())
//           .then(result=>{
//               console.log(result)
//               const newData = data.map(item=>{
//                 if(item._id==result._id){
//                     return result
//                 }else{
//                     return item
//                 }
//              })
//             setData(newData)
//           }).catch(err=>{
//               console.log(err)
//           })
//     }

//     const deletePost = (postid)=>{
//         fetch(`/deletepost/${postid}`,{
//             method:"delete",
//             headers:{
//                 Authorization:"Bearer "+localStorage.getItem("jwt")
//             }
//         }).then(res=>res.json())
//         .then(result=>{
//             console.log(result)
//             const newData = data.filter(item=>{
//                 return item._id !== result._id
//             })
//             setData(newData)
//         })
//     }

//     const pageCount = data ? Math.ceil(data.length/pageSize) : 0;
//     if (pageCount===1) return null;
//     const pages = _.range(1, pageCount+1)

//     const pagination =(pageNo) =>{
//         setCurrentPage(pageNo);
//         const startIndex = (pageNo -1) * pageSize;
//         const paginatedPost = _(data).slice(startIndex).take(pageSize).value();
//         setPaginatedPost(paginatedPost)
//     }
//    return (
//        <div className="home">
//            {
//                paginatedPost?.map(item=>{
//                    return(
//                        <div className="card home-card" key={item._id}>
//                             <h5 style={{padding:"5px"}}><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link> {item.postedBy._id == state._id 
//                             && <i className="material-icons" style={{
//                                 float:"right"
//                             }} 
//                             onClick={()=>deletePost(item._id)}
//                             >delete</i>

//                             }</h5>
//                             <div className="card-image">
//                                 <img src={item.photo}/>
//                             </div>
//                             <div className="card-content">
//                             <i className="material-icons" style={{color:"red"}}>favorite</i>
//                             {item.likes.includes(state._id)
//                             ? 
//                              <i className="material-icons"
//                                     onClick={()=>{unlikePost(item._id)}}
//                               >thumb_down</i>
//                             : 
//                             <i className="material-icons"
//                             onClick={()=>{likePost(item._id)}}
//                             >thumb_up</i>
//                             }


//                                 <h6>{item.likes.length} likes</h6>
//                                 <h6>{item.title}</h6>
//                                 <p>{item.body}</p>
//                                 {
//                                     item.comments.map(record=>{
//                                         return(
//                                         <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
//                                         )
//                                     })
//                                 }
//                                 <form onSubmit={(e)=>{
//                                     e.preventDefault()
//                                     makeComment(e.target[0].value,item._id)
//                                 }}>
//                                   <input type="text" placeholder="add a comment" />  
//                                 </form>

//                             </div>
//                         </div> 
//                    )
//                })
//            }
//            <div>
//           <nav className='paginate'>
//               <ul className='pag'>
//                   {pages.map((page)=>{
//                       return (
//                           <li className={
//                               page === currentPage ? "page-link active" : "page-link"
//                           }>
//                               <p onClick={(e)=>{pagination(page);



//                                 if( e.target.style.backgroundColor){
//                                     e.target.style.backgroundColor=""
//                                     console.log("red")
//                                 }
//                                 else{
//                                     e.target.style.backgroundColor="red"
//                                 }
//                                }}>

//                                   {page}
//                              </p>
//                               </li>
//                       )
//                   })}
//               </ul>
//           </nav>
//        </div>
//            </div>
//    )
// }


// export default Home





// <--------------------------------------------------------------------------------------------------->

import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import './Home.css'
import _ from 'lodash';

const Home = () => {
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.posts)
            })
    }, [])

    const likePost = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                //   console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }
    const unlikePost = (id) => {
        fetch('/unlike', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                //   console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    const makeComment = (text, postId) => {
        fetch('/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    const deletePost = (postid) => {
        fetch(`/deletepost/${postid}`, {
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.filter(item => {
                    return item._id !== result._id
                })
                setData(newData)
            })
    }

    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = data.slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item) => {
            return (
                <div className="home">
                    <div className="card home-card" key={item._id}>
                        <h5 style={{ padding: "5px" }}><Link to={item.postedBy._id !== state._id ? "/profile/" + item.postedBy._id
                         : "/profile"}>{item.postedBy.name}</Link> {item.postedBy._id == state._id
                            && <i className="material-icons" style={{
                                float: "right"
                            }}
                                onClick={() => deletePost(item._id)}
                            >delete</i>

                        }</h5>
                        <div className="card-image">
                            <img src={item.photo} />
                        </div>
                        <div className="card-content">
                            {/* <i className="material-icons" style={{ color: "white",border:"1px solid black" }}>favorite</i> */}

                            {item.likes.includes(state._id)
                                ?
                                <i className="material-icons" style={{ color: "red" }}
                                    onClick={() => { unlikePost(item._id) }}
                                >favorite</i>
                                :
                                <i className="material-icons" style={{ color: "grey" }}
                                    onClick={() => { likePost(item._id) }}
                                >favorite</i>
                            }

                            {/* {item.likes.includes(state._id)
                                ?
                                <i className="material-icons"
                                    onClick={() => { unlikePost(item._id) }}
                                >thumb_down</i>
                                :
                                <i className="material-icons"
                                    onClick={() => { likePost(item._id) }}
                                >thumb_up</i>
                            } */}


                            <h6>{item.likes.length} likes</h6>
                            <h6>{item.title}</h6>
                            <p>{item.body}</p>
                            {
                                item.comments.map(record => {
                                    return (
                                        <h6 key={record._id}><span style={{ fontWeight: "500" }}>{record.postedBy.name}</span> {record.text}</h6>
                                    )
                                })
                            }
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                makeComment(e.target[0].value, item._id)
                            }}>
                                <input type="text" placeholder="add a comment" />
                            </form>

                        </div>
                    </div>
                </div>
            )
        })

        const pageCount= Math.ceil(data.length / usersPerPage)

        const changePage = ({selected}) =>{
            setPageNumber(selected)
        }
        return (
            <div className='App'>
                {displayUsers}
                <ReactPaginate 
                   previousLabel={"Previous"}
                   nextLabel={"Next"}
                   pageCount={pageCount}
                   onPageChange={changePage}
                   containerClassName={"paginationBttns"}
                   previousLinkClassName={"previousBttn"}
                   nextClassName={"nextBttn"}
                   disabledClassName={"paginationDisabled"}
                   activeClassName={"paginationActive"}
        
                />
            </div>
          )


}


export default Home