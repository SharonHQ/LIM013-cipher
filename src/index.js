import cipher from './cipher.js';
//Hay manera de simplifar esto?
document.getElementById('demoOptions').style.display='none';
document.getElementById('getNumberCipher').style.display='none';
document.getElementById('getNumberDecipher').style.display='none';
document.getElementById('cipherView').style.display='none';
document.getElementById('decipherView').style.display='none';

document.getElementById('what').addEventListener("click", function buttonWhat(){
    document.getElementById('contentWhat').style.display='block';
    document.getElementById('contentDemo').style.display='none'; 
});
document.getElementById('demo').addEventListener("click", function buttonDemo(){
    document.getElementById('contentWhat').style.display='none';
    document.getElementById('contentDemo').style.display='block';
    document.getElementById('demoOptions').style.display='block';
    document.getElementById('getNumberCipher').style.display='none';
    document.getElementById('getNumberDecipher').style.display='none';
    document.getElementById('cipherView').style.display='none';
    document.getElementById('decipherView').style.display='none';  
});
let buttonCipher=document.getElementsByClassName('cipher');
let i=buttonCipher.length;
while (i--)
    buttonCipher[i].addEventListener("click", function buttonCipher(){
        document.getElementById('contentWhat').style.display='none';
        document.getElementById('contentDemo').style.display='block';
        document.getElementById('getNumberCipher').style.display='block';
        document.getElementById('demoOptions').style.display='none';
        document.getElementById('getNumberDecipher').style.display='none';
        document.getElementById('cipherView').style.display='none';
        document.getElementById('decipherView').style.display='none';
    });
let buttonDecipher=document.getElementsByClassName('decipher');
let j=buttonDecipher.length;
while (j--)
    buttonDecipher[j].addEventListener("click", function buttonDecipher(){
        document.getElementById('contentWhat').style.display='none';
        document.getElementById('contentDemo').style.display='block';
        document.getElementById('getNumberDecipher').style.display='block';
        document.getElementById('getNumberCipher').style.display='none';
        document.getElementById('demoOptions').style.display='none';
        document.getElementById('decipherView').style.display='none';
        document.getElementById('cipherView').style.display='none';
    });

document.getElementById('showInputCipher').addEventListener("click",function showInputCipher(){
    let numberCipher=document.getElementById('numberCipher').value;
    alert(numberCipher);
    document.getElementById('getNumberCipher').style.display='none';
    document.getElementById('cipherView').style.display='block';  
    });
document.getElementById('showInputDecipher').addEventListener("click",function showInputDecipher(){
    let numberDecipher=document.getElementById('numberDecipher').value;
    alert(numberDecipher);
    document.getElementById('getNumberDecipher').style.display='none';
    document.getElementById('decipherView').style.display='block';    
    });

document.getElementById('cipher').addEventListener("click", function(){
    let numberCipher=document.getElementById('numberCipher').value
    //convirtiendo numpherCipher en number
    numberCipher = numberCipher-0;
    let textToCipher=document.getElementById('textToCipher').value;
    let textCipher = new Array();
    textCipher = cipher.encode(numberCipher,textToCipher);
    document.getElementById('result').innerHTML=textCipher.join('');
});
