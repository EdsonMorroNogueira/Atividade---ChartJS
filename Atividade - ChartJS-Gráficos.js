// --------------------------------------Gráfico de Linha -----------------------------

// Eixo X
const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

// Constante onde os dados dos gráficos são escritos
const data = {
    labels: labels,
    datasets: [{
        // Linha gráfico de Temperatura - Vermelho.
        label: 'Temperatura',
        data: [30, 29, 28, 25, 22, 23],
        borderColor: '#fe6383',
        backgroundColor: '#fe6383',
        borderWidth: 3
      },
      {
        // Linha gráfico de Umidade - Azul
        label: 'Umidade',
        data: [80, 82, 80, 85, 80, 83],
        borderColor: '#36a2eb',
        backgroundColor: '#36a2eb',
        borderWidth: 3
      }
    ]
};

//Configurar que tipo de gráfico e outras opções
const config = {
    type: 'line',
    data: data,
    options: {}
};

//Para fazer o Script plotar o gráfico na tag Canvas
const TempUmidlinha = new Chart(
    document.getElementById('TempUmidlinha'),
    config
);

// --------------------------------------Gráfico de Barras ----------------------------

// Eixo X
const labels2 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']

// Constante onde os dados dos gráficos são escritos
const data2 = {
    labels: labels2,
    datasets: [{
        //Barras gráfico temperatura - Vermelho
        label: 'Temperatura Média',
        data: [22, 24, 27, 23, 20, 18],
        backgroundColor: '#fd6483'
    },
    {
        //Barras gráfico umidade - Azul
        label: 'Umidade Média',
        data: [90, 89, 93, 87, 88, 82],
        backgroundColor: '#36a2eb'
    }
]
};

// Configurar que tipo de gráfico e outras opções
const config2 = {
    type: 'bar',
    data: data2,
    options: {},
    scales: {    
        y:{
        beginAtZero: true
    }
},
};

// Para fazer o script plotar o gráfico na tag Canvas
const TempUmidbarra = new Chart(
    document.getElementById('TempUmidbarra'),
    config2
);