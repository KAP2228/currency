async function convertCurrency() {
    let amount = document.getElementById("amount").value;  // Get user input
    let fromCurrency = "USD";
    let toCurrency = "INR";

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    let data = await response.json();
    let rate = data.rates[toCurrency];

    let convertedAmount = (parseFloat(amount) * rate).toFixed(2);

    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    
    // Show message container
    document.querySelector(".msg-container").classList.remove("hide");
}

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("amount").value = "";  // Clear input
    document.getElementById("result").innerText = ""; // Clear result
    document.querySelector(".msg-container").classList.add("hide"); // Hide message
});
