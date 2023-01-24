console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    for(let i = 1; i <= Math.abs(count); i++)
    {
        if(i % 2 != 0)
        {
            console.log(i * Math.sign(count));
        }
    }
}

printOdds(-100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age)
{
    let aboveSixteen = `Congrats ${name}, you can drive!`;
    let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`

    if(age < 16)
    {
        console.log(belowSixteen);
    }
    else
    {
        console.log(aboveSixteen);
    }
}

checkAge("Mike", 30)


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuad(x, y)
{
    if(x > 0 && y > 0)
    {
        return "Quadrant 1";
    }
    else if(x < 0 && y > 0)
    {
        return "Quadrant 2";
    }
    else if(x < 0 && y < 0)
    {
        return "Quadrant 3";
    }
    else if(x > 0 && y < 0)
    {
        return "Quadrant 4";
    }
    else if(x == 0 && y != 0)
    {
        return "X Axis";
    }
    else if(x != 0 && y == 0)
    {
        return "Y Axis";
    }
    else
    {
        return "Origin";
    }

}
console.log(checkQuad(0, 1));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function validTriangle(a, b, c)
{
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c)
{
    let isValid = validTriangle(a, b, c);
    if(isValid)
    {
        if(a == b && b == c)
        {
            return "Equilateral";
        }
        else if (a == b || b == c || a ==c)
        {
            return "Isosceles";
        }
        else
        {
            return "Scalene";
        }
    }
    else 
    {
        return "Not a vaild triangle."
    }
}

console.log(checkTriangle(1, 2, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUseFeedback(planLimit, day, usage)
{
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;


    if(currentAvg > projectedAvg)
    {
        statusMsg = "EXCEEDING";
    }
    else if ( currentAvg < projectedAvg)
    {
        statusMsg = "UNDER";
    }
    else 
    {
        statusMsg = "At";
    }

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);

    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} Gb from your data limit.
To stay below your data plan, use no more than ${remainingData/remainingDays} GB/days`);
}

console.log(dataUseFeedback(50, 15, 25))