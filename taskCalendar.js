
function taskCheck() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Finish your assignments");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: Workout");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: Doing Household Chores");
            break;
        case "Thursday":
            alert("Your task for Thursday is: Study");
            break;
        case "Friday":
            alert("Your task for Friday is: Play Online Games");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Workout");
            break;
        case "Sunday":
            alert("Your task for Sunday is: Travel");
            break;
        default:
            alert("Please only enter a day of a week using sentence case format only.");
    }
}
