import React, { useState } from 'react'
function Simpleinterest() {
 const [formdata, setFormData] = useState({
    amount: '',
    rof: '',
    duration: '',
  });
  const [result, setResult] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { amount, rof, duration } = formdata;
    // console.log(amount , rof, duration)
    if (amount === '' || rof === '' || duration === '') {
      setResult('All values are required');
      setAlertType('danger');
    } else if (isNaN(amount) || isNaN(rof) || isNaN(duration)) {
      setResult('All values must be numbers');
      setAlertType('danger');
    } else {
      amount = Number(amount);
      rof = Number(rof);
      duration = Number(duration);

      let simpleInterest = (amount * rof * duration) / 100;
      let finalAmount = simpleInterest + amount;
      setResult(
        `Total Interest: ₹${simpleInterest.toFixed(
          2
        )}\nAmount: ₹${amount}\nFinal Value: ₹${finalAmount.toFixed(2)}`
      );
      setAlertType('success');
    }
  };
  return (
    <div className="container">
      <h2 className="text-center m-3"> Simple Interest Calculator </h2>
      <form
        className=" w-50 text-center border mx-auto p-5 rounded-2 bg-light"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="amount"
          placeholder="Enter the Amount"
          className="form-control"
          value={formdata.amount}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="rof"
          placeholder="Enter the rate of interest"
          className="form-control"
          value={formdata.rof}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="duration"
          placeholder="Enter the Duration"
          className="form-control"
          value={formdata.duration}
          onChange={handleChange}
        />
        <br />
        <button className="btn btn-sm bg-info">Calculate</button>
      </form>
      {
        result && (
         <div className={`alert alert-${alertType} mt-4 w-50 mx-auto`} style={{ whiteSpace: 'pre-line' }}>
            {result.split('\n').map((line ,i)=>(
              <div key={i}>
                {line}
                </div>
            ))}
            </div>
        )
      }

    </div>
  );
}

export default Simpleinterest
