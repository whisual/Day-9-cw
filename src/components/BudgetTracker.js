import React, { useState } from 'react'
import Chart from "chart.js/auto"
import { Pie } from "react-chartjs-2"


const BudgetTracker = () => {
    const [expense, setExpense] = useState(50)
    const [saving, setSaving] = useState(50)
    const data = {
        labels: ['Expense', 'Saving'],
        datasets: [
            {
                label: '# of Votes',
                data: [expense, saving],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            },
        ],
    };

    return (
        <div>
            <div>
                <label htmlFor="">Expense : {expense}</label>
                <input type="range" min={0} max={100} value={expense} onChange={(e) => setExpense(Number(e.target.value))} />
            </div>
            <div>
                <label htmlFor="">Saving : {saving}</label>
                <input type="range" min={0} max={100} value={saving} onChange={(e) => setSaving(Number(e.target.value))} />
            </div>
            <Pie data={data} />;
        </div>
    )
}
export default BudgetTracker
