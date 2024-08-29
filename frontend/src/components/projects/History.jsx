import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './history.css';

// Component for displaying OAT (Of All Time) statistics
const OATStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState([0, 0, 0]);

  // Calculate total commits, additions, and deletions
  const calcTotal = (data) => {
    let commits = 0, additions = 0, deletions = 0;

    for (let repo of repos) {
      for (let entry of data[repo.name]) {
        commits += entry.total;
        for (let week of entry.weeks) {
          additions += week.a;
          deletions += week.d;
        }
      }
    }

    return [commits, additions, deletions];
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      try {
        await fetchData('http://localhost:6969/github/user/repo/commits/stats/oat', repos, setData);
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

// Component for displaying yearly statistics
const YearStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  const [commitSum, setCommitSum] = useState(0);
  const [maxIndex, setMaxIndex] = useState(null);

  // Calculate total commits per week
  const calcTotal = (data) => {
    let weeklyCommits = new Array(52).fill(0);

    for (let repo of repos) {
      for (let i = 0; i < 52; i++) {
        weeklyCommits[i] += data[repo.name].owner[i];
      }
    }

    let totalCommits = 0;
    let maxWeekIndex = 0;

    for (let i = 0; i < 52; i++) {
      totalCommits += weeklyCommits[i];
      if (weeklyCommits[i] > weeklyCommits[maxWeekIndex]) {
        maxWeekIndex = i;
      }
    }

    setMaxIndex(maxWeekIndex);
    setCommitSum(totalCommits);

    return weeklyCommits;
  };

  // Get the starting date of a given week index
  const getWeekDate = (weekIndex) => {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    const startOfWeek = new Date(startOfYear.getTime() + weekIndex * 7 * 24 * 60 * 60 * 1000);
    return startOfWeek.toLocaleDateString();
  };

  useEffect(() => {
    const fetchAndCalculate = async () => {
      try {
        await fetchData('http://localhost:6969/github/user/repo/commits/stats/year', repos, setData);
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
            {total.map((weekSum, index) => (
              <div className='single_week' key={index}>
                {index === maxIndex ? (
                  <div className='rainbow' title={`Most commits on the week starting on ${getWeekDate(index)}`}>
                    {weekSum}
                  </div>
                ) : (
                  <div className='normie' title={`Commits for the week starting on ${getWeekDate(index)}`}>
                    {weekSum}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='caption'>
            <div>{commitSum}</div>
            <p>Commits this year</p>
          </div>
        </div>
      )}
    </>
  );
};

// Component for displaying weekly commit statistics
const WeeklyCommitStats = ({ data }) => {
  const dates = Object.keys(data);
  const counts = Object.values(data);
  let maxCount = 0;
  let totalCommits = 0;

  // Find max count and total commits
  for (let count of counts) {
    if (count[0] > maxCount) {
      maxCount = count[0];
    }
    totalCommits += count[0];
  }

  return (
    <div className='week_stats_main'>
      <div className='week_text'>
        <div>I made a total of&nbsp;</div>
        <div className='lol'>{totalCommits}</div>
        <div>&nbsp;commits this week!</div>
      </div>
      <div className='labels'>
        {dates.map((date, index) => (
          <div key={index} className='single_day'>
            <div className='col_container'>
              <div className='counts'>{counts[index]}</div>
              <div className='column' style={{ height: `${(counts[index][0] / maxCount) * 90}%` }}></div>
            </div>
            <div className='label'>{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for displaying weekly statistics
const WeekStats = ({ repos, fetchData }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchAndCalculate = async () => {
      await fetchData('http://localhost:6969/github/user/repo/commits/stats/week', repos, setData);
    };

    fetchAndCalculate();
  }, [repos, fetchData]);

  // Calculate total commits for the week
  const calcTotal = (data) => {
    if (data) {
      let today = new Date();
      let lastMonday = new Date(today);
      lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

      let days = [];
      for (let i = 0; i < 7; i++) {
        let day = new Date(lastMonday);
        day.setDate(lastMonday.getDate() + i);
        const formattedDate = day.getFullYear() + '-' + String(day.getMonth() + 1).padStart(2, '0') + '-' + String(day.getDate()).padStart(2, '0');
        days.push(formattedDate);
      }

      let ret = {};
      for (let day of days) {
        ret[day] = ret[day] ? ret[day] : [];
        let commits = 0;
        for (let repo of repos) {
          for (let i = 0; i < Object.keys(data[repo.name]).length; i++) {
            if (data[repo.name][i].commit.author.date.substring(0, 10) === day) {
              commits += 1;
            }
          }
        }
        ret[day].push(commits);
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

// Function to fetch data for the given URL and repositories
const fetchData = async (url, repos, setVar) => {
  try {
    const dataPerRepo = {};
    const promises = repos.map(async (repo) => {
      const name = repo.name;
      const res = await axios.get(url, { params: { repo: name } });
      dataPerRepo[name] = res.data ? res.data : [];
    });
    await Promise.all(promises);
    setVar(dataPerRepo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Main History component for selecting and displaying different time period statistics
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
        <button className={selected === 'week' ? 'selected' : ''} onClick={() => setSelected('week')}>Week</button>
        <button className={selected === 'year' ? 'selected' : ''} onClick={() => setSelected('year')}>Year</button>
        <button className={selected === 'start' ? 'selected' : ''} onClick={() => setSelected('start')}>Start of Time</button>
      </div>
      <div className='stats'>{getCurrentStats()}</div>
    </div>
  );
};

export default History;
