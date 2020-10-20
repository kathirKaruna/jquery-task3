function agentDetails() {
 var isErrorThere = false;
		
		var aName = $('#aName').val();
		if(aName == null || aName == ""){
			$('#aNameErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#aNameErrId').html("");
		}

		var type = $('#type').val();
		if(type == null || type == ""){
			$('#typeErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#typeErrId').html("");
		}
 
		var add1 = $('#add1').val();
		if(add1 == null || add1 == ""){
			$('#add1ErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#add1ErrId').html("");
		}

		var add2 = $('#add2').val();
		if(add2 == null || add2 == ""){
			$('#add2ErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#add2ErrId').html("");
		}
		
		var country = $('#country').val();
		if(country == null || country == ""){
			$('#countryErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#countryErrId').html("");
		}

		var zCode = $('#zCode').val();
		if(zCode == null || zCode == ""){
			$('#zCodeErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#zCodeErrId').html("");
		}
		var currency = $('#currency').val();
		if(currency == null || currency == ""){
			$('#currencyErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#currencyErrId').html("");
		}

		var cRegNo = $('#cRegNo').val();
		if(cRegNo == null || cRegNo == ""){
			$('#cRegNoErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#cRegNoErrId').html("");
		}

		var tRegNo = $('#tRegNo').val();
		if(tRegNo == null || tRegNo == ""){
			$('#tRegNoErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#tRegNoErrId').html("");
		}

		var accName = $('#accName').val();
		if(accName == null || accName == ""){
			$('#accNameErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#accNameErrId').html("");
		}

		var accNo = $('#accNo').val();
		if(accNo == null || accNo == ""){
			$('#accNoErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#accNoErrId').html("");
		}
   
		var bName = $('#bName').val();
		if(bName == null || bName == ""){
			$('#bNameErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#bNameErrId').html("");
		}

		var branch = $('#branch').val();
		if(branch == null || branch == ""){
			$('#branchErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#branchErrId').html("");
		}

        var sCode = $('#sCode').val();
		if(sCode == null || sCode == ""){
			$('#sCodeErrId').html("Required");
			isErrorThere = true;
		}else{
			$('#sCodeErrId').html("");
		}
         
         var gridSize = $('#itemGridSize').val();
     
            for(k=1;k<=gridSize;k++){
            var name =$("#name_"+k).val(); 
            if(name == null || name == ""){
               $("#nameErrId_"+k).html("Required");
               isErrorThere = true;
            }else{
               $("#nameErrId_"+k).html("");
            }

             var email =$("#email_"+k).val(); 
            if(email == null || email == ""){
               $("#emailErrId_"+k).html("Required");
               isErrorThere = true;
            }else{
               $("#emailErrId_"+k).html("");
            }

             var phNo =$("#phNo_"+k).val(); 
            if(phNo == null || phNo == ""){
               $("#phNoErrId_"+k).html("Required");
               isErrorThere = true;
            }else{
               $("#phNoErrId_"+k).html("");
            }

             var mbNo =$("#mbNo_"+k).val(); 
            if(mbNo == null || mbNo == ""){
               $("#mbNoErrId_"+k).html("Required");
               isErrorThere = true;
            }else{
               $("#mbNoErrId_"+k).html("");
            }
        }

       
        if(isErrorThere){
               return false;
            }else{
            	  inserTable();
            }
   
}

var sNo = 1;
var customId = 1;
var agentArray = [];
var agentIndex = 2;

