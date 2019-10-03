// dayoftheweek(Num){
//     if Num=1
//         console.log"monday"
//     if num=2
//         console.log "tuesday"
//     if num 3 
//         console.log "wednesday"
//     else
//         console.log "invalid"
// }
var day = ["monday", "tuesday", "wed", "thur", "fri", "sat", "sun"];
ChooseDay = function(arg) {
   pickDay = arg - 1;
   return day[pickDay];
}

