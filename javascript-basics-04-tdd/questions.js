
const stringSize = (text) => {
    return text.length; 


}
const replaceCharacterE = (text) => {
    return text.replace('e',' ');

}
const concatString = (text1, text2) => {
    return text1.concat(text2);

}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.slice(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim(" ");
}
const IsString = (text) => {
    if(typeof text === "string")
    return true;
else
return false;
}

const getExtension = (text) => {
    const extensionStart=text.indexOf(".")+1;
    const extensionEnd=text.length ;
    return text.slice(extensionStart,extensionEnd);

}
const countSpaces = (text) => {
    let count=0;
    for (let letter of text){
        if(letter === " "){
            count++;
        }
    }
    return count;

}
const InverseString = (text) => {
   

}

const power = (x, y) => {
    return Math.pow(x,y);

}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    const absoluteValues = array.map((num) => Math.abs(num));
    return absoluteValues;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius, 2));

}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab,ac);
}
const BMI = (weight, height) => {
    const result=weight/(height*height);
    return parseFloat(result.toFixed(2));
}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}