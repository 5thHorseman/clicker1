import {gData} from './gdata.js';
import {sData} from './sdata.js';

//init
setInterval(GameLoop, 20)

function GameLoop()
{
    gData.tick += 1;
    if (0==gData.tick%gData.gameSpeed)
    {
        runthegame();
        updatethescreen();
        console.log(gData.tutLevel);
    }
}

function runthegame()
{
    
}

function updatethescreen()
{
    Tutorial();
}

function Tutorial()
{
    switch(gData.tutLevel)
    {
        case 0:
            document.getElementById('log').innerHTML=sData.tut0;
            break;
        case 1:
            document.getElementById('log').innerHTML=sData.tut1;
            break;
        default:
            break;
    }
}

function RollADie(sides,minimum=1)
{
    return Math.floor(Math.random() * (sides - minimum + 1) + minimum);
}

function EngineeringNotation(number)
{
    var strNumber = number.toString();
    var numLength = strNumber.length;
    var place = Math.trunc(numLength/3);
    var digits = (numLength)%3;
    if (digits == 0)
    {
        place -= 1;
        digits = 3;
    }
    if (place==0)
    {
        return number.toString();
    }
    retLeft = strNumber.substring(0,digits);
    retRight =  strNumber.substring(digits,digits+2).substring(0,2);
    if (1 == digits)
    {
        return retLeft + "." + retRight + "e" + place * 3;
    }
    if (2 == digits)
    {
        return retLeft + "." + retRight.substring(0,1) + "e" + place * 3;
    }
    if (3 == digits)
    {
        return retLeft + "e" + place * 3;
    }
}