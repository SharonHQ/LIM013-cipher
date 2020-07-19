//namescape global
const cipher = {
  // ...
  encode: function (offset, string){
    string=string.toUpperCase();
    let x = string.length;
    let pos= new Array();
    let textCipher= new Array();
    for (let i = 0; i < x; i++) {
      pos.push(string.charCodeAt(i));
      if(pos[i]!=32){
      pos[i]=(pos[i]-65+offset)%26+65;
      textCipher[i]=String.fromCharCode(pos[i]);
      }else{
        textCipher[i]=" ";
      }
    }
    return textCipher;
  },
  decode: function(offset, string){
    let x = string.length;
    let pos= new Array();
    let textDecipher= new Array();
    for (let i = 0; i < x; i++) {
      pos.push(string.charCodeAt(i));
      if(pos[i]!=32){
      //Areglamos un bug de % en js
      pos[i]=(((pos[i]-65-offset)%26+26)%26)+65;
      textDecipher[i]=String.fromCharCode(pos[i]);
      }else{
        textDecipher[i]=" ";
      }
    }
    return textDecipher;
  }
};

export default cipher;
