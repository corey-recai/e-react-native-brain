uniform vec3 glowColor;
uniform sampler2D lightningTexture;
varying float intensity;
varying vec2 vUv;
uniform float offsetY;
uniform float uTime;

void main(){
    vec2 uv = vUv;
    uv.y += offsetY;

  	vec3 glow = glowColor * intensity;
    vec3 color = vec3(step(0.1, uv.y) - step(0.2, uv.y)) - vec3(texture2D(lightningTexture, uv));

	float alpha = clamp(cos(uTime* 3.0) , 0.5, 1.0);

    gl_FragColor = vec4( glow + color, alpha);
}