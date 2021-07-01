var wintb=[["Σουηδία","2000","Δανία","Olsen brothers","Fly On The Wings Of Love","195"],
["Δανία","2001","Εσθονία","Tanel Padar, Dave Benton & 2XL","Everybody","198"],
["Εσθονία","2002","Λετονία","Marie N","I wanna","176"],
["Λετονία","2003","Τουρκία","Sertab Erener","Everyway that I can","167"],
["Τουρκία","2004","Ουκρανία","Ruslana","Wild dances","280"],
["Ουκρανία","2005","Ελλάδα","Helena Paparizou","My number one","230"],
["Ελλάδα","2006","Φινλανδία","Lordi","Hard Rock Hallelujah","292"],
["Φινλανδία","2007","Σερβία","Marija Šerifović","Molitva","268"],
["Σερβία","2008","Ρωσία","Dima Bilan","Believe","272"],
["Ρωσία","2009","Νορβηγία","Alexander Rybak","Fairytale","387"],
["Νορβηγία","2010","Γερμανία","Lena","Satellite","246"],
["Γεμρανία","2011","Αζερμπαϊτζάν","Ell/Nikki","Running Scared","221"],
["Αζερμπαϊτζάν","2012","Σουηδία","Loreen","Euphoria","372"],
["Σουηδία","2013","Δανία","Emmilie de Forest","Only Teardrops","281"],
["Δανία","2014","Αυστρία","Conchita Wurst","Rise Like a Phoenix","290"],
["Αυστρία","2015","Σουηδία","Mans Zelmerlow","Heroes","365"],
["Σουηδία","2016","Ουκρανία","Jamala","1944","534"],
["Ουκρανία","2017","Πορτογαλία","Salvador Sobral","Amar Pelos Dois","758"],
["Πορτογαλία","2018","Ισραήλ","Netta","Toy","529"],
["Ισραήλ","2019","Ολλανδία","Duncan Laurence","Arcade","498"],
["Ακυρώθηκε","2020","-","-","-","-"],
["Ολλανδία","2021","Ιταλία","Maneskin","Zitti E Buoni","524"]   ]

            wintable = document.getElementById("winners");
            for(var i = 0; i < wintb.length; i++)
           {
               var newRow = wintable.insertRow(wintable.length);
               for(var j = 0; j < wintb[i].length; j++)
               {
                   var cell = newRow.insertCell(j);
                   cell.innerHTML = wintb[i][j];
               }
           }
function sortwintable(n) {
            var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
           table = document.getElementById("winners");
           switching = true;
           dir = "asc"; 
           while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                  shouldSwitch = false;
                 x = rows[i].getElementsByTagName("td")[n];
                 y = rows[i + 1].getElementsByTagName("td")[n];
     
                 if (dir == "asc") {
                       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                       shouldSwitch= true;
                       break;
                  }
                 } else if (dir == "desc") {
                       if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                           shouldSwitch = true;
                           break;
                    }
                    
                }
             }
             if (shouldSwitch) {
                      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                      switching = true;
                      switchcount ++;      
                 } else {
                      if (switchcount == 0 && dir == "asc") {
                          dir = "desc";
                         switching = true;
                    }
                    
            
                   }
                   
 }
}
var wincolumnhide = document.getElementById("clmnhide");
wincolumnhide.addEventListener("change", wingenerateData);
  function wingenerateData(event) {
    if (wincolumnhide.value == '1') {
      winhideCol0();
    }else if(wincolumnhide.value == '2'){
      winhideCol1();
    }else if(wincolumnhide.value == '3'){
      winhideCol2();
    }else if(wincolumnhide.value == '4'){
      winhideCol3();
    }else if(wincolumnhide.value == '5'){
      winhideCol4();
    }else if(wincolumnhide.value == '6'){
      winhideCol5();
    }else if(wincolumnhide.value == '7'){
        winrestore();
    }
  }

      function winhideCol0() {
        var col = 0;
    
        var tbl = document.getElementById("winners");
        if (tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {
                for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                    tbl.rows[i].cells[j].style.display = "";
                    if (j == col)
                        tbl.rows[i].cells[j].style.display = "none";
                }
            }
        }
    }
    function winhideCol1() {
      var col = 1;
  
      var tbl = document.getElementById("winners");
      if (tbl != null) {
          for (var i = 0; i < tbl.rows.length; i++) {
              for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                  tbl.rows[i].cells[j].style.display = "";
                  if (j == col)
                      tbl.rows[i].cells[j].style.display = "none";
              }
          }
      }
  }
  function winhideCol2() {
    var col = 2;

    var tbl = document.getElementById("winners");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == col)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
}
function winhideCol3() {
  var col = 3;

  var tbl = document.getElementById("winners");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
              if (j == col)
                  tbl.rows[i].cells[j].style.display = "none";
          }
      }
  }
}
function winhideCol4() {
    var col = 4;
  
    var tbl = document.getElementById("winners");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == col)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
  }
  function winhideCol5() {
    var col = 5;
  
    var tbl = document.getElementById("winners");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == col)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
  }

      
