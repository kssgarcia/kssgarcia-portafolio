import React from "react";
import ReactDOM from "react-dom/client";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import createInputEvents from "simple-input-events";

const DotScreenShader = {
  uniforms: {
    tDiffuse: { value: null },
    tSize: { value: new THREE.Vector2(256, 256) },
    center: { value: new THREE.Vector2(0.5, 0.5) },
    angle: 1.57,
    scale: 1.0,
  },

  vertexShader: `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,

  fragmentShader: `
    uniform vec2 center;
    uniform float angle;
    uniform float scale;
    uniform vec2 tSize;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    float pattern() {

    float s = sin( angle ), c = cos( angle );

    vec2 tex = vUv * tSize - center;
    vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

    return ( sin( point.x ) * sin( point.y )) * 4.0;
    }

    float random(vec2 p) {
      vec2 k1 = vec2(
      23.14069263277926, 
      2.665144142690225);

      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
    vec4 color = texture2D( tDiffuse, vUv );

    vec2 uvRandom = vUv;
    uvRandom.y *= random(vec2(uvRandom.y, 0.4));

    color.rgb += random(uvRandom)*0.1;  

    gl_FragColor = color;

    }`,
};

class HeroThree {
  constructor() {
    this.canvas = document.querySelector("canvas.webgl");
    this.scene = new THREE.Scene();

    this.event = createInputEvents(this.canvas);
    this.target = new THREE.Vector2(0, 0);
    this.mouse = new THREE.Vector2(0, 0);

    this.mouseEvents();
    this.Resize();
    this.Settings();
    this.initPost();
    this.Sphere();
    this.clock = new THREE.Clock();
    this.Tick();
  }

  mouseEvents() {
    this.event.on("move", ({ uv }) => {
      this.mouse.x = uv[0] - 0.5;
      this.mouse.y = uv[1] + 0.5;
    });
  }

  initPost() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms["scale"].value = 4;
    this.composer.addPass(effect1);
  }

  Sphere() {
    this.geometry = new THREE.SphereGeometry(5, 32, 32);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
    });

    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.sphere);
  }

  Resize() {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      this.sizes.width = window.innerWidth;
      this.sizes.height = window.innerHeight;

      this.camera.updateProjectionMatrix();

      // Update renderer
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.composer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  Settings() {
    let aspect = this.sizes.width / this.sizes.height;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.posCamera = new THREE.Vector3(0, 0, 2.5);
    this.camera.position.set(
      this.posCamera.x,
      this.posCamera.y,
      this.posCamera.z,
    );
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      // alpha: true
    });
    this.renderer.setClearColor(0x000000, 1); // the default

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  Tick() {
    const elapsedTime = this.clock.getElapsedTime();

    this.material.uniforms.uTime.value = elapsedTime;

    window.requestAnimationFrame(this.Tick.bind(this));
    this.composer.render(this.scene, this.camera);

    this.target.lerp(this.mouse, 0.1);
    this.camera.position.x = this.posCamera.x - this.target.x;
    this.camera.position.y = this.posCamera.y + this.target.y;
  }
}
new HeroThree();
