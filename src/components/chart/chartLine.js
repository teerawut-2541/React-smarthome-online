import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
function ChartLine() {
    const [chartData,setChartData] = useState({})

    const chart =()=>{
        setChartData({
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets:[
                {
                    label:'aunaun',
                    data:[20,20,23,30,20],
                    backgroundColor:[
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <div>
            <Line data={chartData}/>
        </div>
    )
}

export default ChartLine
