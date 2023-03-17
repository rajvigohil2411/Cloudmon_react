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

export default function Piechart() {
    const data = {
        labels: ['CN1', 'CN2', 'CN3', 'CN4', 'CN5'],
        datasets: [{
            label: 'Cost by Namespace',
            data: [10, 20, 30, 40, 50],
            backgroundColor: ['#7be0c3', '#255797', '#306dbe', '#438fbe', '#64bdd7'],
            borderColor: ['#7be0c3', '#255797', '#306dbe', '#438fbe', '#64bdd7'],

        }]
    }
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
                data={data}
                options={options}
            />


        </div>

    )
}
