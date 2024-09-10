function followup(arr) {
    var insertValue = document.querySelectorAll('.line');
    insertValue.forEach(function (element, index) {
        if (arr[index]) {
            element.textContent = arr[index];
        }
    });
}
var arrString = ['ANNA', 'MARINA', 'ALIZ', 'LEONID'];
followup(arrString);
