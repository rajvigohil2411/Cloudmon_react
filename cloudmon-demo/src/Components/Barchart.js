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


export default function Barchart() {
    const labels = ['1', '2', '3', '4', '5', '6', '7'];

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 78],
            backgroundColor: [
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)'
            ],
            borderColor: [
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)',
                'rgba(48,109,190)'
            ],
            borderWidth: 1,
            barThickness: 4,
            barPercentage: 0.9,
            pointStyle: 'circle'

        }]
    };
    const options = {

        title: {
            display: true,
            text: 'Bar Graph to show proficency1'
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
        <div >

            <Bar style={{ height: 350 }}
                data={data} options={options} />


        </div >

    )
}