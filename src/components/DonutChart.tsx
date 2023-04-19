import React from 'react'
import Chart from "react-apexcharts"

const DonutChart = () => {

  const options = {
    labels: ["padaria", "fabricaBolo", "despesa", "casa"],
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut:{
          size: "55px"
        }
      }
    }
  }
  const serires = [2, 4, 5, 1]
  return (
    <div>
      <Chart 
      options={options}
      series={serires}
      type="donut"
      width="100%"
      height={500}
      />
    </div>
  )
}

export default DonutChart