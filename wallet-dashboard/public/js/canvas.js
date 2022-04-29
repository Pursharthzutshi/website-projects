let myChart = document.getElementById("myChart").getContext("2d");
let myNewChart = document.getElementById("mySecondChart").getContext("2d");

let secondChart = new Chart(myNewChart, {
    type: "line",
    data: {
        labels: ["Boston", "Boston", "Boston", "Boston", "Boston", "Boston"],
        datasets: [{
            label: "pie",
            data: [
                212121,
                212121,
                212121,
                212121,
                8812121,
                212121,
                612121,
                112141,
                212121
            ],
            backgroundColor: [
                "yellow",
                "green",
                "red",
                "blue",
                "pink"
            ]
        }]
    }
})