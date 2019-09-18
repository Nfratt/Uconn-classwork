var firebaseConfig = {
    apiKey: "AIzaSyBVq4okF_i7quzLM_YyA1fjlyLcZo72R28",
    authDomain: "fsf-inclass-d1f19.firebaseapp.com",
    databaseURL: "https://fsf-inclass-d1f19.firebaseio.com",
    projectId: "fsf-inclass-d1f19",
    storageBucket: "fsf-inclass-d1f19.appspot.com",
    messagingSenderId: "59650777287",
    appId: "1:59650777287:web:d7e2db9b53c4a40d8c1ee2"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var path = 'empdb/'
var empName = '';
var role = '';
var startDate = '';
var monthsWorked = '';
var monthlyRate = '';
var totalBilled = '';
database.ref('empdb/').on('value', function (snapshot) {
    console.log(snapshot.val());
})
$("btn-submit").on("click", function (event) {
    console.log ('working')
    // Prevent form from submitting
    event.preventDefault();
    // Get the input values
    var empName = $('#employeename').val().trim();
    var role = $('#role').val().trim();
    var startDate = $('#startdate').val().trim();
    var role = $('#monthlyrate').val().trim();
    console.log(empName);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);
});
database.ref('empdb/').push({
    empName: empName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
});




