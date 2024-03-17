let runScripts = () => {
  let chart_bars = document.getElementById("chart-bars");
  console.log(chart_bars);

  let icons = document.getElementsByTagName("i");
  console.log(icons);

  let cards = document.getElementsByClassName("card");
  console.log(cards);
};

let modifyText = () => {
  let listOfP = document.getElementsByTagName("p");
  let elementP = listOfP[3];

  elementP.innerHTML = "Dinero actual";

  let listOfH4 = document.getElementsByTagName("h4");
  let elementH4 = listOfH4[0];

  elementH4.innerHTML = "$301k";
};

let updateData = () => {
  let data = [
    {
      title: "Usuarios actuales",
      value: "3,200",
    },
    {
      title: "Nuevos clientes",
      value: "4,215",
    },
    {
      title: "Ventas",
      value: "$121,520",
    },
  ];

  let [users, clients, sales] = data;
  
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;
   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 
  
 let listOfElements = document.getElementsByClassName('text-end pt-1') 
 
 let [ , second, third, fourth ] = listOfElements;
 
 second.innerHTML = message_users;
 third.innerHTML = message_clients;
 fourth.innerHTML = message_sales;
};

let indicadores = () => {
    
    let data2 = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que el mes anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ];
    
      for (let i=0; i<4; i++){
        let calculo = ((data2[i].valor_actual - data2[i].valor_previo)*100/data2[i].valor_previo ).toFixed(2);
        data2[i].porcentaje = calculo;
        

        if(calculo>0)
        data2[i].clase = "text-success"
        else
        data2[i].clase = "text-danger"
      }            
      console.log(data2)

      let [money, users, clients, sales] = data2;
      
      let {porcentaje: porcentaje_money, clase: cambio_money , mensaje_tiempo: mensaje_money } = money;
      let {porcentaje: porcentaje_users, clase: cambio_users, mensaje_tiempo: mensaje_users } = users;
      let {porcentaje: porcentaje_clients, clase: cambio_clients, mensaje_tiempo: mensaje_clients } = clients;
      let {porcentaje: porcentaje_sales, clase: cambio_sales, mensaje_tiempo: mensaje_sales } = sales;        
      
      let message_money = `<p class="mb-0"><span class="text-sm ${cambio_money} font-weight-bolder">${porcentaje_money}% </span>${mensaje_money}</p>`;  
      let message_users = `<p class="mb-0"><span class="text-sm ${cambio_users} font-weight-bolder"> ${porcentaje_users}% </span> ${mensaje_users} </p>`;
      let message_clients = `<p class="mb-0"><span class="text-sm ${cambio_clients} font-weight-bolder"> ${porcentaje_clients}% </span> ${mensaje_clients} </p>`;
      let message_sales = `<p class="mb-0"><span class="text-sm ${cambio_sales} font-weight-bolder"> ${porcentaje_sales}% </span> ${mensaje_sales} </p>`;
         
   let listOfElements = document.getElementsByClassName('card-footer p-3') 
   
   let [first , second, third, fourth ] = listOfElements;
   
   first.innerHTML = message_money;
   second.innerHTML = message_users;
   third.innerHTML = message_clients;
   fourth.innerHTML = message_sales;
  
  };

runScripts();
modifyText();
updateData();
indicadores();
