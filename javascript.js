'usestrict';
var money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
	budget: money,
    timedata: time,
    expensise: {},
    opitonalexpensis: {},
    income:[],
    saving: false,
    chosseExpensess:  function(){
        for (var i = 0; i < 2;i++){
            var a = prompt("Введите обязательную статью расходов в этом месяце?",'');
            b = prompt("Во сколько обойдется?",'');
            if ((typeof(a)) == 'string' && (typeof(b)) == 'string' && a != null && b != null && a.length < 50){
                console.log("done!");
                appData.expensise[a] = b;
              }else{
                    i = i -1;
              }
    }
   },
   detectbudget: function(){
    appData.moneyperday = appData.budget / 30;
    alert("Ежедневный бюджет:" + appData.budget / 30);
   },
   detectlevel: function(){
    if (appData.budget / 30 < 100){
        console.log("Минимальный уровень достатка");
   } else if (appData.budget / 30 >= 100 && appData.budget / 30 < 2000){
       console.log("Средний уровень достатка");
   }else if (appData.budget / 30 >= 2000) {
       console.log("Высокий уровень достатка");
   }
   },
   checksaving: function(){var save = +prompt("Какова сумма накоплений?");
   var proce = +prompt("Каков процент от накоплений");
   appData.monthincome = save/1000/12*proce;
   alert("сумма накоплений за месяц: " + appData.monthincome);},
  chooseOptExpenses: function(){
    for(var i = 0; i <= 3;i++){
        var statment = prompt("Статья необязательных расходов?");
        appData.opitonalexpensis[i] = statment;
       }
  },
  choseincome: function(){
      var items = prompt('что принесет дополнительный доход? (перечислите через заптую)','');
      if ((typeof(items) != 'string' || items == null)){
          alert("error");
      } else {
      appData.income = items.split(', ');
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
      }
      appData.income.forEach(function(items, i, mass){
          alert("Способы дополнитьного заработка" + "способ " + (i+1)  + ": " + items);
      });
      for (var key in appData){
          alert(key);
      }
  }

};










