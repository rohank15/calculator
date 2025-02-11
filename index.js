function updateDisplay(value)
{
    if(document.getElementById("display").value === "Infinity")
    {
        display.value = "";
        display.value = value;
    }
    else
    {
        document.getElementById("display").value += value;    
    }
}

function clearDisplay()
{
    document.getElementById("display").value = "";
}

function remSingleDigit()
{
    let display = document.getElementById("display")
    display.value = display.value.slice(0,-1)
}

function calculate()
{
    let display = document.getElementById("display")

    if(display.value === "")
    {
        display.value = ""
        return
    }

    try
    {
        display.value = eval(display.value)
    }
    catch(error)
    {
        display.value = ""
    }
}

function selectKey(x)
{
    switch(x)
    {
        case 'Backspace':
            remSingleDigit()
            break
            
        case '(':
            updateDisplay('(')
            break
    
        case ')':
            updateDisplay(')')
            break    

        case '%':
            updateDisplay('%')
            break
    
        case '7':
            updateDisplay('7')
            break  
            
        case '8':
            updateDisplay('8')
            break
    
        case '9':
            updateDisplay('9')
            break    

        case 'x':
            updateDisplay('*')
            break
    
        case '*':
            updateDisplay('*')
            break 

        case '4':
            updateDisplay('4')
            break
    
        case '5':
            updateDisplay('5')
            break    

        case '6':
            updateDisplay('6')
            break
    
        case '-':
            updateDisplay('-')
            break  
            
        case '1':
            updateDisplay('1')
            break
    
        case '2':
            updateDisplay('2')
            break    

        case '3':
            updateDisplay('3')
            break
    
        case '+':
            updateDisplay('+')
            break 

        case '0':
            updateDisplay('0')
            break  
            
        case '.':
            updateDisplay('.')
            break
    
        case 'Delete':
            clearDisplay()
            break    

        case '/':
            updateDisplay('/')
            break
    
        case 'Enter':
            calculate()
            break 
    }

    return true
}

document.addEventListener("keydown", function(event){
    selectKey(event.key)
    })