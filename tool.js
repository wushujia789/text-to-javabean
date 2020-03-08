function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function firstToUpperCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function camelCase(input) {
	//input = input.toLowerCase() ;
    return input.replace(/_(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

function camelCaseWithFirstCharUpper(input){
    if(!input){return ""};
    input = camelCase(input);
    return input[0].toUpperCase()+input.substr(1);
}

function isDate(date) {
	//alert();
	//alert(date+"~"+new Date(date));
	//console.log(date+"~"+new Date(date))
    //return ((new Date(date) !== "Invalid Date" && !isNaN(new Date(date))) && isNaN((+date)));
	//return isNaN(date)&&!isNaN(Date.parse(date)) ;
	var reg = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    var isDate = reg.test(date);
	return isDate ;
}

function isInt(n) {
    return n % 1 === 0;
}


