/*
* This file has been generated by spacker.exe utility. Do not change this file manualy as your changes
* will get lost when the file is regenerated. Original content is located in *.c files.
*/
if (!window.xShaders) window.xShaders = {}
xShaders.cube_fshader = " precision mediump float; varying vec4 vColor; void main(void) { gl_FragColor = vColor; }";
xShaders.cube_vshader = " attribute highp vec3 aVertex; attribute highp vec4 aColour; uniform mat4 uMVMatrix; uniform mat4 uPMatrix; uniform bool uColorCoding; varying vec4 vColor; vec4 getIdColor(float id){ float product = floor(id + 0.5); float B = floor(product / (256.0*256.0)); float G = floor((product - B * 256.0*256.0) / 256.0); float R = mod(product, 256.0); return vec4(R / 255.0, G / 255.0, B / 255.0, 1.0); } void main(void) { vColor = aColour; mat3 rotation = mat3(uMVMatrix); vec4 point = vec4(rotation * aVertex, 1.0); gl_Position = uPMatrix * point; }";
