var fontArray = ['Above Demo', 'bromello', 'Capsule X Pro Medium', 'Cursus', 'GoodMorningAfternoon', 'Hey Now', 'Permanent Marker'];
var randomFont = fontArray[Math.floor(Math.random() * fontArray.length)];

$("#name").css("font-family", randomFont);
