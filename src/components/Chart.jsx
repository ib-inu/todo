import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = () => {

    const theme = useSelector((state) => state.user.theme);
    const todos = useSelector((state) => state.todos.todos);
    const completedTasks = todos.filter(todo => todo.completed).length;
    const pendingTasks = todos.length - completedTasks;

    const data = {
        labels: ['Pending', 'Done'],
        datasets: [
            {
                data: [pendingTasks, completedTasks],
                backgroundColor: theme === "light" ? ['green', 'black'] : ["#3F9142", "#A0EDA4"],
                hoverBackgroundColor: ['#3F9142', '#333333'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
            }}
        >
            <div
                style={{
                    width: '80%',
                    maxWidth: '400px',
                    height: '250px',
                }}
            >
                <Doughnut data={data} options={options} />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '400px',
                    gap: '20px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: `${theme === "light" ? "green" : "#3F9142"}`,
                            borderRadius: '50%',
                        }}
                    ></div>
                    <span style={{ fontSize: '12px' }}>Pending</span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: `${theme === "light" ? "black" : "#A0EDA4"}`,
                            borderRadius: '50%',
                        }}
                    ></div>
                    <span style={{ fontSize: '12px' }}>Done</span>
                </div>
            </div>
        </div>
    );
};

export default TaskChart;
