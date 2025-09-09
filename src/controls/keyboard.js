import * as THREE from "three";

// Update OrbitControls target/rotation using keyboard input
// keys: keysRef.current (map of code->bool)
// speeds: { move: number, rotate: number, climb: number }
export function updateKeyboardOrbit(controls, camera, keys, dt, speeds = {}){
  const moveSpeed = (speeds.move ?? 50) * dt; // 더 빠른 이동
  const rotSpeed = (speeds.rotate ?? 4.2) * dt; // 더 빠른 회전
  const climbSpeed = (speeds.climb ?? 50) * dt;

  // Forward vector: camera view direction (screen-forward)
  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);
  forward.y = 0; const len = forward.length();
  if (len > 1e-6) forward.multiplyScalar(1/len); else forward.set(0,0,1);
  const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0), forward).normalize();
  // Right vector should follow right-handed system (forward x up)
  right.crossVectors(forward, new THREE.Vector3(0,1,0)).normalize();

  // Move camera and target together for consistent translation
  const move = new THREE.Vector3();
  if (keys['KeyW']) move.addScaledVector(forward, moveSpeed);
  if (keys['KeyS']) move.addScaledVector(forward, -moveSpeed);
  if (keys['KeyA']) move.addScaledVector(right, -moveSpeed);
  if (keys['KeyD']) move.addScaledVector(right, moveSpeed);
  if (move.lengthSq() > 0){
    controls.target.add(move);
    camera.position.add(move);
  }

  // Climb (Space/Shift)
  if (keys['Space']) { controls.target.y += climbSpeed; camera.position.y += climbSpeed; }
  if (keys['ShiftLeft'] || keys['ShiftRight']) { controls.target.y -= climbSpeed; camera.position.y -= climbSpeed; }

  // Rotate (Q/E) around target horizontally (manual yaw)
  const yaw = (angle)=>{
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), angle);
    offset.applyQuaternion(q);
    camera.position.copy(controls.target).add(offset);
    camera.lookAt(controls.target);
  };
  if (keys['KeyQ']) yaw(rotSpeed);
  if (keys['KeyE']) yaw(-rotSpeed);
}


