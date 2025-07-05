import React, { useRef } from 'react'
function Stockaverage() {
  const x1 = useRef();
  const y1 = useRef();
  const x2 = useRef();
  const y2 = useRef();
  const res1 = useRef();
  const res2 = useRef();
  const res3 = useRef();
  const ans1 = useRef();
  const ans2 = useRef();
  const para = useRef();

  function myfunc(e) {
    console.log('test');
    let input1 = x1.current.value;
    let input2 = y1.current.value;
    let input3 = x2.current.value;
    let input4 = y2.current.value;
    console.log(input1, input2, input3, input4);
    var errMsg = '';

    if (input1 == '' || input2 == '' || input3 == '' || input4 == '') {
      errMsg = 'All feilds R required';
    } else if (
      isNaN(input1) ||
      isNaN(input2) ||
      isNaN(input3) ||
      isNaN(input4)
    ) {
      errMsg = 'all Values must be Number';
    } else {
      input1 = Number(input1);
      input2 = Number(input2);
      input3 = Number(input3);
      input4 = Number(input4);

      var result1 = input1 * input3;
      var result2 = input2 * input4;

      ans1.current.innerHTML = result1;
      ans2.current.innerHTML = result2;

      var totalUnits = input1 + input2;
      var totalAmount = result1 + result2;
      var avgaPrice = totalAmount / totalUnits;

      res1.current.innerHTML = totalUnits;
      res3.current.innerHTML = totalAmount;
      res2.current.innerHTML = avgaPrice.toFixed(2);
      para.current.innerHTML = errMsg;
    }
  }
  return (
    <div>
      <div class="container m-10">
        <h1 className="text-center">Stock Average Calculator</h1>
        <table
          border="1"
          className="w-50 text-center border mx-auto m-5 rounded bg-light "
        >
          <tr>
            <td>
              <input
                type="text"
                ref={x1}
                placeholder="units"
                className="mt-2 form-control"
              />
            </td>
            <td>
              <input
                type="text"
                ref={y1}
                placeholder="units"
                className="mt-2 form-control"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input type="text" ref={x2} placeholder="Price par share" className='form-control'/>
            </td>
            <td>
              <input type="text" ref={y2} placeholder="Price Par share"  className='form-control'/>
            </td>
          </tr>

          <tr>
            <td ref={ans1}></td>
            <td ref={ans2}> </td>
          </tr>

          <tr>
            <td colSpan="2">
              Total units: <span ref={res1}></span>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              Average Price: <span ref={res2}></span>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              Total Amount: <span ref={res3}></span>
            </td>
          </tr>

          <tr>
            <td colSpan="2" className="text-center">
              <button className="btn btn-sm bg-success m-3" onClick={myfunc}>
                Calculator
              </button>
            </td>
          </tr>

          <tr>
            <td colSpan="2" ref={para}></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Stockaverage;