function inserTable(){
  var contactArray = [];

    var id = $('#id').val();
    if(null != id && id != ""){
       for(i = 0; i < agentArray.length; i++){
		var obj = agentArray[i];
		if(obj.id == id){
	     obj.BasicDetails.aName = $('#aName').val();
	     obj.BasicDetails.type = $('#type').val();
	     obj.BasicDetails.add1 = $('#add1').val();
	     obj.BasicDetails.add2 = $('#add2').val();
	     obj.BasicDetails.country = $('#country').val();
	     obj.BasicDetails.zCode = $('#zCode').val();
	     obj.BasicDetails.currency = $('#currency').val();
	     obj.BasicDetails.notes = $('#notes').val();
	     obj.BasicDetails.cRegNo = $('#cRegNo').val();
	     obj.BasicDetails.tRegNo = $('#tRegNo').val();

	     obj.FinanceDetails.accName = $('#accName').val();
	     obj.FinanceDetails.accNo = $('#accNo').val();
	     obj.FinanceDetails.bName = $('#bName').val();
	     obj.FinanceDetails.branch = $('#branch').val();
	     obj.FinanceDetails.sCode = $('#sCode').val(); 
	     for(var k = 1; k < agentIndex; k++){
    		var contactObj = {
    			"name":$('#name_'+k).val(),
    			"email":$('#email_'+k).val(),
    			"phNo":$('#phNo_'+k).val(),
    			"mbNo":$('#mbNo_'+k).val()
    		};
    		contactArray.push(contactObj);
    	}
    	obj.Contacts = contactArray;
          agentArray[i] = obj;
          addTable();
          $('#contacts').empty();
	       $('input[type="text"],select,textarea').val("");
		}
	}
    }else{
    	for(var k = 1; k < agentIndex; k++){
    		var contactObj = {
    			"name":$('#name_'+k).val(),
    			"email":$('#email_'+k).val(),
    			"phNo":$('#phNo_'+k).val(),
    			"mbNo":$('#mbNo_'+k).val()
    		};
    		contactArray.push(contactObj);
    	}
		  var agentObj = {
		  	  "sNo":sNo,
		  	  "id":customId,
		  	  "BasicDetails":{
			  	  	"aName":$('#aName').val(),
			  	  	"type":$('#type').val(),
			  	  	"add1":$('#add1').val(),
			  	  	"add2":$('#add2').val(),
			  	  	"country":$('#country').val(),
			  	  	"zCode":$('#zCode').val(),
			  	  	"currency":$('#currency').val(),
			  	  	"notes":$('#notes').val(),
			  	  	"cRegNo":$('#cRegNo').val(),
			  	  	"tRegNo":$('#tRegNo').val(),
		  	  },
		  	  "FinanceDetails":{
		  	  	    "accName":$("#accName").val(),
		  	  	    "accNo":$("#accNo").val(),
		  	  	    "bName":$("#bName").val(),
		  	  	    "branch":$("#branch").val(),
		  	  	    "sCode":$("#sCode").val(),
		  	  },
		  	  Contacts:contactArray	  

		  };
		  agentArray.push(agentObj);
		  addTable();
		  sNo++;
		  customId++;
			 $('#contacts').empty();
			 $('input[type="text"],select,textarea').val("");
   }
     cloning();
}

function editDetail(id){
	for(i = 0; i < agentArray.length; i++){
		var obj = agentArray[i];
		if(obj.id == id){
			$('#id').val(obj.id); 
	        $('#aName').val(obj.BasicDetails.aName);
	        $('#type').val(obj.BasicDetails.type);
	        $('#add1').val(obj.BasicDetails.add1);
	        $('#add2').val(obj.BasicDetails.add2);
	        $('#country').val(obj.BasicDetails.country);
	        $('#zCode').val(obj.BasicDetails.zCode);
	        $('#currency').val(obj.BasicDetails.currency);
	        $('#notes').val(obj.BasicDetails.notes);	
	        $('#cRegNo').val(obj.BasicDetails.cRegNo);
	        $('#tRegNo').val(obj.BasicDetails.tRegNo);
	        $("#accName").val(obj.FinanceDetails.accName);
	        $("#accNo").val(obj.FinanceDetails.accNo);
	        $("#bName").val(obj.FinanceDetails.bName);
	        $("#branch").val(obj.FinanceDetails.branch);
	        $("#sCode").val(obj.FinanceDetails.sCode);
	        contactsLists(obj.Contacts);
		}
	}
}

function contactsLists(cList){ 
	$('#contacts').empty();
	agentIndex =1;
	var branch = "";
	for(var k = 0; k < cList.length; k++){
		var branchName = cList[k];
		branch = branch +'<div class="row"><div class="col-2 form-group"><input type="text" id="name_'+agentIndex+'" name="name" class="form-control mt-2 ml-3" placeholder="Name" value="'+branchName.name+'" style="border:1px solid #ced4da;"><span id="nameErrId_'+agentIndex+'" class="required ml-4 font-weight-bolder"></span></div><div class="col-2 form-group"><input type="text" id="email_'+agentIndex+'" name="email" class="form-control ml-2 mt-2" placeholder="Enter Email" value="'+branchName.email+'" style="border:1px solid #ced4da;"><span id="emailErrId_'+agentIndex+'" class="required ml-2 font-weight-bolder"></span></div><div class="col-2 form-group"><input type="text" id="phNo_'+agentIndex+'" name="phNo" class="form-control ml-1 mt-2" placeholder="Phone No" value="'+branchName.phNo+'" style="border:1px solid #ced4da;"><span id="phNoErrId_'+agentIndex+'" class="required ml-2 font-weight-bolder"></span></div><div class="col-2 form-group"><input type="text" id="mbNo_'+agentIndex+'" name="mbNO" class="form-control ml-1 mt-2" placeholder="Mobile No" value="'+branchName.mbNo+'" style="border:1px solid #ced4da;"><span id="mbNoErrId_'+agentIndex+'" class="required ml-2 font-weight-bolder"></span></div><i class="material-icons remove mt-3 ml-3" style="font-size:30px;color:blue;cursor:pointer;" href="javascript: void(0);" >delete</i></div>';
		agentIndex++;
	}
 	$('#contacts').append(branch);
   
}

function deleteRow(id){
  var emptyArray = [];
	for(i = 0; i < agentArray.length; i++){
		var obj = agentArray[i];
		if(obj.id != id){
		 emptyArray.push(obj);
		}
	}
	agentArray = emptyArray;
	addTable();
}