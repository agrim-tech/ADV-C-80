student_names = [];
var i = 0;
var remove_commas ;
function submit() {
    for (i = 1; i <= 5; i++) {
        display_student_array = [];
        var names = document.getElementById("name_of_the_student_" + i).value;
        console.log(names);
        student_names.push(names);
    }
    var g = 1;
    for (var j = 0; j <= 4; j++) {
        display_student_array.push("<h4>Roll No." + g + "       " + student_names[j] + "</h4>");
        console.log(display_student_array);
        g++;
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";


}
function sorting() {
    var t ="";
    document.getElementById("display_name_without_commas").innerHTML = t;
    student_names.sort();
    console.log(student_names);
    g = 1;
    display_student_array =[];
    for ( j = 0; j <= 4; j++) {
        display_student_array.push("<h4>Roll No." + g + "       " + student_names[j] + "</h4>");
        console.log(display_student_array);
        g++;
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    
   
}
