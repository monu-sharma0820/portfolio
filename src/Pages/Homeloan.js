import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function Homeloan() {
  let [amount, setAmount] = useState('');
  let [roi, setInterest] = useState('');
  let [duration, setDuration] = useState('');
  let [alertmsg, alertType] = useState('');
  let [msg, setMessage] = useState('');
  let [chartData, setChartData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (amount == '' || roi == '' || duration == '') {
      alertType('All values R required');
      setMessage('alert alert-danger');
      return;
    } else if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
      alertType('All values Must be Number');
      setMessage('alert alert-danger');
      return;
    } else {
      let principal = Number(amount);
      let rate = Number(roi);
      let months = Number(duration) * 12;

      let monthlyRate = rate / 12 / 100;

      let emi =
        (principal * monthlyRate * (1 + monthlyRate) ** months) /
        ((1 + monthlyRate) ** months - 1);

      let totalPayable = emi * months;
      let interest = totalPayable - principal;

      alertType('Calculation Successful');
      setMessage('alert alert-success');

      const errMsg = `
      Loan Amount: ₹${principal}
      \nEMI: ₹${Math.round(emi)}
      \nInterest: ₹${Math.round(interest)}
      \nTotal Paid: ₹${Math.round(totalPayable)}
    `;
      setMessage(errMsg);
      setChartData({
        labels: ['Principal', 'Interest', 'EMI', 'TotalPayable'],
        datasets: [
          {
            label: 'Loan Distribution',
            data: [principal, interest, emi, totalPayable],
            backgroundColor: ['Pink', 'Orange', 'Yellow', 'Blue'],
          },
        ],
      });
    }
  }

  return (
    <div>
      <div class="container">
        <h1 className="text-center mt-3">Home Loan Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <ul className="list-group border-2 p-2 w-50 mx-auto text-center">
              <li className="list-group-item ">
                <input
                  className="form-control"
                  type="text"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                />
              </li>
              <li className="list-group-item">
                <input
                  className="form-control"
                  type="text"
                  name="roi"
                  value={roi}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="roi"
                />
              </li>
              <li className="list-group-item">
                <input
                  typeof="text"
                  className="form-control"
                  type="text"
                  name="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="duration"
                />
              </li>
              <li className="list-group-item">
                <button className="btn bg-info mt-3">Calculate</button>
              </li>
              <li className="list-group-item text-start">
                <pre className="alert alert-info">{msg}</pre>
              </li>
            </ul>
            {chartData && (
              <div
                className="mx-auto mt-5"
                style={{ width: '350px', height: '350px' }}
              >
                <Pie data={chartData} />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Homeloan;
