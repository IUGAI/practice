let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
    timedata: time,
    expensise: {},
    opitonalexpensis: {},
    icome:[],
    saving: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце?");
 a2 = prompt("Во сколько обойдется?");
 a3 = prompt("Введите необязательную статью расходов в этом месяце?")
 a4 = prompt("Во сколько обойдется?");
  

 appData.expensise.a2 = a2;
 appData.expensise.a3 = a4;

 alert(appData.budget / 30);