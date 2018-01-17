let canvas, gl, img;
let program_info;
let buffers;

const shader_vertex = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
`;

const shader_fragment = `
    varying lowp vec4 vColor;

    void main(void) {
        gl_FragColor = vColor;
    }
`;

const positions = [
    // Front face
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,

    // Back face
    -1.0, -1.0, -1.0,
    -1.0, 1.0, -1.0,
    1.0, 1.0, -1.0,
    1.0, -1.0, -1.0,

    // Top face
    -1.0, 1.0, -1.0,
    -1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, -1.0,

    // Bottom face
    -1.0, -1.0, -1.0,
    1.0, -1.0, -1.0,
    1.0, -1.0, 1.0,
    -1.0, -1.0, 1.0,

    // Right face
    1.0, -1.0, -1.0,
    1.0, 1.0, -1.0,
    1.0, 1.0, 1.0,
    1.0, -1.0, 1.0,

    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0, 1.0,
    -1.0, 1.0, 1.0,
    -1.0, 1.0, -1.0,
];

let colors = [
    [0.98, 0.71, 1.0, 1.0],
    [0.98, 0.71, 1.0, 1.0],
    [0.98, 0.71, 1.0, 1.0],
    [0.98, 0.71, 1.0, 1.0],
    [0.98, 0.71, 1.0, 1.0],
    [0.98, 0.71, 1.0, 1.0],
];



function init() {
    canvas = document.createElement("canvas");
    gl = canvas.getContext("webgl");
    img = document.getElementById("pfp");
    if (!gl) {
        return;
    }

    const shader_program = init_shader_program(gl, shader_vertex, shader_fragment);

    program_info = {
        program: shader_program,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shader_program, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shader_program, 'aVertexColor')
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shader_program, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shader_program, 'uModelViewMatrix')
        }
    };

    let temp_colors = [];
    for(let i = 0; i < colors.length; ++i) {
        const c = colors[i];
        temp_colors = temp_colors.concat(c, c, c, c);
    }

    let scale = 1.5;
    let temp_positions = [];
    for(let i = 0; i < positions.length; ++i) {
        temp_positions[i] = positions[i] * scale;
    }

    buffers = init_buffers(gl, temp_positions, temp_colors);

    requestAnimationFrame(render);
}

let then = 0;
function render(now) {
    now *= 0.001;
    const delta_time = now - then;
    then = now;

    draw(gl, delta_time);

    requestAnimationFrame(render);
}

let rotation_amt = 0.0;
let rotation_speed = 1.0;

function draw(gl, delta_time) {
    gl.clearColor(1.0, 1.0, 1.0, 0.0);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fov = 45 * Math.PI / 180; //radians
    const aspect = 1;
    const znear = 0.1;
    const zfar = 100.0;
    const projection_matrix = mat4.create();

    mat4.perspective(projection_matrix, fov, aspect, znear, zfar);

    const model_view_matrix = mat4.create();

    rotation_amt += (delta_time * rotation_speed);

    mat4.translate(model_view_matrix, model_view_matrix, [-0.0, 0.0, -6.0]);
    mat4.rotate(model_view_matrix, model_view_matrix, rotation_amt, [0, 1, 0]);
    {
        const num_components = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;

        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            program_info.attribLocations.vertexPosition,
            num_components,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(program_info.attribLocations.vertexPosition);
    }

    {
        const num_components = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;

        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(
            program_info.attribLocations.vertexColor,
            num_components,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(program_info.attribLocations.vertexColor);
    }

    gl.useProgram(program_info.program);

    gl.uniformMatrix4fv(
        program_info.uniformLocations.projectionMatrix,
        false,
        projection_matrix
    );
    gl.uniformMatrix4fv(
        program_info.uniformLocations.modelViewMatrix,
        false,
        model_view_matrix
    );

    const offset = 0;
    const vertex_count = 24;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertex_count);

    img.src = canvas.toDataURL();
    //document.getElementById("pfp-container").style.background = "url(" + canvas.toDataURL() + ") no-repeat center 100%";
}

window.onload = () => {
    init();
};

document.getElementById("pfp").onmouseover = () => {
    rotation_speed = rotation_speed < 0 ? -3.0 : 3.0;
};
document.getElementById("pfp").onmouseout = () => {
    rotation_speed = rotation_speed < 0 ? -1.0 : 1.0;
};
document.getElementById("pfp").onmousedown = () => {
    rotation_speed = rotation_speed * -1;
};