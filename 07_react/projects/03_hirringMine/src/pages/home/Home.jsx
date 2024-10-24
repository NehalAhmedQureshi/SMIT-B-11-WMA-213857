import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TextField } from "@mui/material";
import { Button } from "antd";
import '../../home.css'
function Home() {
  const { isDark } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState([]);
  const [job, setJob] = useState([]);

  const relatedJobs = ['Software' , 'Developer' , 'Backend' , 'React' , 'Node' , 'React Native' , 'Flutter','UI/UX' ,'Designer','Web','SEO','Marketing','Writter']

  function categories() {
    fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
      .then((res) => res.json())
      .then((res) => setCategory(res.data));
  }
  function jobs() {
    console.log("🚀 ~ jobs ~ jobs:", category)
    fetch(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=`
    )
      .then((res) => res.json())
      .then((res) => setJob(res.data));
    // console.log(job)
  }
  // console.log(job)
  useEffect(() => {
    categories();
    jobs();
  }, []);

  return (
    <div
      className={
        isDark
          ? "bg-gray-950 text-slate-100 w-full m-0 transition-colors flex justify-center flex-col"
          : "bg-slate-100 text-black w-full   m-0 transition-colors flex justify-center flex-col"
      }
    >
        {/*  //* herro section */}
      <div className="wrap   text-center flex flex-col items-center h-auto">
        <div className="heroSection flex flex-col w-[70%]  px-5 items-center gap-7">
        <div className="heroBanner text-center flex justify-center items-center flex-col   mt-10">
          <h1 class="MuiTypography-h1 text-7xl mt-4 font-extrabold font-roboto leading-[100px]">
            Dig. Apply <br /> Prepare Your Future 
          </h1>{" "}
        </div>
        <div className="content text-xl">
          Hiring Mine connects employer and job seekers, where employers are the
          source of the resources and the job seeker can find and apply for
          their targeted job.
        </div>
        <input type="text" placeholder="Search by Roll or Keyword" className="input roboto bg-transparenttext border rounded-md hover:border-slate-900 hover:placeholder:text-slate-500 active:border-blue-600 focus:outline-blue-600 focus:placeholder:text-blue-600 pl-2 border-slate-500 outline-1 text-black h-[35px] w-[80%] bg-transparent" />
        <button  className="rounded-full roboto bg-[#6851FF] hover:bg-[#4838B2] active:shadow-xl shadow-lg text-white py-3 px-7 font-extrabold text-base">
          Find Jobs
        </button>
        <div className="heading2 roboto text-[#9747FF]  text-3xl font-extrabold">Popular Searches</div>
        <div className="tags flex flex-wrap gap-4 px-3 justify-center">
          {relatedJobs.map((data , index)=>(
            <button key={index} className="border text-[#6851FF] font-extrabold px-2 py-1 rounded-md hover:shadow-inner   bg-transparent border-[#6851FF]">{data}</button>
          ))}
        </div>
        </div>
        <div className="img bottom-0 w-full h-auto">
          <img src="https://www.hiringmine.com/assets/art%20work-df4f7a46.png" alt="hero banner" />
        </div>
      </div>
      {/*  //* quick steps */}
      <div className="quickSteps">
        <div className="heading">Get Hired In 4 <span>Quick Easy Steps (Coming Soon)</span></div>
        <div className="quickContent">The quickest and the most effective way to get hired by the top firm.</div>
      </div>
    </div>
  );
}

export default Home;