function winrestore(){
  var tbl = document.getElementById("winners");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
}
      }
    }
  }
  function choosewincoun() {
    let dropdown, table, rows, cells, country, filter;
    dropdown = document.getElementById("wincountry");
    table = document.getElementById("winners");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;
  
    for (let row of rows) { 
      cells = row.getElementsByTagName("td");
      country = cells[2] || null; 
      if (filter === "Επαναφορά" || !country || (filter === country.textContent)) {
        row.style.display = "";
      }
      else {
        row.style.display = "none";
      }
    }
  }
  wintable = document.getElementById("winners"); 
  if(localStorage.tableDatawin==undefined){localStorage.tableDatawin=wintable.innerHTML};
  wintable.innerHTML = localStorage.tableDatawin;      
function addrowtablew() {
var len = wintb.length
var tablew = document.getElementById("winners");
var row = tablew.insertRow(len+1);
var cell1win = row.insertCell(0);
var cell2win = row.insertCell(1);
var cell3win = row.insertCell(2);
var cell4win = row.insertCell(3);
var cell5win = row.insertCell(4);
var cell6win = row.insertCell(5);

cell1win.innerHTML = document.querySelector('#newCellwin1').value;
cell2win.innerHTML = document.querySelector('#newCellwin2').value;
cell3win.innerHTML = document.querySelector('#newCellwin3').value;
cell4win.innerHTML = document.querySelector('#newCellwin4').value;
cell5win.innerHTML = document.querySelector('#newCellwin5').value;
cell6win.innerHTML = document.querySelector('#newCellwin6').value;
localStorage.tableDatawin=tablew.innerHTML;
}

