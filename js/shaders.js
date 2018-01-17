function load_shader(gl, type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Unable to compile shaders");
        console.log(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function init_shader_program(gl, shader_vertex, shader_fragment) {
    const vertex   = load_shader(gl, gl.VERTEX_SHADER  , shader_vertex);
    const fragment = load_shader(gl, gl.FRAGMENT_SHADER, shader_fragment);

    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vertex);
    gl.attachShader(shader_program, fragment);
    gl.linkProgram(shader_program);

    if(!gl.getProgramParameter(shader_program, gl.LINK_STATUS)) {
        alert("Unable to load shaders");
        console.log(gl.getProgramInfoLog(shader_program));
        return null;
    }

    return shader_program;
}