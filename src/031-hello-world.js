/**
 *  Hello World #31
 *  By @kirjavascript
 */

module.exports = () => {
x=String.    fromCharCode                (...`000 0000000
000000000     000000000                   0000000 0000000
000000000     000000000                   0000000 0000000
000000000     000000000                   0010010 0000000
  0000000     0000000      000000000000    000000  000000    00000000000
  0000000     0000000    0000000000000000  000000  000011  001010000000000
  0000000000000000000   0000000000000000000000000  000000 00000000000000000
  0000000000000000011  01100000     0000000000000  000000 00000000000000000
  0000000000000000000  00000000000000000000000000  000000 000011     011000
  0000000000000000000  0000000000000000000 000000  000000 000000     000000
  0000000     0000000  000000000000000001  101111  000000 000000     000000
  0000000     0000000  000000000           000000  000000 000000     000000
000000000     0000000000000000000         001011000000000000000000000000000
000000000     000000000 00000000000000000 000000000000000000000000000000000
001000000     000000000  0000000000000000 0000000000000000 000000000000000
000000000     000000000    00000000000000 0000010101110000   00000000000

                                                                                                00000000
00000000                           00000000                                 0000000             00000000
00000000                           00000000                                 0000000             00000000
00000000                           01101111                                 0000000             00000000
00000000                           00000000                                 0000000             0000000
 0000000           00000           0000000 00000000000   00000   000000000   000001     110010000000000
  0000000         0000000         0000000000000000000000 000000000000000000  000000   00000000000000000
   0000000       011011000       0000000000000000000000000000000000000000000 000000  000000000000000000
    0000000     00000000000     0000000 01100100`.replace(/\s/g,'').match(/.{101}/g ).map(d=>parseInt(d
     ,2)));`   0000000000000   0000000  000000     000000 0000000     0000000000000 00000000    0000000
      0000000 0000000 0000000 0000000   000000     000000 0000000     0000000000000 0000000     0000000
       0000000000000   0000000000000    000000     000000 0000000            000000 0000000     0000000
        00000000000     00000000000     000000     000000 0000000            000000 0000000     0000000
         000000000       000000000      00000000000000000 0000000           0000000000000000000000000000
          0000000         0000000       00000000000000000 0000000           00000000 0000000000000000000
           00000           00000         000000000000000  0000000           00000000  000000000000000000
            000             000            00000000000    0000000           00000000   0`;return   x;;;;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null
