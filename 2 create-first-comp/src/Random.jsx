function Random(){
    let number = Math.random() *100;
    return <h1 style={{'backgroundColor':'#576691'}}>
        Random Number is : {Math.round(number)}
    </h1>
}

export default Random;