import Drawable from '../rendering/gl/Drawable'
import {gl} from '../globals';
import {vec3, vec4} from 'gl-matrix';

class Cube extends Drawable {
    indices: Uint32Array;
    positions: Float32Array;
    normals: Float32Array;
    center: vec4;

    constructor(center: vec3) {
        super();
        this.center = vec4.fromValues(center[0], center[1], center[2], 1);
    }

    create() {
        this.indices = new Uint32Array([
                            // front
                            0, 1, 2,
                            0, 2, 3,
                            // back
                            4, 5, 6,
                            4, 6, 7,
                            // top
                            8, 9, 10,
                            8, 10, 11,
                            // bot
                            12, 13, 14,
                            12, 14, 15,
                            // R
                            16, 17, 18,
                            16, 18, 19,
                            // L
                            20, 21, 22,
                            20, 22, 23
                        ]);

        this.normals = new Float32Array([
                            // front
                            0, 0, 1, 0,
                            0, 0, 1, 0,
                            0, 0, 1, 0,
                            0, 0, 1, 0,
                            // back
                            0, 0, -1, 0,
                            0, 0, -1, 0,
                            0, 0, -1, 0,
                            0, 0, -1, 0,
                            // top
                            0, 1, 0, 0,
                            0, 1, 0, 0,
                            0, 1, 0, 0,
                            0, 1, 0, 0,
                            // bot
                            0, -1, 0, 0,
                            0, -1, 0, 0,
                            0, -1, 0, 0,
                            0, -1, 0, 0,
                            // R
                            1, 0, 0, 0,
                            1, 0, 0, 0,
                            1, 0, 0, 0,
                            1, 0, 0, 0,
                            // L
                            -1, 0, 0, 0,
                            -1, 0, 0, 0,
                            -1, 0, 0, 0,
                            -1, 0, 0, 0
                        ]);

        this.positions = new Float32Array([
                            // front
                            -1, -1, 1, 1,
                            1, -1, 1, 1,
                            1,  1, 1, 1,
                            -1,  1, 1, 1,
                            // back
                            -1, -1, -1, 1,
                            1, -1, -1, 1,
                            1,  1, -1, 1,
                            -1,  1, -1, 1,
                            // top
                            -1, 1, -1, 1,
                            1, 1, -1, 1,
                            1, 1,  1, 1,
                            -1, 1,  1, 1,
                            // bot
                            -1, -1, -1, 1,
                            1, -1, -1, 1,
                            1, -1,  1, 1,
                            -1, -1,  1, 1,
                            // R
                            1, -1, -1, 1,
                            1,  1, -1, 1,
                            1,  1,  1, 1,
                            1, -1,  1, 1,
                            // L
                            -1, -1, -1, 1,
                            -1,  1, -1, 1,
                            -1,  1,  1, 1,
                            -1, -1,  1, 1
                        ]);

        this.generateIdx();
        this.generatePos();
    this.generateNor();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    console.log(`Created cube`);
    }
};

export default Cube;    // Note: What is this for?