import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./history.css";

const OATStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState([0, 0, 0]);

  const calcTotal = (data) => {
    let c = 0, a = 0, d = 0;

    for (let repo of repos) {
      if (data[repo.name] && Array.isArray(data[repo.name])) {
        for (let i = 0; i < data[repo.name].length; i++) {
          c += data[repo.name][i].total;

          for (let week of data[repo.name][i].weeks) {
            a += week.a;
            d += week.d;
          }
        }
      } else {
        console.error(`Data for repo ${repo.name} is missing or malformed.`);
      }
    }

    return [c, a, d];
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      try {
        await fetchData("http://localhost:6969/github/user/repo/commits/stats/oat", repos, setData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndCalculate();
  }, [repos, fetchData]);

  useEffect(() => {
    if (data) {
      const totals = calcTotal(data);
      setTotal(totals);
    }
  }, [data]);

  return (
    <div>
      {data && (
        <div className='OAT'>
          <div className='total-commits'>
            <p>{total[0]}</p>
            Total Commits
          </div>
          <div className='specs'>
            <p>- Total Additions: {total[1]}</p>
            <p>- Total Deletions: {total[2]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const YearStats = () => {
  return (
    <p>YEAR DATA LOLOLLOLOLOLOLOLOL</p>
  )
}

const WeeklyCommitStats = ({ data }) => {
  return (
    <div>HEIADJLKSAJKLDJASKL</div>
  )
}

const WeekStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchAndCalculate = async () => {
      await fetchData("http://localhost:6969/github/user/repo/commits/stats/week", repos, setData);
    };
    fetchAndCalculate();
  }, [repos, fetchData]);

  const calcTotal = (data) => {
    if (data) {
      let today = new Date()
      let lastMonday = new Date()
      lastMonday.setDate(today.getDate() - today.getDay())

      let days = [];
      for (let i = 0; i < 7; i++) {
        let day = new Date(lastMonday);
        day.setDate(lastMonday.getDate() + i);
        days.push(day.toISOString().substring(0, 10));
      }

      let ret = {};
      for (let day of days) {
        ret[day] = ret[day] ? ret[day] : []
        let t = 0
        for (let repo of repos) {
          for (let i = 0; i < Object.keys(data[repo.name]).length; i++) {
            if (data[repo.name][i].commit.author.date.substring(0, 10) == day ) {
              t += 1
            }
          }
        }
        ret[day].push(t)
      }
      return ret;
    }
    return [];
  };

  useEffect(() => {
    if (data) {
      setTotal(calcTotal(data));
    }
  }, [data]);

  return (
    <div>
      {total && <WeeklyCommitStats data={data} />}
    </div>
  );
};

const History = ({ repo }) => {
  const [selected, setSelected] = useState('week');

  const fetchData = async (url, repos, setVar) => {
    try {
      const data_per_repo = {};
      const promises = repos.map(async (repo) => {
        const name = repo.name;
        const res = await axios.get(url, {
          params: { repo: name }
        });
        if (res.data) {
          data_per_repo[name] = res.data;
        } else {
          data_per_repo[name] = [];
        }
      });
      await Promise.all(promises);
      setVar(data_per_repo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCurrentStats = () => {
    switch (selected) {
      case "week":
        return <WeekStats repos = { repo } fetchData = { fetchData }/>
      case "year":
        return <YearStats />
      case "start":
        return <OATStats repos={repo} fetchData={fetchData} />
      default:
        return <p>Select a time period - Something Broke</p>;
    }
  };

  return (
    <div className='histmain'>
      <div className='hist_head'>
        <p>My Github Activity For The </p>
        <button className={selected === 'week' ? 'selected' : ''} onClick={() => setSelected('week')}>Week</button>
        <button className={selected === 'year' ? 'selected' : ''} onClick={() => setSelected('year')}>Year</button>
        <button className={selected === 'start' ? 'selected' : ''} onClick={() => setSelected('start')}>Start of Time</button>
      </div>
      <div className='stats'>
        {getCurrentStats()}
      </div>
    </div>
  );
};

export default History;
