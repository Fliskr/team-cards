export default function readFile(input, callback) {
    const file = document.querySelector(input).files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        callback(reader.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    } 
}
