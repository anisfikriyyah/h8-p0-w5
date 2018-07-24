function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length === 0) {
    return []
  }
 var ruteBayar = []
 var hasil = []
  for( var j=0; j<arrPenumpang.length; j++){
    var coun = []
    for (var k=0; k<arrPenumpang[j].length;k++){
      for (var i=0; i<rute.length; i++){
      if ( rute[i] === arrPenumpang[j][k]){
        coun.push(i)
        }
      }
    }
    ruteBayar.push(coun)
    var bayar1 = (ruteBayar[j][1]-ruteBayar[j][0]) * 2000
    var obj = {
      penumpang : arrPenumpang[j][0],
      naikDari: arrPenumpang[j][1],
      tujuan: arrPenumpang[j][2],
      bayar: bayar1
    }
    hasil.push(obj)
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]