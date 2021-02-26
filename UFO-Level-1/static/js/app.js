// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

var filter_button = d3.select("#filter-btn");
var filter_box = d3.select(".form-control");
var filter = d3.select("form");


filter_button.on("click", makeTable);
filter.on("submit", makeTable);

function makeTable() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    d3.selectAll("tr").remove(); 

    // Select the desired filter
    var filter_date = filter_box.property("value");

    tableData.forEach(function(sighting) {
        // selects only data from the filter date
        if (sighting.datetime == filter_date) {

            // makes new row in table
            var row = tbody.append("tr");

            // adds data to each cell of row 
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        };
      });
  };




