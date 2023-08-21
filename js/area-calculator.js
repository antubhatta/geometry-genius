function calculateTriangleArea(){
//    get triangle base value
    const baseField=document.getElementById('triangle-base')
    const baseValueTextString = baseField.value
    const base= parseFloat(baseValueTextString)
    baseField.value=''
    
    
    // get triangle height value
    const heightField=document.getElementById('height-base')
    const heightValueTextString=heightField.value
    const height=parseFloat(heightValueTextString)
    heightField.value=''
    

    const area =0.5 * base * height
   
    // show triangle area

    const triangleArea=document.getElementById('triangle-area')
    triangleArea.innerText=area

}
function calculateRectangleArea(){
    // get rectangle width
    const widthField =document.getElementById('rectangle-width')
    const widthValueString=widthField.value
    const width=parseFloat(widthValueString)

    // validate input: width and length
    if(isNaN(width) || isNaN(length)){
        alert('Invalid number')
        return
    }
    

    // get rectangle length
    const lengthField=document.getElementById('rectangle-length')
    const lengthValueString=lengthField.value
    const length=parseFloat(lengthValueString)
    
    const area= width * length
    // show rectangle area
    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText= area
}
// reusable function reduce duplicate code
function calculateParallelogramArea(){
     // console.log(base)
    
    const base= inputFieldValueById('parallelogram-base')
   
// console.log(height)
    const height= inputFieldValueById('parallelogram-height')
    // validate
    if(isNaN(base)||isNaN(height)){
        alert('please give a valid number')
        return
    }
    
    const area = base * height
    setElementInnerText('parallelogram-area',area)

    // add to calculation entry
    addToCalculationEntry('Parallelogram',area)

}
// reusable get input value field in number
function inputFieldValueById(fieldId){
    const inputField=document.getElementById(fieldId)
    const inputValueText=inputField.value
    const value=parseFloat(inputValueText)
    inputField.value=''
    return value;
}

function calculateEllipseArea(){
    const a= inputFieldValueById('ellipse-a')
    const b= inputFieldValueById('ellipse-b')
    const area= 3.1416 * a * b
    const areaTwoDecimal=area.toFixed(2)
    setElementInnerText('ellipse-area',areaTwoDecimal)
}
function calculateRhombusArea(){
    const d1=inputFieldValueById('rhombus-d1')
    const d2=inputFieldValueById('rhombus-d2')
    const area1= 0.5 * d1 * d2
    setElementInnerText('rhombus-area',area1)
}

function calculatePentagonArea(){
    const p= inputFieldValueById('pentagon-p')
    const b= inputFieldValueById('pentagon-b')
    const area2 = 0.5 * p * b
    setElementInnerText('pentagon-area',area2)
}

// reusable set span,p,div,etc text
function setElementInnerText(elementId,newValue){
    const element=document.getElementById(elementId)
    element.innerText=newValue
}

// add to calculation entry
// get the element where you want to add the dynamic
// create an element you want to add
// set innerHtml could be dynamic string
// append the created element as a child of the parent
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' +area)
    const calculationEntry=document.getElementById('calculation-entry')

    const p=document.createElement('p')
    p.innerHTML=areaType + ' ' +area
    calculationEntry.appendChild(p)
   
}

// data validation set the proper type of the input field (number,date,email)
// check type
// NAN means not a number 
// isNan is checking whether the input is not a number or not