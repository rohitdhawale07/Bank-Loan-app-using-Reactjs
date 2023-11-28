import "./App.css";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function App() {
  const [homeValue, setHomeValue] = useState(4000);
  const [downPayment, setDownPayment] = useState(800);
  const [loan, setLoan] = useState(1200);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(5);

  const monthlyInterestRate = interest / 12 / 100;
  const totalPayments = tenure * 12;
  const monthlyPayment =
    (loan *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments))) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  const totalPaid = monthlyPayment * totalPayments;
  const totalInterest = totalPaid - loan;
  const totalPrincipal = loan;

  const data = {
    labels: ["Interest", "Principal"],
    datasets: [
      {
        label: "# of Votes",
        data: [totalInterest, totalPrincipal],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <>
      <nav className="bg-blue-500 p-3">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold">Bank Of React</h1>
        </div>
      </nav>
      <div className="container mx-auto p-4 flex">
        {/* Left side with input fields */}
        <div className="w-1/2 pr-4 mr-10">
          <div className="mb-4 shadow-md p-4 bg-white rounded-md">
            <label className="block text-lg font-semibold mb-2">
              Home Value: Rs {homeValue}
            </label>
            <input
              className="w-full appearance-none h-4 rounded-full bg-blue-200 slider-thumb-blue focus:outline-none focus:shadow-outline-blue"
              type="range"
              min="1000"
              max="10000"
              step={100}
              value={homeValue}
              onChange={(e) => setHomeValue(Number(e.target.value))}
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="mr-2">Rs 1000</span>{" "}
              <span className="ml-2">Rs 10000</span>
            </div>
          </div>
          <div className="mb-4 shadow-md p-4 bg-white rounded-md">
            <label className="block text-lg font-semibold mb-2">
              Down Payment : Rs {downPayment}{" "}
            </label>
            <input
              className="w-full appearance-none h-4 rounded-full bg-blue-200 slider-thumb-blue focus:outline-none focus:shadow-outline-blue"
              type="range"
              min="0"
              max="4000"
              step={50}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="mr-2">Rs 0</span>{" "}
              <span className="ml-2">Rs 4000</span>
            </div>
          </div>
          <div className="mb-4 shadow-md p-4 bg-white rounded-md">
            <label className="block text-lg font-semibold mb-2">
              Loan Amount : Rs {loan}{" "}
            </label>
            <input
              className="w-full appearance-none h-4 rounded-full bg-blue-200 slider-thumb-blue focus:outline-none focus:shadow-outline-blue"
              type="range"
              min="100"
              max="5200"
              step={100}
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="mr-2">Rs 100</span>{" "}
              <span className="ml-2">Rs 5200</span>
            </div>
          </div>
          <div className="mb-4 shadow-md p-4 bg-white rounded-md">
            <label className="block text-lg font-semibold mb-2">
              Interest rate : % {interest}{" "}
            </label>
            <input
              className="w-full appearance-none h-4 rounded-full bg-blue-200 slider-thumb-blue focus:outline-none focus:shadow-outline-blue"
              type="range"
              min="2"
              max="18"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="mr-2">% 2</span>{" "}
              <span className="ml-2">% 18</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Tenure :{" "}
            </label>
            <select
              className="block  w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
              defaultValue={5}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
            >
              <option value={5}>5 Years</option>
              <option value={10}>10 Years</option>
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={25}>25 Years</option>
            </select>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-xl font-semibold text-center mb-5">
            Monthly Payment: {monthlyPayment.toFixed(2)}
          </div>
          <div className="w-3/4 flex justify-center flex-col items-center">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
