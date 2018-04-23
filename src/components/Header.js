import React from 'react';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            month_name: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            day_name: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        }
    }
    calculate() {
        let d = document.getElementById('date').value;
        if(d) {
            d = d.split('-');
            d = new Date(d[0], d[1] - 1, d[2]);
        } else {
            d = new Date();
        }
        let month = d.getMonth();
        let year = d.getFullYear();
        let first_date = this.state.month_name[month] + " " + 1 + " " + year;
        let tmp = new Date(first_date).toDateString();
        let first_day = tmp.substring(0, 3);
        let day_no = this.state.day_name.indexOf(first_day);
        let days = new Date(year, month+1, 0).getDate();
        let calendar = this.get_calendar(day_no, days);
        document.getElementById("calendar-month-year").innerHTML = "";
        document.getElementById("calendar-dates").innerHTML = "";
        document.getElementById("calendar-month-year").innerHTML = this.state.month_name[month]+" "+year;
        document.getElementById("calendar-dates").appendChild(calendar);
    }
    get_calendar(day_no, days){
        let table = document.createElement('table');
        let tr = document.createElement('tr');    
        let c,r,td;
        for(c=0; c<=6; c++){
            td = document.createElement('td');
            td.innerHTML = "SMTWTFS"[c];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        tr = document.createElement('tr');
        for(c=0; c<=6; c++){
            if(c === day_no){
                break;
            }
            td = document.createElement('td');
            td.innerHTML = "";
            tr.appendChild(td);
        }
        var count = 1;
        for(; c<=6; c++){
            td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
            for(r=3; r<=7; r++){
            tr = document.createElement('tr');
            for(c=0; c<=6; c++){
                if(count > days){
                    table.appendChild(tr);
                    return table;
                }
                td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }
    changeColor() {
        let container = document.getElementById("calendar-container");
        if(this.state.toggle) {
            container.style.backgroundColor = "white";
            container.style.color = "black";
        } else {
            container.style.backgroundColor = "black";
            container.style.color = "white";
        }
        this.setState({
            toggle: !this.state.toggle
        });
    }
    render() {
        return (
            <div id="main">
                <input type="date" id="date"/>
                <button className="btn btn-primary" onClick={() => this.calculate()}>Search</button>
                <br />
                <br />
                <label className="switch">
                    <input id="checkbox" type="checkbox" onClick={() => this.changeColor()}/>
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}
