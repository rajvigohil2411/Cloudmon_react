import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement,
    Tooltip,
    Legend)

export default function Piechart(props) {

    const options = {
        aspectRatio: 1,

        label: {
            display: false
        },

        cutout: '65%',
        plugins: {
            legend: false,
            Filler: true
        }
        //responsive: true
    }
    return (
        <div style={{ padding: '20px' }}>
            <Doughnut
                data={props.data}
                options={options}
            />


        </div>

    )
}
