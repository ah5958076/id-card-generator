let fileInput = document.querySelector("input[type='file']");

fileInput.addEventListener("change", (e) => {
  let file = e.target?.files[0];
  if (file && file.type.toLowerCase().includes("image")) {
    console.log(file);
    const url = URL.createObjectURL(file);
    document.querySelector(".user-image img").src = url;
  }
});


const generateBarcode = () => {
  let userid = document.getElementById("userID").innerHTML;
  JsBarcode("#barcode", userid);
}