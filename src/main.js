import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form.formystuff").submit(function(event){
    event.preventDefault();
    let monthInput = $("input#month").val();
    let dayInput = $("input#day").val();
    let yearInput = $("input#year").val();
    let dateStr = (monthInput + dayInput + yearInput)


  });
});




    var dayNum = new Date(dateStr);
