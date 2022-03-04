
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$('#myList a').on('click', function (e) {
  e.preventDefault()
  $(this).tabs('show')
})

$('#myList a[href="#profile"]').tab('show')
$('#myList a[href="#messages"]').tab('show')
$('#myList a[href="#settings"]').tab('show')

