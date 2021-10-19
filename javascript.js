'usestrict';
var money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
	budget: money,
    timedata: time,
    expensise: {},
    opitonalexpensis: {},
    icome:[],
    saving: false
};

 
for (var i = 0; i < 2;i++){
    var a = prompt("Введите обязательную статью расходов в этом месяце?",'');
    b = prompt("Во сколько обойдется?",'');
    if ((typeof(a)) == 'string' && (typeof(b)) == 'string' && a != null && b != null && a.length < 50){
        console.log("done!");
        appData.expensise[a] = b;
      }else{
           
      }
}
appData.moneyperday = appData.budget / 30;
 alert("Ежедневный бюджет:" + appData.budget / 30);

 if (appData.budget / 30 < 100){
     console.log("Минимальный уровень достатка");
} else if (appData.budget / 30 >= 100 && appData.budget / 30 < 2000){
    console.log("Средний уровень достатка");
}else if (appData.budget / 30 >= 2000) {
    console.log("Высокий уровень достатка");
}