$(function(){
$('#btn_submit1').click(function(){
$('#btn_reset1').click();  
document.getElementById("newCellwin1").value=""
document.getElementById("newCellwin2").value=""
document.getElementById("newCellwin3").value=""
document.getElementById("newCellwin4").value=""
document.getElementById("newCellwin5").value=""
document.getElementById("newCellwin6").value=""
});
});
  var rectb=[["7","Ιρλανδία","1970, 1980, 1987, 1992, 1993, 1994, 1996"],
  ["6","Σουηδία","1974, 1984, 1991, 1999, 2012, 2015"],
  ["5","Γαλλία","1958, 1960, 1962, 1969, 1977"],
  ["5","Λουξεμβούργο","1961, 1965, 1972, 1973, 1983"],
  ["5","Ηνωμένο Βασίλειο","1967, 1969, 1976, 1981, 1997"],
  ["5","Ολλανδία","1957, 1959, 1969, 1975, 2019"],
  ["4","Ισραήλ","1978, 1979, 1998, 2018"],
  ["3","Νορβηγία","1985, 1995, 2009"],
  ["3","Δανία","1963, 2000, 2013"],
  ["3","Ιταλία","1964, 1990, 2021"],
  ["2","Ισπανία","1968, 1969"],
  ["2","Ελβετία","1956, 1988"],
  ["2","Γερμανία","1982, 2010"],
  ["2","Αυστρία","1966, 2014"],
  ["2","Ουκρανία","2004, 2016"],
  ["1","Μονακό","1971"],
  ["1","Βέλγιο","1986"],
  ["1","Γιουγκοσλαβία","1989"],
  ["1","Εσθονία","2001"],
  ["1","Λετονία","2002"],
  ["1","Τουρκία","2003"],
  ["1","Ελλάδα","2005"],
  ["1","Φινλανδία","2006"],
  ["1","Σερβία","2007"],
  ["1","Ρωσία","2008"],
  ["1","Αζερμπαϊτζάν","2011"],
  ["1","Πορτογαλία","2017"],
  
]

            rectable = document.getElementById("records");
            for(var i = 0; i < rectb.length; i++)
           {
               var newRow = rectable.insertRow(rectable.length);
               for(var j = 0; j < rectb[i].length; j++)
               {
                   var cell = newRow.insertCell(j);
                   cell.innerHTML = rectb[i][j];
               }
           }
           function sortrectable(n) {
            var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
           table = document.getElementById("records");
           switching = true;
           dir = "asc"; 
           while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                  shouldSwitch = false;
                 x = rows[i].getElementsByTagName("td")[n];
                 y = rows[i + 1].getElementsByTagName("td")[n];
     
                 if (dir == "asc") {
                       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                       shouldSwitch= true;
                       break;
                  }
                 } else if (dir == "desc") {
                       if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                           shouldSwitch = true;
                           break;
                    }
                    
                }
             }
             if (shouldSwitch) {
                      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                      switching = true;
                      switchcount ++;      
                 } else {
                      if (switchcount == 0 && dir == "asc") {
                          dir = "desc";
                         switching = true;
                    }
                    
            
                   }
                   
 }
}
var reccolumnhide = document.getElementById("recclmnhide");
reccolumnhide.addEventListener("change", recgenerateData);
  function recgenerateData(event) {
    if (reccolumnhide.value == '1') {
      rechideCol0();
    }else if(reccolumnhide.value == '2'){
      rechideCol1();
    }else if(reccolumnhide.value == '3'){
      rechideCol2();
    }else if(reccolumnhide.value == '4'){
        recrestore();
    }
  }

      function rechideCol0() {
        var col = 0;
    
        var tbl = document.getElementById("records");
        if (tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {
                for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                    tbl.rows[i].cells[j].style.display = "";
                    if (j == col)
                        tbl.rows[i].cells[j].style.display = "none";
                }
            }
        }
    }
    function rechideCol1() {
      var col = 1;
  
      var tbl = document.getElementById("records");
      if (tbl != null) {
          for (var i = 0; i < tbl.rows.length; i++) {
              for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                  tbl.rows[i].cells[j].style.display = "";
                  if (j == col)
                      tbl.rows[i].cells[j].style.display = "none";
              }
          }
      }
  }
  function rechideCol2() {
    var col = 2;

    var tbl = document.getElementById("records");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == col)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
}

      
function recrestore(){
  var tbl = document.getElementById("records");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
}
      }
    }
  }

  rectable = document.getElementById("records"); 
  if(localStorage.tableDatarec==undefined){localStorage.tableDatarec=rectable.innerHTML};
  rectable.innerHTML = localStorage.tableDatarec;      
function addrowtable() {
var len = rectb.length
var tabler = document.getElementById("records");
var row = tabler.insertRow(len+1);
var cell1rec = row.insertCell(0);
var cell2rec = row.insertCell(1);
var cell3rec = row.insertCell(2);

cell1rec.innerHTML = document.querySelector('#newCell1').value;
cell2rec.innerHTML = document.querySelector('#newCell2').value;
cell3rec.innerHTML = document.querySelector('#newCell3').value;
localStorage.tableDatarec=tabler.innerHTML;
}

$(function(){
$('#btn_submit').click(function(){
$('#btn_reset').click();  
document.getElementById("newCell1").value=""
document.getElementById("newCell2").value=""
document.getElementById("newCell3").value=""
});
});
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Wins'],
        ['Ιρλανδία', 7],
        ['Σουηδία', 6],
        ['Γαλλία', 5],
        ['Λουξεμβούργο', 5],
        ['Ηνωμένο Βασίλειο', 5],
        ['Ολλανδία', 5],
        ['Ισραήλ', 4],
        ['Νορβηγία', 3],
        ['Δανία', 3],
        ['Ιταλία', 3],
        ['Ισπανία', 2],
        ['Ελβετία', 2],
        ['Γερμανία', 2],
        ['Αυστρία', 2],
        ['Ουκρανία', 2],
        ['Μονακό', 1],
        ['Βέλγιο', 1],
        ['Γιουγκοσλαβία', 1],
        ['Εσθονία', 1],
        ['Λετονία', 1],
        ['Τουρκία', 1],
        ['Ελλάδα', 1],
        ['Φινλανδία', 1],
        ['Σερβία', 1],
        ['Ρωσία', 1],
        ['Αζερμπαϊτζάν', 1],
        ['Πορτογαλία', 1]
      ]);
    var options = {'title':'Ποσοστό Νικών των Χωρών', 'width':550, 'height':400};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
  ("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("servicew.js").then(register=>
    {
    console.log("SW Registerd!");
    console.log(registration);

}).catch(error => {
    console.log("SW Registerd Faild!");
    console.log(error);
});
}
  