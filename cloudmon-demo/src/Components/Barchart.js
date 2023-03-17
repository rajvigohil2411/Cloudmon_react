import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


export default function Barchart(props) {
    console.log("Hello", props)
    const options = {

        title: {
            display: true,
            text: 'Bar Graph to show proficency1'
        },
        plugins: {
            legend: false,

        },
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                    barPercentage: 0.4
                },
                ticks: {
                    maxTicksLimit: 50,

                }
            },
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return '$' + value;
                    },
                    maxTicksLimit: 50,


                }
            }
        }

    }




    return (
        <div>

            <Bar style={{ height: 350 }}
                data={props.data} options={options} />


        </div>

    )
}