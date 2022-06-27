$ = (queryString) => document.querySelector(queryString);

const shiftHue = (hue) => (hue + 1) % 360;
const shiftHueF = (hue, f) => (hue + f) % 360;

let hue = 0;
let hue2 = 0;
let p_speed = 0;
let counter = 0;
function animate() {
  counter += 1;
  hue = shiftHue(hue);
  hue2 = shiftHueF(hue2, 10);
  p_speed = shiftHueF(p_speed,0.1);
  let speed = Date.now()/5000
  const color = 'hsl('+String(30*Math.sin(speed)+ 200)+', 100%, 50%)';
  const moon_color = 'hsl('+hue2+', 20%, 70%)';

  $('a-sphere').setAttribute('color', moon_color);


  const position=String(3 * Math.cos(speed*1))+" "+String(2.5 + 0.8* Math.sin(speed))+" "+String(-5 + 3* Math.sin(speed*1));

  $('a-sphere').setAttribute('position', position);

  $('a-sphere').setAttribute('rotation', "0 "+ String(-hue)+" 0");

  $('a-plane').setAttribute('color', color);
  $('a-plane').setAttribute('rotation', "-90 "+ String(p_speed)+" 0");

  //$('a-plane.milky').setAttribute('rotation', String(-70+counter%145)  + " " +String((-20+counter)%120) +" " + String(20+Math.sin(speed)));

  requestAnimationFrame(animate);

};



requestAnimationFrame(animate);
