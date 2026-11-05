import React,{useState} from "react";
import roadmap from "../data/roadmapData";
const KEY="smarttodo-roadmap-v1";
function read(){try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch{return {}}}
export default function Roadmap({onProgress}) {
 const [done,setDone]=useState(read);
 const total=roadmap.reduce((n,w)=>n+w.topics.length,0);
 const completed=Object.values(done).filter(Boolean).length;
 function toggle(key){const next={...done,[key]:!done[key]};setDone(next);localStorage.setItem(KEY,JSON.stringify(next));onProgress?.();}
 return <div className="page-wrap">
  <div className="page-title-row"><div><div className="eyebrow">YOUR LEARNING JOURNEY</div><h1>Placement Roadmap</h1><p>Complete topics step by step and track your learning progress.</p></div></div>
  <section className="panel"><h3>{completed} of {total} topics completed</h3><div style={{height:12,background:"#263449",borderRadius:20,overflow:"hidden",marginTop:14}}><div style={{height:"100%",width:(total?completed/total*100:0)+"%",background:"#14b8a6",borderRadius:20}}/></div><h2 style={{marginTop:12}}>{Math.round(total?completed/total*100:0)}%</h2></section>
  {roadmap.map((week,i)=><section className="panel" key={week.title}><div className="panel-heading"><div><h3>{week.title}</h3><p>{week.topics.filter((t,j)=>done[i+"-"+j]).length} / {week.topics.length} topics completed</p></div></div>
   {week.topics.map((topic,j)=>{const key=i+"-"+j;return <div className="recent-item" key={key} style={{alignItems:"flex-start"}}><input type="checkbox" checked={!!done[key]} onChange={()=>toggle(key)}/><div><b style={{textDecoration:done[key]?"line-through":"none"}}>{topic.title}</b><small>{topic.suggestion}</small></div></div>})}
  </section>)}
 </div>;
}
