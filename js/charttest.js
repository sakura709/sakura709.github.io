// htmlからグラフを描画する要素（canvas）を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'hogehoge', 'hogehoge2'],
        datasets: [
            {
                type: 'bar',
                label: 'hogehoge',
                data: [21, 31, 53, 5, 100, 151],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 259, 64, 0.2)',
                ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
     　　}
    }
});