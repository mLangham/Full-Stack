
// jQuery
    $(function(){

        // if addItems_cat0 selected
        $('#select1').on('change', function() {
            var target = "#select2";
            var selection = $(this).val();
            
            // encode characters such as ?,=,/,&,: to pass through URL
            var selection_encoded = encodeURIComponent(selection);

            var xhttp;
            xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                    // pass back in set value
                    var AJAXresponse = this.responseText;
                    var obj = JSON.parse(AJAXresponse);

                    // enable select2
					$("#select2").prop("disabled", false);

					// remove current options
					$('#select2').find('option').remove().end();

                    // loop and append new desired options list
                    $.each(obj, function(i, value){
                        $(target)
                        .append($('<option>', { value : value.machine_name0 })
                        .text(value.machine_name0)
                        ); 
                    });
                    
                }
            }

            xhttp.open("GET", "handle_DynamicSelect.php?selection="+selection_encoded, true);
            xhttp.send();

        });


        $('#select2').on('change', function() {
        	var selection2 = $(this).val();
        	alert("You have selected "+selection2);
        });

    });