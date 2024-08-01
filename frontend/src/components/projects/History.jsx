import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./history.css";

const OATStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState([0, 0, 0]);

  const calcTotal = async() => {
    let c = 0, a = 0, d = 0, first = false, recent;
    for (let repo of repos) {
      c += data[repo.name][0].total;
      console.log("Repo: " + repo.name + " commits: " + data[repo.name][0].total);
      for (let week of data[repo.name][0].weeks) {
        if (!first) {
          first = true;
          recent = week.c
        }
        a += week.a;
        d += week.d;
      }
    }
    return [c, a, d, recent];
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      await fetchData("http://localhost:6969/github/user/repo/commits/stats/oat", repos, setData);
      setTotal(calcTotal());
    };
    fetchAndCalculate();
  }, [repos, fetchData]);
      
  return (
    <div>
      {data && (
        <div>
          lol
          <div>{total[0]}</div>
          <div>{total[1]}</div>
          <div>{total[2]}</div>
          <div>{total[3]}</div>
        </div>
      )}
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
        data_per_repo[name] = res.data;
      });
      await Promise.all(promises);
      setVar(data_per_repo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCurrentStats = () => {
    return <OATStats repos={repo} fetchData={fetchData} />;
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
