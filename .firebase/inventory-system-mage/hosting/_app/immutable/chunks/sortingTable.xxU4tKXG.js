function a(t,e,r){return t.sort((n,w)=>typeof n[e]=="number"&&typeof w[e]=="number"?r==="asc"?n[e]-w[e]:w[e]-n[e]:n[e]<w[e]?r==="asc"?-1:1:n[e]>w[e]?r==="asc"?1:-1:0)}function i(t,e){return t.filter(r=>Object.values(r).some(n=>n.toString().toLowerCase().includes(e.toLowerCase())))}function o(t){return t==="asc"?`<svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="m10 6.667 5.833 6.667H4.167z" /></svg>`:`<svg width="15" height="15" viewBox="-0.163 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
        <path d="m0.47 0.285 -0.198 0.248c-0.019 0.023 -0.048 0.023 -0.066 0L0.009 0.285c-0.019 -0.023 -0.009 -0.041 0.02 -0.041h0.422c0.03 0 0.038 0.018 0.02 0.041" />
    </svg>`}function s(t){return t==="pending"?"text-red-500":"text-black"}export{s as a,i as f,o as g,a as s};