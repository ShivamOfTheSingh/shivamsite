import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './history.css';

const OATStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState([0, 0, 0]);
  const calcTotal = (data) => {
    let c = 0, a = 0, d = 0;
    for(let repo of repos) {
      for(let entry of data[repo.name]) {
        c += entry.total;
        for(let week of entry.weeks) {
          a += week.a;
          d += week.d;
        };
      }
    }

    return [c, a, d];
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      try {
        const fetchedData = await fetchData(
          'http://localhost:6969/github/user/repo/commits/stats/oat',
          repos,
          setData
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndCalculate();
  }, [repos, fetchData]);

  useEffect(() => {
    if (data) {
      setTotal(calcTotal(data));
    }
  }, [data]);

  return (
    <div>
      {data && total && (
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

const YearStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  const [lol, setLol] = useState(0);
  const [max_index, setMax] = useState(null);

  const calcTotal = (data) => {
    let ret = new Array(52).fill(0);
    for (let repo of repos) {
      for (let i = 0; i < 52; i++) {
        ret[i] += data[repo.name].owner[i];
      }
    }

    let pp = 0;
    let m = 0;
    for(let i = 0; i < 52; i++) {
      pp += ret[i];
      if (ret[i] > ret[m]) {
        m = i;
      }
    }
    setMax(m);
    setLol(pp);
    return ret;
  };

  const getWeekDate = (weekIndex) => {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    const startOfWeek = new Date(startOfYear.getTime() + weekIndex * 7 * 24 * 60 * 60 * 1000);
    return startOfWeek.toLocaleDateString();
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      try {
        const fetchedData = await fetchData(
          'http://localhost:6969/github/user/repo/commits/stats/year',
          repos,
          setData
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndCalculate();
  }, [repos, fetchData]);

  useEffect(() => {
    if (data) {
      setTotal(calcTotal(data));
    }
  }, [data]);

  return (
    <>
      {total && (
        <div className='year-main'>
          <div className='year'>
            {total.map((weeksum, index) => (
              <div className='single_week' key={index}>
                {index === max_index ? (
                  <div
                    className='rainbow'
                    title={`Most commits on the week starting on ${getWeekDate(index)}`}
                  >
                    {weeksum}
                  </div>
                ) : (
                  <div
                    className='normie'
                    title={`Commits for the week starting on ${getWeekDate(index)}`}
                  >
                    {weeksum}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='caption'>
            <div>{lol}</div>
            <p>Commits this year</p>
          </div>
        </div>
      )}
    </>
  );
};

const WeeklyCommitStats = ({ data }) => {
  const dates = Object.keys(data);
  const counts = Object.values(data);
  let maxCount = 0;
  let total_commits = 0;

  for (let count of counts) {
    if (count[0] > maxCount) {
      maxCount = count[0];
    }
    total_commits += count[0];
  }

  return (
    <div className='week_stats_main'>
      <div className='week_text'>
        <div>I made a total of&nbsp;</div>
        <div className='lol'>{total_commits}</div>
        <div>&nbsp;commits this week!</div>
      </div>
      <div className='labels'>
        {dates.map((date, index) => (
          <div key={index} className='single_day'>
            <div className='col_container'>
              <div className='counts'>{counts[index]}</div>
              <div
                className='column'
                style={{ height: `${(counts[index][0] / maxCount) * 90}%` }}
              ></div>
            </div>
            <div className='label'>{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WeekStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchAndCalculate = async () => {
      await fetchData(
        'http://localhost:6969/github/user/repo/commits/stats/week',
        repos,
        setData
      );
    };
    fetchAndCalculate();
  }, [repos, fetchData]);

  const calcTotal = (data) => {
    if (data) {
      let today = new Date();
      let lastMonday = new Date(today);
      lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
      
      let days = [];
      for (let i = 0; i < 7; i++) {
          let day = new Date(lastMonday);
          day.setDate(lastMonday.getDate() + i);
          const formattedDate = day.getFullYear() + '-' + 
                                String(day.getMonth() + 1).padStart(2, '0') + '-' + 
                                String(day.getDate()).padStart(2, '0');
          days.push(formattedDate);
      }
      
      let ret = {};
      for (let day of days) {
        ret[day] = ret[day] ? ret[day] : [];
        let t = 0;
        for (let repo of repos) {
          for (let i = 0; i < Object.keys(data[repo.name]).length; i++) {
            if (
              data[repo.name][i].commit.author.date.substring(0, 10) == day
            ) {
              t += 1;
            }
          }
        }
        ret[day].push(t);
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

  return <div>{total && <WeeklyCommitStats data={total} />}</div>;
};

const fetchData = async (url, repos, setVar) => {
  try {
    const data_per_repo = {};
    const promises = repos.map(async (repo) => {
      const name = repo.name;
      const res = await axios.get(url, {
        params: { repo: name },
      });
      data_per_repo[name] = res.data;
    });
    await Promise.all(promises);
    setVar(data_per_repo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const History = ({ repo }) => {
  const [selected, setSelected] = useState('week');

  const getCurrentStats = () => {
    switch (selected) {
      case 'week':
        return <WeekStats repos={repo} fetchData={fetchData} />;
      case 'year':
        return <YearStats repos={repo} fetchData={fetchData} />;
      case 'start':
        return <OATStats repos={repo} fetchData={fetchData} />;
      default:
        return <p>Select a time period - Something Broke</p>;
    }
  };

  return (
    <div className='histmain'>
      <div className='hist_head'>
        <p>My Github Activity For The </p>
        <div>
          <button
            className={selected === 'week' ? 'selected' : ''}
            onClick={() => setSelected('week')}
          >
            Week
          </button>
          <button
            className={selected === 'year' ? 'selected' : ''}
            onClick={() => setSelected('year')}
          >
            Year
          </button>
          <button
            className={selected === 'start' ? 'selected' : ''}
            onClick={() => setSelected('start')}
          >
            Start of Time
          </button>
        </div>
      </div>
      <div className='stats'>{getCurrentStats()}</div>
    </div>
  );
};

export default History;