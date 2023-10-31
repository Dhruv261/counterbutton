var countValue;

const getNumber = () => {
    countValue = document.getElementById("count-value");
    console.log("val: " + countValue.innerText);    
};


const increment = () => {
    getNumber();
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
}

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}
