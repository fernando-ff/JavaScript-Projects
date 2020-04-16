function convert(){
    const bin = document.getElementById('bin').value;
    if( bin === '') return alert('Please enter a number!');

    bin.split('').map((char) => {   
        if( char !== '0' && char !== '1') return alert('Please enter a binary number!');
    });
    const dec = parseInt( bin,2 );
    document.getElementById('dec').value = dec;
}