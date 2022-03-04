var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$('#list-home a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#list-home a[href="#list-home"]').tab('show')