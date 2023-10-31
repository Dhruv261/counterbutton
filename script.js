var countValue;

const getNumber = () => {
    countValue = document.getElementById("count-value");
    console.log("val: " + countValue.innerText);    
};


function increment() {
    getNumber();
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
}

function decrement() {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}
