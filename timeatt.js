function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Code matched = ${decodedText}`, decodedResult);
    document.getElementById("qr-reader-results").innerText = decodedText;
}

function onScanFailure(error) {
    // Handle on scan failure condition.
    console.log(`Scan failure: ${error}`);
}

window.onload = function() {
    var config = { fps: 10, qrbox: { width: 250, height: 250 } };
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", config, /* verbose= */ false);

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
};

/*hamgurger menu starts here*/
// script.js
document.getElementById('menuButton').addEventListener('click', function() {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.left === '0px') {
        menuContent.style.left = '-250px'; // Hide menu
    } else {
        menuContent.style.left = '0px'; // Show menu
    }
});