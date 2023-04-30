import * as THREE from "three";

class Block extends THREE.BufferGeometry {
  constructor(bigBox = 1, smallBox = 0.7, offset = .1) {
    super()
    const b = bigBox / 2;
    const s = smallBox / 2;
    const o = s - offset;

    const points = new Float32Array( [
      -s,  s,  s, // v0
      -o,  o,  b, // v1
       o,  o,  b, // v2
       s,  s,  s, // v3
      -s, -s,  s, // v4
      -o, -o,  b, // v5
       o, -o,  b, // v6
       s, -s,  s, // v7

       b,  o,  o, // v8
       b,  o, -o, // v9
       s,  s, -s, // v10
       b, -o,  o, // v11
       b, -o, -o, // v12
       s, -s, -s, // v13

       o,  o, -b, // v14
      -o,  o, -b, // v15
      -s,  s, -s, // v16
       o, -o, -b, // v17
      -o, -o, -b, // v18
      -s, -s, -s, // v19

      -b,  o, -o, // v20
      -b,  o,  o, // v21
      -b, -o, -o, // v22
      -b, -o,  o, // v23

      -o,  b,  o, // v24
       o,  b,  o, // v25
      -o,  b, -o, // v26
       o,  b, -o, // v27

      -o, -b,  o, // v28
       o, -b,  o, // v29
      -o, -b, -o, // v30
       o, -b, -o, // v31

    ] );
    
    const indices = [
     0, 1, 2,
      2, 3, 0,
     0, 4, 5,
     5, 1, 0,
     1, 5, 6,
     6, 2, 1,
     2, 6, 7,
     7, 3, 2,
     5, 4, 7,
     7, 6, 5,

     3, 8, 9,
     9,10, 3,
     3, 7,11,
    11, 8, 3,
     8,11,12,
    12, 9, 8,
     9,12,13,
    13,10, 9,
    11, 7,13,
    13,12,11,

    10,14,15,
    15,16,10,
    10,13,17,
    17,14,10,
    14,17,18,
    18,15,14,
    15,18,19,
    19,16,15,
    17,13,19,
    19,18,17,

    16,20,21,
    21, 0,16,
    16,19,22,
    22,20,16,
    20,22,23,
    23,21,20,
    21,23, 4,
     4, 0,21,
    22,19, 4,
     4,23,22,

    24, 0, 3,
     3,25,24,
    26,24,25,
    25,27,26,
    16, 0,24,
    24,26,16,
    16,26,27,
    27,10,16,
    27,25, 3,
     3,10,27,

     4,28,29,
    29, 7, 4,
     4,19,30,
    30,28,4,
    28,30,31,
    31,29,28,
    29,31,13,
    13, 7,29,
    30,19,13,
    13,31,30,

    ];

    const vertices = []
    for (let i = 0; i < indices.length; i++) {
      vertices.push(points[3*indices[i]])
      vertices.push(points[3*indices[i] + 1])
      vertices.push(points[3*indices[i] + 2])
    }
    this.setAttribute('position', new THREE.BufferAttribute( new Float32Array( vertices), 3 ))
    this.computeVertexNormals()
    this.normalizeNormals()

  }
}

module.exports = Block;