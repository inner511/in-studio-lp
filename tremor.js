// Tremor divider animation — the site's signature "trembling line" motif.
// Reused across all pages as a quiet, continuous wobble.
function animateTremor(pathId, seed){
  const path = document.getElementById(pathId);
  if(!path) return;
  let t = seed;
  function frame(){
    t += 0.015;
    const pts = [];
    const w = 1080, steps = 9;
    for(let i=0;i<=steps;i++){
      const x = (w/steps)*i;
      const y = 20 + Math.sin(t + i*1.4)*10 + Math.sin(t*1.7 + i)*3;
      pts.push([x,y]);
    }
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for(let i=1;i<pts.length;i++){
      const [x0,y0] = pts[i-1];
      const [x1,y1] = pts[i];
      const cx = (x0+x1)/2;
      d += ` Q${cx},${y0} ${x1},${y1}`;
    }
    path.setAttribute('d', d);
    requestAnimationFrame(frame);
  }
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    requestAnimationFrame(frame);
  }
}
