'use strict'
let divElement = document.getElementById('sales');
function randomNumber(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;


}
//let randomHoursArray= []; 
let storeName = [];
let table = document.createElement('table');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];





function headerRow() {
  let article = document.createElement('article')
  divElement.appendChild(article);
  article.appendChild(table);

  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);


  let th1 = ' ';
  th1 = document.createElement('th');
  headingRow.appendChild(th1);
  for (let i = 0; i < hours.length; i++) {
    th1 = document.createElement('th');
    headingRow.appendChild(th1);
    th1.textContent = `${hours[i]}`;
    //   console.log(thElement);
  };
  th1.textContent = 'Daily location total';
}

function footerRow() {
  let lastRow = document.createElement('tr');
  table.appendChild(lastRow);

  let totaData = document.createElement('td');
  lastRow.appendChild(totaData);

  totaData.textContent = 'Total';

  for (let j = 0; j < 13; j++) {
    let tdL = document.createElement('td');
    let totalB = 0;
    for (let x = 0; x < storeName.length; x++) {
      totalB += storeName[x].randomHoursArray[j];
    }
    tdL.textContent = totalB;
    lastRow.appendChild(tdL);
  }
  let totalLastCell = 0;
  for (let y = 0; y < storeName.length; y++) {
    totalLastCell += storeName[y].total;
  }
  let totaData1 = document.createElement('td');
  lastRow.appendChild(totaData1);
  totaData1.textContent = totalLastCell;

}

function Location(countryName, min, max, avg, total, randomHoursArray) {

  this.userName = countryName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.randomHoursArray = randomHoursArray;
  this.total = total;
  storeName.push(this);

}

Location.prototype.custperhour = function () {

  let sum = 0;
  for (let i = 0; i < hours.length; i++) {

    sum = randomNumber(this.min, this.max) * this.avg;
    let calc = Math.floor(sum);
    this.randomHoursArray.push(calc);
    this.total += calc;

  }

}

Location.prototype.renderA = function () {
  let secondRow = document.createElement('tr');
  table.appendChild(secondRow);
  let datatable = document.createElement('td');
  secondRow.appendChild(datatable);
  datatable.textContent = this.userName;
  let td2 = ' ';
  for (let x = 0; x < hours.length; x++) {
    td2 = document.createElement('td');
    secondRow.appendChild(td2)
    td2.textContent = `${this.randomHoursArray[x]}`;

  }
  td2.textContent = this.total;

}
let Seattle = new Location('Seattle', 23, 65, 6.3, 0, []);

let Tokyo = new Location('Tokyo', 3, 24, 1.2, 0, []);

let Dubai = new Location('Dubai', 11, 38, 3.7, 0, []);

let Paris = new Location('Paris', 20, 38, 2.3, 0, []);

let Lima = new Location('Lima', 2, 16, 4.6, 0, []);



headerRow();

for (let i = 0; i < storeName.length; i++) {
  storeName[i].custperhour();
  storeName[i].renderA();
}

footerRow();





