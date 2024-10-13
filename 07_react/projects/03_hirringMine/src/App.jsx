import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [isDark, setIsDark] = useState(false)
  const [count, setCount] = useState(0)
  const [category, setCategory] = useState([])
  const [job, setJob] = useState([])

  function categories() {
    fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
      .then((res) => res.json())
      .then((res) => setCategory(res.data))
  }
  function jobs() {
    fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=`)
      .then((res) => res.json())
      .then((res) => setJob(res.data))
    // console.log(job)
  }
  // console.log(job)
  useEffect(() => {
    categories()
    jobs()
  }, [])

  return (
    <div className={isDark ? "bg-slate-700 text-slate-100 h-screen w-full py-2 m-0 transition-colors" : "bg-white text-black w-full h-screen py-2 m-0 transition-colors"} >
      <h1 className='text-2xl text-center'>Hirring Mine</h1>
      <button className='bg-blue-500 hover:bg-blue-400 active:bg-blue-600 py-2 px-4 rounded-lg m-2' onClick={() => setIsDark(!isDark)}>{isDark ? "Light Theme" : "Dark Theme"}</button>
      <div className="wrap px-4">
        <div className="categories flex flex-col">
          <select name="" id="" className='bg-purple-500 hover:bg-purple-400 active:bg-purple-600 px-3 py-2 cursor-pointer w-3/12 border-3 rounded-lg font-mono mb-2'>
            <option value="null" className='bg-purple-200 cursor-pointer'>Categories</option>
            {category.map((categ, index) => (
              <option key={index} value={categ.name} className='bg-purple-200 cursor-pointer'>{categ.name}</option>
            ))}
          </select>
          {/* <h1 className='text-2xl mb-5 font-semibold'>Categories</h1>
          <div className="categ">
            {category.map((categ, index) => (
              <p key={index}>{categ.name}</p>
            ))}
          </div> */}
        </div>
        < div className="jobs">
          <h1 className='text-2xl mb-5 font-semibold'>Jobs</h1>
          <div className="jobs flex flex-col gap-2">
            {
              job.map((job, index) => (
                <div key={index} className="main border-2 px-2 py-1 flex flex-col gap-1">
                  <div className="company text-xl">{job.companyName} ({job.category.name})</div>
                  <div className="jobName">{job.designation}</div>
                  <div className="content">
                    <div className="skills flex gap-2 flex-wrap">
                      {job?.hashTags.map((hashTag, index) => (
                        <div className="skill px-2 bg-slate-400 rounded-lg cursor-pointer py-1" key={index}>{hashTag}</div>
                      ))}
                    </div>
                  </div>
                  {job?.experience ? <div className="footer">Experience: {job.experience}</div> : ''}
                  <div className="views w-24 rounded-lg px-2 py-1 bg-sky-600">{job.views} Views</div>
                </div>
              ))
            }
          </div>
        </div>
      </div >
    </div>
  )
}

export default App
