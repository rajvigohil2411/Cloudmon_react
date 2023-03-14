import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export default function Linechart(props) {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Request',
            data: [10, 30, 30, 140, 5, 10, 30, 30, 140, 5, 45, 98],
            borderColor: '#306dbe',
            borderWidth: 3,
            fill: false

        },
        {
            label: 'Consumption',
            data: [100, 3, 20, 14, 57, 110, 40, 130, 10, 65, 85, 18],

            borderColor: '#b3eddc',
            borderWidth: 3,

            fill: false

        }
        ]
    }
    const options = {
        plugins: {
            legend: true,
            Filler: true
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 50

                }
            },

            y: {

                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return '$' + value;
                    },
                    maxTicksLimit: 50
                }
            }


        },
        responsive: true,
        maintainAspectRatio: false
    }
    return (
        <div >

            <Line style={{ height: '350px' }}
                data={data}
                options={options}

            />


        </div>

    )
}