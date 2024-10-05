import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [category, setCategory] = useState([])
  const [job, setJobs] = useState([])

  function categories() {
    fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
      .then((res) => res.json())
      .then((res) => setCategory(res.data))
  }
  function jobs(){
    fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=20&pageNo=1&keyWord=&category=`)
    .then((res)=>res.json())
    .then((res)=>setJobs(res.data))
  }
  useEffect(() => {
    categories()
    jobs()
  }, [])

  return (
    <>
      <h1 className='text-2xl text-center my-2'>Hirring Mine</h1>
      <div className="wrap flex justify-evenly px-4">
        <div className="categories flex flex-col">Categories</div>
        <div className="categ">
          {category.map((categ,index) => (
            // {console.log(categ.name)}
            <p key={index}>{categ.name}</p>
          ))}
        </div>
        < div className="jobs">Jobs</div>
        <div className="jobs flex flex-col">
        {
          job.map((job,index) => (
            // {console.log(categ.name)}
            <p key={index}>{job.designation}</p>
          ))
        }
        </div>
      </div >
    </>
  )
}

export default App
