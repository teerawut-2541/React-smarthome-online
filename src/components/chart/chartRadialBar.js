// import React from 'react'
// import Chart from "react-apexcharts";

// function ChartRadialBar() {
//     const series = [80];

//     const options = {
//         chart: {
//           height: 350,
//           type: 'radialBar',
//           toolbar: {
//             show: false
//           }
//         },
//         plotOptions: {
//           radialBar: {
//             hollow: {
//               margin: 15,
//               size: '70%',
//               image:en,
//               imageWidth: 55,
//               imageHeight: 55,
//               imageClipped: false,
    
//             },
//             track: {
//               background: '#fff',
//               strokeWidth: '67%',
//               margin: 0, // margin is in pixels
//               dropShadow: {
//                 enabled: true,
//                 top: -3,
//                 left: 0,
//                 blur: 4,
//                 opacity: 0.35
//               }
//             },
        
//             dataLabels: {
//               show: false,
//               name: {
//                 offsetY: -10,
//                 show: false,
//                 color: '#888',
//                 fontSize: '17px'
//               },
//               value: {
//                 formatter: function(val) {
//                   return parseInt(val);
//                 },
//                 color: '#111',
//                 fontSize: '36px',
//                 show: false,
//               }
//             }
//           }
//         },
//         fill: {
//           type: 'gradient',
//           gradient: {
//             shade: 'dark',
//             type: 'horizontal',
//             shadeIntensity: 0.5,
//             // gradientToColors: ['#ff00d9'],
//             inverseColors: true,
//             opacityFrom: 1,
//             opacityTo: 1,
//             stops: [0, 100]
//           }
//         },
//         stroke: {
//           lineCap: 'round'
//         },
//         labels: ['Percent'],
//       }
    
//     return (
//         <div>
//             <Chart options={options} series={series} type="radialBar" height={150} /><br/>
//         </div>
//     )
// }

// export default ChartRadialBar
