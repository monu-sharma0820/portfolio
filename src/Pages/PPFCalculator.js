import React, { useState } from 'react';

function PPFCalculator() {


  const [amount, setAmount] = useState('');
  const [roi, setInterest] = useState('');
  const [duration, setDuration] = useState('');
  const [rows, setRows] = useState([]);
  let [alertmsg, alertType] = useState('');
  let [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    var errMsg = '';
    if (amount == '' || roi == '' || duration == '') {
      alertType('All values R required');
      setMessage('alert alert-danger');
    } else if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
      alertType('All values Must be Number');
      setMessage('alert alert-danger');
    } else {
      const invest = Number(amount);
      const rate = Number(roi);
      const years = Number(duration);
      var openingBalance = 0;
      let newRows = [];
      for (let i = 1; i <= years; i++) {
        console.log(i);
        var interest = ((openingBalance + invest) * rate) / 100;
        console.log(interest);
        var closingBalance = openingBalance + invest + interest;
        newRows.push({
          year: i,
          openingBalance: Math.round(openingBalance),
          interest: Math.round(interest),
          investment: Math.round(invest),
          closingBalance: Math.round(closingBalance),
        });

        openingBalance = closingBalance;
        setRows(newRows);
      }
    }
    setMessage('Calculation successful');
    alertType('alert alert-success');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="amount"
        />{' '}
        <br />
        <input
          type="text"
          name="roi"
          value={roi}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="roi"
        />{' '}
        <br />
        <input
          typ="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="duration"
        />
        <br />
        <button>Calculate</button>
      </form>
      {message && (
        <div className={`${alertType} text-center w-50 mx-auto`}>{message}</div>
      )}

      {rows.length > 0 && (
        <table className="table w-75 mx-auto border mt-4">
          <thead className="table-dark">
            <tr>
              <th>Year</th>
              <th>Opening Balance</th>
              <th>Interest</th>
              <th>Investment</th>
              <th>Closing Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.openingBalance}</td>
                <td>{row.interest}</td>
                <td>{row.investment}</td>
                <td>{row.closingBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PPFCalculator;
