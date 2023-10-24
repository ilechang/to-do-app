
$(window).on("load", load)
$(document).on("click", "#add", add)
$(document).on("click", "#remove", remove)
$(document).on("click", "#list li", select)


function add(){
    // alert("add");
    // save()
    let text = $("#text").val();
    let html="<li class='list-group-item ' >"+text+"</li>";
    $("#list").append(html);
    $("#text").val("");
    save();
}

function remove(){
    // alert("remove");
    $("#list li.active").remove();
    save();
}

function save(){
    // alert("saved")
    var html = $("#list").html();
    localStorage.setItem("todo",html)
}

function select(){
    // alert("select")
    $(this).toggleClass("active");
}

function load(){
    // alert("load")
    var data = localStorage.getItem("todo");
    $("#list").html(data);
}
