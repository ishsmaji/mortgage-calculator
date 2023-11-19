import React, { Fragment } from "react";
import Slidercomponent from "./common/Slidercomponent";

const Sliderselect = ({ data, setData }) => {
  console.log(data);
  const bank_limit = 10000;
  return (
    <>
      <Slidercomponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultvalue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment:value * 0.2,
             loanAmount:value * 0.8,
            homeValue: value,
          })
        }
        unit="$"
        amount={data.homeValue}
      />

      <Slidercomponent
        label="DownPayment"
        min={1}
        max={data.homeValue}
        defaultvalue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount:(data.homeValue-value),
            downPayment: value,
          })
        }
        unit="$"
        amount={data.downPayment}
      />

      <Slidercomponent
        label="Loan Amount"
        min={1}
        max={data.homeValue}
        defaultvalue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => 
          setData({
            ...data,
            downPayment:(data.homeValue-value),
            loanAmount: value,
            })}
        unit="$"
        amount={data.loanAmount}
      />
      <Slidercomponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultvalue={data.interestRate}
        value={data.interestRatee}
        step={0.5}
        onChange={(e, value) => setData({
          ...data,
          interestRate:value
        })}
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
};

export default Sliderselect;
