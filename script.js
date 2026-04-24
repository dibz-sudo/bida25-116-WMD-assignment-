function trackParcel() {
    let num = document.getElementById("trackingNumber").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerText = "Please enter a tracking number";
    } else {
        result.innerText = "Parcel " + num + " is in transit";
    }
}

function bookDelivery() {
    document.getElementById("bookMsg").innerText = "Booking submitted successfully!";
}