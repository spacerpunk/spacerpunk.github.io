uniform vec3 pointColor;

void main() {
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  float r = dot(cxy, cxy);
  float alpha = 1.0 - smoothstep(0.1, 0.9, r);
  
  gl_FragColor = vec4(pointColor, alpha * 0.5);
}