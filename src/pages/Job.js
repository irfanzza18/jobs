import React, { useState,useEffect } from 'react'
import {Card, Badge,Button, Collapse} from 'react-bootstrap'
// import ReactMarkdown from 'react-markdown'

import {getJobList} from "./api"

function Job({job}) {

  const [joblist, setJob] = useState([])


  useEffect( ()=>{
    getJobList().then((result)=>{
      setJob(result)
    })
  },[])


  
    const JobList = () => {
      return joblist.map((job,i)=>{
        return (

         
          <Card className='mb-3' key={i}>
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
              <br />
      
            </Card.Body>
          </Card>
        )
      }
        
      )
    }

    return(
      <div>
         <Card className='mb-3' > 
          <Card.Body>
              <Card.Title>
                  JOB LIST
              </Card.Title>
              <Card.Subtitle className='text-muted mb-2'>
                          
                    </Card.Subtitle>
          </Card.Body>
          
          </Card>
      <JobList/>
      </div>
    )
 
}

export default Job