import { useContext, useEffect, useState } from "react";
import "../.././App.css";
import { ThemeContext } from "../../context/ThemeContext";
import { TextField } from "@mui/material";
import { Button } from "antd";
function Home() {
  const { isDark } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState([]);
  const [job, setJob] = useState([]);

  function categories() {
    fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
      .then((res) => res.json())
      .then((res) => setCategory(res.data));
  }
  function jobs() {
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
          ? "bg-slate-800 text-slate-100 w-full m-0 transition-colors"
          : "bg-white text-black w-full   m-0 transition-colors"
      }
    >
      <div className="heroBanner">
        <h1 class="MuiTypography-root MuiTypography-h1 css-18mqlzt">
          Dig. Apply <br class="MuiBox-root css-0" /> Prepare Your Future
        </h1>{" "}
        <div className="content">
          Hiring Mine connects employer and job seekers, where employers are the
          source of the resources and the job seeker can find and apply for
          their targeted job.
        </div>
        <TextField
          id="outlined-basic"
          label="Search by Role or Keyword"
          variant="outlined"
        />
        <Button color="primary" variant="solid" className="rounded-full">
          Find Jobs
        </Button>
        <div className="heading2">Popular Searches</div>
      </div>
    </div>
  );
}

export default Home;
