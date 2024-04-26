function KattaSon(a ,b) {
    if (a > b) {
        alert(a + 'katta' + b + 'dan' )
    } else if( a < b )  {
        alert(b + 'katta' + a + 'dan' )
    }else{
        alert( 'bu sonlar teng' )
    }
}

let son1 = prompt('1-sonni kiriting');
let son2 = prompt('2-sonni kiriting');

KattaSon( son1, son2 );
