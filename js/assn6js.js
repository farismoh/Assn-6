function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect customer data from webpage
    var customerid = document.getElementById("custID").value;
    var customername = document.getElementById("cusname").value;
    var customercity = document.getElementById("custcity").value;
    
    //create string for parameter
    var newcustomer = '{"CustomerID":"' + customerid +'","CompanyName":"' + customername +'", "CustomerCity":"' + customercity + '" }';
    
    
    //Checking for AJAX
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
        
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "applicaton/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful"
        
    }
    else
    {
        
        document.getElementById("result").innerHTML = "The operation was not successful" + "<br>" + output.Exception;
    }
}


function  updateOrderAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var ordernumber = document.getElementById("ordernum").value;
    var shiptoname = document.getElementById("shipname").value;
    var shiptoaddress = document.getElementById("shipaddress").value;
    var shiptocity = document.getElementById("shipcity").value;
    var shiptocode = document.getElementById("shipcode").value;
                                        
    var updateshipping = '{"OrderID":"' + ordernumber + '","ShipAddress":"' + shiptoaddress + '","ShipCity":"' + shiptocity + '","ShipName":"' + shiptoname + '","ShipPostcode":"' + shiptocode+'"}';    //+ ',"ShipAddress":"' + shiptoaddress + '","ShipName":"' + shiptoname + '","ShipPostcode":"' + shiptocode + 
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var res = JSON.parse(objRequest.responseText);
            OperationResult_2(res);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(updateshipping);
}

function OperationResult_2(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("res").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("res").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}








function deleteCustomer()
{
    var getRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/customerID";
    
    var customerid = document.getElementById("custidee").value;
        
    var byecustomer = '{"CustomerID":"' + customerid + '"}';
    
    getRequest.onreadystatechange = function()
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var rez = JSON.parse(getRequest.responseText);
            OperationResult_3(rez);
            
        }
    }
    
    getRequest.open("GET",url,true);
    getRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    getRequest.send(byecustomer);
}

function OperationResult_3(rez)
{
    if (rez.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("rez").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("rez").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}





function Hidden()
{
    
    if (document.getElementById("menu").value == "Section 1")
    {
        document.getElementById("sec1").style.display = "inline";
        document.getElementById("sec2").style.display = "none";
        document.getElementById("sec3").style.display = "none";
        
    }
    else if (document.getElementById("menu").value == "Section 2")
    {
        document.getElementById("sec1").style.display= "none";
        document.getElementById("sec2").style.display = "inline";
        document.getElementById("sec3").style.display = "none";
    }
    else if (document.getElementById("menu").value == "Section 3")
    {
        document.getElementById("sec1").style.display = "none";
        document.getElementById("sec2").style.display = "none";
        document.getElementById("sec3").style.display = "inline";
    }
    else
    {
        document.getElementById("sec1").style.visibility = "hidden";
        document.getElementById("sec2").style.visibility = "hidden";
        document.getElementById("sec3").style.visibility = "hidden";
    }    
    
}