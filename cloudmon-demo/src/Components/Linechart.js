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

    const options = {
        plugins: {
            legend: false,
            Filler: true
        },
        pointRadius: '0',
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
            {props.component_name === 'Request vs Consumption' && <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '90%' }}>
                    <Line style={{ height: '290px' }}
                        data={props.data}
                        options={options}

                    />
                </div>

                <div style={{ justifyContent: 'center', padding: '30px' }}>
                    <ul>
                        <li>Request</li>
                        <li>Consumption</li>
                    </ul>
                </div>

            </div>}
            {props.component_name === 'GKE Cost' && <div>
                <Line style={{ height: '300px' }}
                    data={props.data}
                    options={options}

                />


            </div>}
        </div>

    )
}