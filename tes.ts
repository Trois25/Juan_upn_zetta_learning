function combination(text:string,number1:number,number2:number):string { 
    return text.substring(number1, number2);
}

console.log(combination("Learning Typescript is different than Javascript",9,19));