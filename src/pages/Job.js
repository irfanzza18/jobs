import React, { useState,useEffect } from 'react'
import {Card,Button} from 'react-bootstrap'
import { Form,Col,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import ReactMarkdown from 'react-markdown'
import axios from "axios"
import {getJobList} from "./api"
import InfiniteScroll from 'react-infinite-scroll-component'


function Job() {

  const [page,setPage] = useState(1)
  const [errors, setErrors] =useState([])
  const [isLoading,setIsLoading] = useState([false])
  const [joblist, setJob] = useState([])
  const [searchTerm,setSearchTerm] = useState(null)

  function fetchsearch(){
          
      var description = data.description
      var location = data.location
      var type = data.full_time
      var res = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description='+description+
	                "&location="+location+"&type="+type;
  console.log("url baru",res)
      const searchjob =  axios.get(res
        ) 
        .then((result)=>{
          console.log("ini result",page)
          if(page>1){
           
            setJob([...result.data])
            
          }else{
            console.log("ini bukan page");
            setJob([...result.data])
          }
          
          console.log()
      })
  }

    function fetchlist(){
      getJobList(page)
      .then((result)=>{
          setJob([...joblist,...result])
          // console.log(result);
          setIsLoading(false)
      })
      .catch((e)=>{
        setErrors("ERR FAILED 404 Not Found")
        setIsLoading(false)
      })
    }

  useEffect(()=>
      {
          setIsLoading(true)
          if(searchTerm!==null){
            fetchsearch()
          }
          else{
            fetchlist();
          }
        
      },[page])

      const [data,setData] = useState({
        description: "",
        location : "",
        full_time : "Full Time"
      })


      function handle(e){
        const newData = {...data}
        newData[e.target.id]= e.target.value
        setData(newData)
        console.log(data)
      }
      
  function submit(e){
    e.preventDefault();
    setSearchTerm(e.target.value)
      console.log("in coba",data)

  }

      useEffect(()=>{
      if(searchTerm===null)return;
      fetchsearch()
                  
      },[searchTerm])

    const JobList = () => {
     
      return ( 
        <InfiniteScroll 
       dataLength={joblist.length}
       next={()=> setPage(page+1)}
       hasMore={true}
       >
          {
        joblist.map((job,i)=>{
       
        if(joblist[i] === null){
          return ""
       }
        return (
          
       
            <Link to={'/detail/'+job.id} key={i} >
              <Card className='mb-3' >
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                      <div > 
                        
                        <Card.Subtitle className='text-muted mb-2'>
                        {job.title} 
                        </Card.Subtitle>
                        <span className='text-muted font-weight-light'>
                            {job.company} - </span>
                            <span className='text-muted font-weight-light'>
                            {job.type} </span>
                      </div>
                      {job.location}
                      <br/>
                      {new Date(job.created_at).toLocaleDateString()}
                  </div>
          
                </Card.Body>
              </Card>
            </Link>
             ) }
      )
      
  }
  </InfiniteScroll >
      )
    }
    function Showing()
    {
    if(searchTerm!==null){
      return (<Card > 
        <Card.Header><br/><h1 className='text-4xl text-black-1000'>Showing {joblist.length} Job </h1> <br/></Card.Header>
        
        </Card>)
    }
    else{
     return(
      <Card > 
      <Card.Header><br/><h1 className='text-4xl text-black-1000'>JobList </h1> <br/></Card.Header>
      
      </Card>
      )
    }
  }
    return(
      <div>
        <Form className="mb-4"
          onSubmit={(e)=>submit(e)}
        >
            <Row className="align-items-end">
              <Form.Group as={Col}>
                <Form.Label>Job Description</Form.Label>
                <Form.Control 
                name="description" 
                type="text"  
                placeholder='Description'
                onChange={(e)=> handle(e)}
                id="description"
                value = {data.description}
                />
              </Form.Group>
                  <Form.Group as={Col}  className="ml-5">
                    <Form.Label>Location</Form.Label>
                    <Form.Control  
                    name="location" 
                    type="text" 
                    placeholder='Location'
                    onChange={(e)=> handle(e)}
                    id="location"
                    value = {data.location}
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs="auto" className="ml-5">
                    <Form.Check  name="full_time"  label="Full Time Only " type="checkbox" className="mb-2" 
                     onChange={(e)=> handle(e)}
                     id="full_time"
                     value = {data.full_time}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                  <Button variant="primary" type="submit" active>
                    Submit
                  </Button>
                  </Form.Group>
              </Row>
        </Form>

       
        <Showing/>

        
          {/* {
           isLoading ? (
              <div className='flex h-screen'> 
                    <p className='m-auto'>Loading...</p>
              </div>
            ):
          
            errors.length > 0 && (
              <div className='flex h-screen'> 
                    <p className='m-auto'>{errors}</p>
              </div>
            )
          } */}

      
      {/* {
            errors.length === 0 && (
            <>
            <JobList/>
            <div className="d-flex align-items-center justify-content-center">
            <Button varian="primary" active onClick={()=>setPage(page+1)}>Load More</Button>
            </div>
            </>
            )
          } */}
      <JobList/>

     {errors.length > 0 && (
              <div className='flex h-screen'> 
                    <p className='m-auto'>The Value Does not exist from the API</p>
              </div>
            )
          }
      </div>
    )
 
}

export default Job