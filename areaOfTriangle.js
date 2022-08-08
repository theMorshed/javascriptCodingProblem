/*
১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 
    Area = √[s(s-a)(s-b)(s-c)]
    where s(semi perimeter) = a + b + c / 2;
*/

// declare variable
let sideLengthOne = 3;
let sideLengthTwo = 6;
let sideLengthThree = 7;


function areaOfTriangle(lengthOne, lengthTwo, lengthThree) {
    // calculate semiperimeter of a triangle according to s(semi perimeter) = a + b + c / 2
    let semiPerimeter = (lengthOne + lengthTwo + lengthThree) / 2;

    // calculate area of a triangle
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - lengthOne) * (semiPerimeter - lengthTwo) * (semiPerimeter - lengthThree));

    // return area
    return area;
}


console.log(areaOfTriangle(sideLengthOne, sideLengthTwo, sideLengthThree));