/**
 * Created by carlosgonzalez on 10/25/16.
 */
console.log("hey");
// var models = require('./models');
// var randow = require();

// models.beer.findAll({
//
// })
// // connect the findAll to this .then
//     .then(function(beer) {
//         // grab the user info from our req.
//         // How is it in our req?
//         // This info gets saved to req via the users_controller.js file.
//     console.log(beer);
//
//         });


var dataSource = {


    // data: [
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 7.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 8.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 8.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "1",
    //         "ProductName": "name1",
    //         "UnitPrice": 8.5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     },
    //     {
    //         "ProductID": "2",
    //         "ProductName": "name1",
    //         "UnitPrice": .5,
    //         "Qty": 1
    //     }
    //
    // ]
};


$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: {
                    url: "http://localhost:3000/list",
                    dataType: "jsonp"
                },

            },
            // pageSize: 50
        },

        height: 350,
        // overflow:hidden,
        groupable: false,
        sortable: true,
        // pageable: {
        //     refresh: true,
        //     pageSizes: true,
        //     buttonCount: 15
        // },
        columns: [{
            field: "result[0].id",
            title: "id",
            width: 300
        }, {
            field: "ProductName",
            title: "Contact Title",
            width: 300
        }, {
            field: "CompanyName",
            title: "Company Name",
            width: 300
        }, {
            field: "Country",
            width: 300
        }]
    });

    console.log(dataSource);

});
