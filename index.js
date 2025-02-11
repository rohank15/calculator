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