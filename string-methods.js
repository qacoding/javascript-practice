const str = 'JavaScript is amazing';

function stringMethods(){

    console.log(str.length);
    console.log(str.startsWith('Java'));
    console.log(str.endsWith('java'));
    console.log(str.toUpperCase());
    console.log(str.toLocaleLowerCase());
    console.log(str.indexOf('is'));
    console.log(str.split(' '));
    console.log(str.slice(10));
    console.log(str.includes('amaz'));
    console.log(str.charAt(4));
    console.log(str.replace('JavaScript', 'Node.js'));
  

}

stringMethods()