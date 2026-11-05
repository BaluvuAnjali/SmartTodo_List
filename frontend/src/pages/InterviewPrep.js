import React,{useMemo,useState} from "react";
import questions from "../data/interviewQuestions";
const ATTEMPT="smarttodo-interview-attempted",BOOKMARK="smarttodo-interview-bookmarks";
const read=k=>{try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return []}};
export default function InterviewPrep(){
 const [category,setCategory]=useState("All"),[search,setSearch]=useState(""),[opened,setOpened]=useState({}),[attempted,setAttempted]=useState(read(ATTEMPT)),[bookmarks,setBookmarks]=useState(read(BOOKMARK));
 const categories=["All",...new Set(questions.map(q=>q.category))];
 const filtered=useMemo(()=>questions.map((q,i)=>({...q,id:i})).filter(q=>(category==="All"||q.category===category)&&(`${q.question} ${q.answer} ${q.category}`).toLowerCase().includes(search.toLowerCase())),[category,search]);
 function save(key,value,setter){localStorage.setItem(key,JSON.stringify(value));setter(value);}
 return <div className="page-wrap">
  <div className="page-title-row"><div><div className="eyebrow">PREPARE WITH CONFIDENCE</div><h1>Interview Preparation</h1><p>Practice common technical interview questions and revise answers.</p></div></div>
  <section className="panel"><div className="stats-grid"><div><h2>{questions.length}</h2><p>Total questions</p></div><div><h2>{attempted.length}</h2><p>Practiced</p></div><div><h2>{bookmarks.length}</h2><p>Bookmarked</p></div></div>
   <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:16}}><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search questions..." style={field}/><select value={category} onChange={e=>setCategory(e.target.value)} style={field}>{categories.map(c=><option key={c}>{c}</option>)}</select></div>
  </section>
  {filtered.map(q=><section className="panel" key={q.id}><div className="eyebrow">{q.category}</div><h3 style={{marginTop:8}}>{q.question}</h3>
   <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:12}}><button className="primary-button" onClick={()=>setOpened(x=>({...x,[q.id]:!x[q.id]}))}>{opened[q.id]?"Hide answer":"Show answer"}</button><button className="secondary-button" onClick={()=>save(BOOKMARK,bookmarks.includes(q.id)?bookmarks.filter(x=>x!==q.id):[...bookmarks,q.id],setBookmarks)}>{bookmarks.includes(q.id)?"★ Bookmarked":"☆ Bookmark"}</button><button className="secondary-button" onClick={()=>save(ATTEMPT,attempted.includes(q.id)?attempted:[...attempted,q.id],setAttempted)}>{attempted.includes(q.id)?"Practiced ✓":"Mark practiced"}</button></div>
   {opened[q.id]&&<div style={{marginTop:16}}><p><b>Answer:</b> {q.answer}</p><p><b>Explanation:</b> {q.explanation}</p>{q.example&&<pre style={pre}>{q.example}</pre>}</div>}
  </section>)}
  {!filtered.length&&<section className="panel empty-state">No matching questions found.</section>}
 </div>;
}
const field={padding:12,borderRadius:9,border:"1px solid #334155",background:"#0f172a",color:"inherit"};
const pre={whiteSpace:"pre-wrap",padding:14,borderRadius:8,background:"#111827",overflowX:"auto"};
