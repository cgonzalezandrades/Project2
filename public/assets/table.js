/**
 * Created by carlosgonzalez on 10/25/16.
 */
var models = require('../../models');

var dataSource = {
    data: [
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 7.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 8.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 8.5,
            "Qty": 1
        },
        {
            "ProductID": "1",
            "ProductName": "name1",
            "UnitPrice": 8.5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        },
        {
            "ProductID": "2",
            "ProductName": "name1",
            "UnitPrice": .5,
            "Qty": 1
        }

    ]
};


$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: dataSource,
        // {
        //     type: "odata",
        //     transport: {
        //         read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
        //     },
        //     // pageSize: 50
        // },
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
            field: "ProductID",
            title: "",
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
});
