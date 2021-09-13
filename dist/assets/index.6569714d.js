import{c as e,s as t,w as a,B as n,u as l,R as r,a as o,L as i,M as c,b as s,G as m,K as u,r as d,d as p,T as g,e as h,m as E,C as f,f as v,A as b,g as x,h as k,F as N,i as w,j as y,k as S,l as C,n as I,o as L,I as F,S as D,p as $,q as j,t as A,v as B,x as T,y as P}from"./vendor.cfacd1c1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const U=e(((e,t)=>({modal:"",setModal:t=>e({modal:t}),airportList:null,setAirportList:async()=>{const t=await fetch("https://boolean-air.herokuapp.com/airports").then((e=>e.json()));e({airportList:t.data})},searchResult:null,setSearchResult:()=>{},userCredentials:{email:null,password:null},setUserCredentials:t=>e({userCredentials:t}),loggedInUser:{id:30,role:""},setLoginUser:async t=>{const a=await fetch("https://boolean-air.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>{if(e.ok)return e.json()}));e(a?{loggedInUser:a.user}:{modal:"loginError"})},signUpUserCredentials:{firstName:null,lastName:null,email:null,password:null},setSignUpUserCredentials:t=>e({signUpUserCredentials:t}),signedUpUser:null,setSignupUser:async t=>{const a=await fetch("https://boolean-air.herokuapp.com/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>{if(e.ok)return e.json()}));a&&e({loggedInUser:a})},logOut:()=>{e({loggedInUser:null,flightSearch:null,flightSearchNoDate:null,outboundBooking:null})},flightStatus:null,searchFlightStatus:async(t,a)=>{const n=await fetch(`https://boolean-air.herokuapp.com/${t}?date=${a}`).then((e=>e.json()));n.data.length?e({flightStatus:n.data[0]}):e({flightStatus:void 0})},selectedAirport:null,setSelectedAirport:async t=>{const a=await fetch(`https://boolean-air.herokuapp.com/departure/${t}`).then((e=>e.json()));e({selectedAirport:a})},departureFlightList:[],setDepartureFlightList:async t=>{const a=await fetch(`https://boolean-air.herokuapp.com/departure/${t}`).then((e=>e.json()));e({departureFlightList:a})},userBooking:null,getUserBooking:async()=>{var a;if(t().loggedInUser){const n=await fetch(`https://boolean-air.herokuapp.com/user/${null==(a=t().loggedInUser)?void 0:a.id}`).then((e=>e.json()));console.log(n),n.length?e({userBooking:n}):e({flightStatus:void 0})}},flightSearch:null,flightSearchNoDate:null,arrivalFlightSearch:null,arrivalFlightSearchNoDate:null,resetSearch:()=>{e({flightSearch:null,flightSearchNoDate:null,outboundBooking:null})},searchFlightSeach:async(t,a,n,l)=>{if(n&&l&&t&&a){const r=await fetch(`https://boolean-air.herokuapp.com/?date=${n}&depart=${t}&arrival=${a}`).then((e=>e.json()));console.log("Depart with date",r);const o=await fetch(`https://boolean-air.herokuapp.com/?date=${l}&arrival=${t}&depart=${a}`).then((e=>e.json()));if(console.log("Arrival with date",o),r.data.length)e({flightSearch:r.data});else{e({flightSearchNoDate:void 0});const n=await fetch(`https://boolean-air.herokuapp.com/?depart=${t}&arrival=${a}`).then((e=>e.json()));console.log("depart with no date",n),n.data.length?e({flightSearchNoDate:n.data}):e({flightSearchNoDate:void 0})}if(o.data.length)e({arrivalFlightSearch:o.data});else{e({arrivalFlightSearchNoDate:void 0});const n=await fetch(`https://boolean-air.herokuapp.com/?depart=${a}&arrival=${t}`).then((e=>e.json()));console.log("arrival with no date",n),n.data.length?e({arrivalFlightSearchNoDate:n.data}):e({arrivalFlightSearchNoDate:void 0})}}},outboundBooking:null,selectOutboundFlight:t=>{e({outboundBooking:{tickets:[t]}})},inboundBooking:null,selectInboundFlight:t=>{e({inboundBooking:{tickets:[t]}})}})));var R="/assets/booleanAir_logo.df9b197f.png";const O="#ff5965",M="#ff8c94",W="#ffffff",q="#e6e6e6",z="#fff2f3",K="#000000",G="#808080",H=t.header`
  background-color: ${M};
  position: fix;
  height: 100px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 250px;
  place-items: center;

  .app-logo {
    height: 100px;
  }
  nav {
    place-self: end;
    justify-self: center;
    padding: 15px;
    justify-self: left;
  }
  .nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: inherit;
    grid-auto-flow: column;
    place-content: space-between;
    nav {
      display: none;
    }
  }
`,V=a((()=>({root:{height:"40px",margin:"0",borderRadius:0,color:K,"&:hover":{color:G}}})))(n),J=a((()=>({root:{height:"50px",WebkitBorderRadius:"10px",margin:"5px",marginLeft:"5px",borderRadius:0,color:K,backgroundColor:z,"&:hover":{backgroundColor:q}}})))(n);function X(){const e=U((e=>e.logOut)),t=l();return r.createElement(H,null,r.createElement("img",{className:"app-logo",src:R}),r.createElement("nav",null,r.createElement("ul",{className:"nav-list"},r.createElement(o,{variant:"text",color:"primary","aria-label":"text primary button group"},r.createElement(V,{onClick:()=>t.push("/")},"Buy Ticket"),r.createElement(V,{onClick:()=>t.push("/flightStatus")},"Flight Status"),r.createElement(V,{onClick:()=>t.push("/myBooking")},"Check In")))),r.createElement("div",null,r.createElement(J,{variant:"contained",onClick:()=>t.push("/myBooking")},"My Flight"),r.createElement(i,{to:"/"},r.createElement(J,{onClick:e,variant:"contained"},"LogOut"))))}function _({setDepartureDate:e,setArrivalDate:t,arrivalDate:a,departureDate:n}){return r.createElement(c,{utils:s},r.createElement(m,{container:!0,justifyContent:"space-around"},r.createElement(u,{disableToolbar:!0,variant:"inline",format:"DD/MM/yyyy",margin:"normal",id:"date-picker-dialog",label:"Departure Date",value:n,color:"secondary",onChange:t=>{e(t)},KeyboardButtonProps:{"aria-label":"change date"}}),r.createElement(u,{disableToolbar:!0,variant:"inline",margin:"normal",id:"date-picker-dialog",label:"Return Date",color:"secondary",format:"DD/MM/yyyy",value:a,onChange:e=>{t(e)},KeyboardButtonProps:{"aria-label":"change date"}})))}const Q=t.section`
  background-image: url(${"/assets/pexels-photo-2549084.5f5df358.jpeg"});
  background-color: #cccccc;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 25rem;
  overflow: hidden;
  width: 100%;
  justify-content: space-around;
  display: inline-grid;
`,Y=t.section`
  align-self: center;
  box-shadow: 1px 1px 5px -1px #000000;
`,Z=t.section`
  background-color: transparent;
  width: 500px;
  height: 250px;

  .flight-icon-article {
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    grid-gap: 10px;
  }
  .icon {
    transform: rotate(90deg);
    margin: 10px;
    color: ${K};
    cursor: pointer;
  }
  .flight-icon-p {
    margin: 10px;
    color: ${K};
    cursor: pointer;
  }

  .flight-icon-p:hover,
  .icon:hover {
    color: ${O};
  }
`,ee=t.form`
  margin: 15px;
  /* .searchBarForm {
    display: grid;
    grid-template-columns: 1fr auto 1fr;

    align-items: center;
  } */

  .depatureEl {
    display: inline-block;
  }

  .ul-depart {
    display: inline-block;

    min-width: 190px;
  }

  .ul-arrive {
    display: inline-block;
  }
  display: inline-block;
  .form-svg {
    margin-top: 20px;
  }

  .travel {
    display: grid;
    justify-content: center;
  }
`,te=a((()=>({root:{height:"50px",WebkitBorderRadius:"10px",margin:"0",marginLeft:"5px",borderRadius:0,color:K,backgroundColor:z,"&:hover":{backgroundColor:q}}})))(n),ae=()=>{const e=l(),[t,a]=r.useState(new Date),[n,o]=r.useState(new Date),[i,c]=r.useState(""),[s,m]=r.useState(""),[u,E]=d.exports.useState(!1),[f,v]=d.exports.useState(!1),b=U((e=>e.airportList));U((e=>e.flightSearch));const x=U((e=>e.searchFlightSeach)),k=null==b?void 0:b.filter((e=>{if(e.name.toLowerCase().includes(s.toLowerCase())||e.city.toLowerCase().includes(s.toLowerCase())||e.id.toLowerCase().includes(s.toLowerCase()))return e})),N=null==b?void 0:b.filter((e=>{if(e.name.toLowerCase().includes(i.toLowerCase())||e.city.toLowerCase().includes(i.toLowerCase())||e.id.toLowerCase().includes(i.toLowerCase()))return e}));return r.createElement(r.Fragment,null,r.createElement(Q,null,r.createElement(Y,null,r.createElement(Z,null,r.createElement("div",{className:"flight-icon-article"},r.createElement(p,{className:"icon"})," ",r.createElement("p",{className:"flight-icon-p"},"Select your flights")),r.createElement(ee,{onSubmit:a=>{const l=a.target;a.preventDefault();const r=l.depart.value,o=l.arrival.value,i=null==n?void 0:n.toISOString().split("T")[0].split("-").join(""),s=null==t?void 0:t.toISOString().split("T")[0].split("-").join("");if(s&&i){const t=parseInt(s),a=parseInt(i);console.log(t,a,r,o),x(r,o,t,a),e.push("/searchResult")}l.reset(),m(""),c("")}},r.createElement(g,{id:"standard-basic",name:"depart",label:"From",color:"secondary",value:s,autoComplete:"off",onChange:e=>{const t=e.target;e.preventDefault();const a=t.value;m(a)}}),r.createElement(h,{className:"form-svg"}),r.createElement(g,{id:"standard-basic",name:"arrival",label:"To",color:"secondary",value:i,onChange:e=>{const t=e.target;e.preventDefault();const a=t.value;c(a)}}),r.createElement("div",{className:"depatureEl"},r.createElement("ul",{className:"ul-depart"},s?null==k?void 0:k.map((e=>r.createElement("li",{onClick:()=>(e=>{e&&(e.id&&m(e.id),E(!u))})(e)},u?"":e.name.substring(0,15)))):""),r.createElement("ul",{className:"ul-arrive"},i?null==N?void 0:N.map((e=>r.createElement("li",{onClick:()=>(e=>{e&&(e.id&&c(e.id),v(!f))})(e)},f?"":e.name.substring(0,15)))):"")),r.createElement(_,{departureDate:t,setDepartureDate:a,setArrivalDate:o,arrivalDate:n}),r.createElement("div",{className:"travel"},r.createElement(te,{variant:"contained",type:"submit"},"Search")))))))},ne=E((e=>({main:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},close:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark},borderRadius:e.spacing(200),color:e.palette.common.white},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}})));function le(){const e=ne();U((e=>e.modal));const t=U((e=>e.setModal));U((e=>e.userCredentials)),U((e=>e.setUserCredentials));const a=U((e=>e.setLoginUser)),o=U((e=>e.loggedInUser)),i=l();return d.exports.useEffect((()=>{console.log(o),"USER"===(null==o?void 0:o.role)&&t(""),"STAFF"===(null==o?void 0:o.role)&&(i.push("/staffpage"),t(""))}),[o]),r.createElement(f,{component:"main",maxWidth:"xs"},r.createElement(v,null),r.createElement("div",{className:e.main},r.createElement(m,{container:!0,justifyContent:"flex-end"},r.createElement(n,{onClick:()=>t(""),className:e.close},"X")),r.createElement(b,{className:e.avatar},r.createElement(x,null)),r.createElement(k,{component:"h1",variant:"h5"},"Sign in"),r.createElement("form",{onSubmit:e=>{e.preventDefault();const t=e.target,n={email:t.email.value,password:t.password.value};a(n)},className:e.form},r.createElement(m,{container:!0,spacing:2},r.createElement(m,{item:!0,xs:12},r.createElement(g,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.createElement(m,{item:!0,xs:12},r.createElement(g,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.createElement(m,{item:!0,xs:12},r.createElement(N,{control:r.createElement(w,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive marketing promotions and updates via email."}))),r.createElement(n,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",value:"Login",className:e.submit},"Sign In"),r.createElement(m,{container:!0,justifyContent:"flex-end"},r.createElement(m,{item:!0},r.createElement(y,{onClick:()=>t("signUp")},"Not our member yet? Sign Up"))))))}const re=E((e=>({main:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},close:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark},borderRadius:e.spacing(200),color:e.palette.common.white},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}})));function oe(){const e=re();U((e=>e.modal));const t=U((e=>e.setModal)),a=U((e=>e.loggedInUser)),l=U((e=>e.setSignupUser));return d.exports.useEffect((()=>{a&&t("")}),[a]),r.createElement(f,{component:"main",maxWidth:"xs"},r.createElement(v,null),r.createElement("div",{className:e.main},r.createElement(m,{container:!0,justifyContent:"flex-end"},r.createElement(n,{onClick:()=>t(""),className:e.close},"X")),r.createElement(b,{className:e.avatar},r.createElement(x,null)),r.createElement(k,{component:"h1",variant:"h5"},"Create New Account"),r.createElement("form",{onSubmit:e=>{e.preventDefault();const t=e.target,a={firstName:t.firstName.value,lastName:t.lastName.value,email:t.email.value,password:t.password.value};l(a)},className:e.form},r.createElement(m,{container:!0,spacing:2},r.createElement(m,{item:!0,xs:12,sm:6},r.createElement(g,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.createElement(m,{item:!0,xs:12,sm:6},r.createElement(g,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.createElement(m,{item:!0,xs:12},r.createElement(g,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.createElement(m,{item:!0,xs:12},r.createElement(g,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.createElement(m,{item:!0,xs:12},r.createElement(N,{control:r.createElement(w,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive marketing promotions and updates via email."}))),r.createElement(n,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit},"Sign Up"),r.createElement(m,{container:!0,justifyContent:"flex-end"},r.createElement(m,{item:!0},r.createElement(y,{onClick:()=>t("logIn")},"Already have an account? Sign in"))))))}const ie=E((e=>({main:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},close:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark},borderRadius:e.spacing(200),color:e.palette.common.white}})));function ce(){const e=ie(),t=U((e=>e.setModal));return r.createElement(f,{component:"main",maxWidth:"xs"},r.createElement(v,null),r.createElement(m,{container:!0,justifyContent:"flex-end"},r.createElement(n,{onClick:()=>t(""),className:e.close},"X")),r.createElement(k,{component:"h1",variant:"h6"},"Username/Password incorrect"),r.createElement(m,{item:!0},r.createElement(y,{onClick:()=>t("signUp")},"Not our member yet? Sign Up")))}const se=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:O,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n);function me(){const e=U((e=>e.setModal));return r.createElement(f,{component:"main",maxWidth:"xs"},r.createElement(v,null),r.createElement(k,{component:"h1",variant:"h6"},"Please Select Flight and class"),r.createElement(se,{onClick:()=>e("")},"Ok"),r.createElement(m,{item:!0}))}const ue=a((()=>({root:{height:"50px",width:"80px",fontSize:"0.8rem",marginRight:"20px",marginTop:"20px",color:W,backgroundColor:O,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n),de=a((()=>({root:{height:"50px",width:"80px",fontSize:"0.8rem",marginRight:"20px",marginTop:"20px",color:W,backgroundColor:G,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n);function pe(){const e=U((e=>e.setModal)),t=U((e=>e.loggedInUser)),a=U((e=>e.logOut));return r.createElement(f,{component:"main",maxWidth:"xs"},r.createElement(v,null),r.createElement(k,{component:"h1",variant:"h4"},"Reminder:"),r.createElement(k,{component:"h1",variant:"h6"},"All future tickets will also canceled without refund. All transaction record will deleted."),r.createElement(k,{component:"h1",variant:"h5"},"Confirm to delete account?"),r.createElement(de,{onClick:()=>e("")},"Cancel"),r.createElement(ue,{onClick:()=>{fetch(`https://boolean-air.herokuapp.com/users/${null==t?void 0:t.id}`,{method:"delete"}).then((e=>{e.ok&&a()}))}},"Delete Account"))}const ge=t.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: rgb(255, 182, 193, 0.5);
  z-index: 1000;

  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;

    display: grid;
    grid-gap: 5px;
  }
`;function he(){const e=U((e=>e.modal));return U((e=>e.setModal)),""===e?null:r.createElement(ge,null,r.createElement("div",{className:"modal"},"logIn"===e?r.createElement(le,null):null,"signUp"===e?r.createElement(oe,null):null,"loginError"===e?r.createElement(ce,null):null,"selectFlight"===e?r.createElement(me,null):null,"removeAccount"===e?r.createElement(pe,null):null))}const Ee=t.header`
  background-color: ${M};
  position: fix;
  height: 100px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 200px;
  place-items: center;

  .app-logo {
    height: 100px;
  }
  nav {
    place-self: end;
    justify-self: center;
    padding: 15px;
    justify-self: left;
  }
  .nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: inherit;
    grid-auto-flow: column;
    place-content: space-between;
    nav {
      display: none;
    }
  }
`,fe=a((()=>({root:{height:"40px",margin:"0",borderRadius:0,color:K,"&:hover":{color:G}}})))(n),ve=a((()=>({root:{height:"50px",marginLeft:"5px",WebkitBorderRadius:"10px",margin:"0",borderRadius:0,color:K,backgroundColor:z,"&:hover":{backgroundColor:q}}})))(n);function be(){const e=U((e=>e.setModal)),t=l();return r.createElement(Ee,null,r.createElement("img",{className:"app-logo",src:R}),r.createElement("nav",null,r.createElement("ul",{className:"nav-list"},r.createElement(o,{variant:"text",color:"primary","aria-label":"text primary button group"},r.createElement(fe,{onClick:()=>t.push("/")},"Buy Ticket"),r.createElement(fe,{onClick:()=>t.push("/flightStatus")},"Flight Status"),r.createElement(fe,{onClick:()=>t.push("/myBooking")},"Check In")))),r.createElement("div",null,r.createElement(ve,{onClick:()=>e("logIn"),variant:"contained"},"Login"),r.createElement(ve,{onClick:()=>e("signUp"),variant:"contained"},"SignUp")))}const xe=t.form`
  display: grid;
  place-items: center;
  gap: 10px;
  padding: 30px;
  border-radius: 10px;

  box-shadow: 0px 0px 10px 0px ${q};
`;function ke(){const[e,t]=r.useState(new Date),a=U((e=>e.searchFlightStatus));return r.createElement(xe,{onSubmit:t=>{const n=t.target;t.preventDefault();const l=n.flightNumber.value.toUpperCase(),r=null==e?void 0:e.toISOString().split("T")[0].split("-").join("");if(r){const e=parseInt(r);console.log(l,e),a(l,e)}}},r.createElement("h1",null,"View Flight Status"),r.createElement(g,{id:"status-flight-number",name:"flightNumber",label:"Flight Number",variant:"outlined"}),r.createElement(c,{utils:s},r.createElement(m,{container:!0,justifyContent:"space-around"},r.createElement(u,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:e,onChange:e=>{t(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.createElement(J,{type:"submit"},"Search"))}const Ne=t.div`
  display: grid;
  gap: 10px;
  .key-info {
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    padding: 50px 10px;
    background-color: ${z};
  }
  .flightIcon {
    width: 50px;
    height: 50px;
    transform: rotate(90deg);
  }
  .place-center {
    display: grid;
    place-items: center;
  }
  .operation-info {
    display: grid;
    gap: 5px;
  }
  span {
    color: ${G};
  }
  p {
    font-weight: 600;
    font-size: 0.8rem;
  }
  .status {
    padding-top: 10px;
    font-size: 1.3rem;
    color: ${O};
  }
`;function we(){const e=U((e=>e.flightStatus)),t=U((e=>e.airportList)),a=null==t?void 0:t.find((t=>t.id===(null==e?void 0:e.flightNumber.departureAirportId))),n=null==t?void 0:t.find((t=>t.id===(null==e?void 0:e.flightNumber.arrivalAirportId))),l=null==e?void 0:e.date.toString().split("");null==l||l.splice(4,0,"-"),null==l||l.splice(7,0,"-");const o=null==l?void 0:l.join("");return r.createElement(Ne,null,r.createElement("div",{className:"operation-info"},r.createElement("span",{className:"status"},null==e?void 0:e.flightNumberId),r.createElement("span",null,"Date: ",o),r.createElement("span",null,"Operated by ",null==e?void 0:e.flightNumber.airline.name)),r.createElement("div",{className:"key-info place-center"},r.createElement("div",null,r.createElement("h2",null,null==a?void 0:a.id),r.createElement("p",null,null==a?void 0:a.name),r.createElement("p",null,null==a?void 0:a.city)),r.createElement("div",{className:"place-center"},r.createElement(p,{className:"flightIcon"}),r.createElement("p",null,"Duration ",null==e?void 0:e.flightNumber.durationHour,"h"),r.createElement("p",{className:"status"},null==e?void 0:e.status)),r.createElement("div",null,r.createElement("h2",null,null==n?void 0:n.id),r.createElement("p",null,null==n?void 0:n.name),r.createElement("p",null,null==n?void 0:n.city))),r.createElement("div",null,r.createElement("span",null,"Gate number: "),r.createElement("span",{className:"status"},null==e?void 0:e.gateNumber)),r.createElement("div",null,r.createElement("span",null,"Aircraft Type: "),r.createElement("span",null,null==e?void 0:e.flightNumber.aircraftId)))}const ye=t.div`
  margin: 20px;
`;function Se(){const e=U((e=>e.flightStatus));return r.createElement(ye,null,void 0===e?r.createElement("h2",null,"Flight not found"):null===e?null:r.createElement(we,null))}const Ce=t.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin: 20px;
`;function Ie(){const e=U((e=>e.flightStatus));return d.exports.useEffect((()=>{console.log(e)}),[e]),r.createElement(Ce,null,r.createElement(ke,null),r.createElement(Se,null))}const Le=t.li`
  margin: 10px;
  padding: 10px;
  overflow: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`,Fe=t.img`
  height: 100px;
  widhth: 120px;
`,De=a((()=>({root:{height:"50px",fontSize:"12px",WebkitBorderRadius:"10px",margin:"5px",padding:"50px",borderRadius:0,color:K,backgroundColor:z,"&:hover":{backgroundColor:q}}})))(n);function $e(){const e=U((e=>e.airportList));return r.createElement(Le,null,null==e?void 0:e.map((e=>r.createElement(De,null,r.createElement(Fe,{src:e.cityImage,alt:""}),e.name,", ",e.id,", ",e.city))))}const je=t.div`
  display: grid;
  grid-template:
    "header header" 100px
    "nav main" 1fr /
    200px 1fr;

  height: 100vh;
  width: 100vw;
`,Ae=t.nav`
  grid-area: nav;
  border: solid 1px ${M};
  margin: 10px;
  .buttonGroup {
    display: grid;
    grid-template-rows: auto;
    height: 60vh;
    margin: 10px;
  }
  .navList {
    border-radius: 15px;
  }
`,Be=t.li`
  margin: 10px;
`,Te=t.main`
  grid-area: main;
  border: solid 1px ${M};
  margin: 10px;
`,Pe=t.header`
  background-color: ${M};
  grid-area: header;
  height: 100px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 150px;
  place-items: center;

  .app-logo {
    height: 100px;
  }

  //   @media only screen and (max-width: 650px) {
  //     grid-template-columns: inherit;
  //     grid-auto-flow: column;
  //     place-content: space-between;
  //     nav {
  //       display: none;
  //     }
  //   }
`,Ue=a((()=>({root:{height:"100px",margin:"0",color:M,"&:hover":{color:G}}})))(n),Re=a((()=>({root:{height:"50px",WebkitBorderRadius:"10px",margin:"0",marginLeft:"5px",borderRadius:0,color:K,backgroundColor:z,"&:hover":{backgroundColor:q}}})))(n);function Oe(){U((e=>e.departureFlightList)),U((e=>e.setDepartureFlightList));const e=U((e=>e.logOut));return r.createElement(je,null,r.createElement(Pe,null,r.createElement("img",{className:"app-logo",src:R}),r.createElement("div",null),r.createElement("div",null,r.createElement(i,{to:"/"},r.createElement(Re,{onClick:e,variant:"contained"},"LogOut")))),r.createElement(Ae,null,r.createElement("ul",{className:"nav-list"},r.createElement(o,{variant:"text",color:"primary","aria-label":"text primary button group",className:"buttonGroup"},r.createElement(Ue,{className:"navList"},"Crew number Base Airport"),r.createElement(Ue,{className:"navList"},"View Departure list"),r.createElement(Ue,{className:"navList"},"View Arrival list"),r.createElement(Ue,{className:"navList"},"Checkin counter"),r.createElement(Ue,{className:"navList"},"Onboard counter")))),r.createElement(Te,null,r.createElement(Be,null,r.createElement("ul",null,r.createElement($e,null)))))}const Me=t.li`
  min-width: 200px;
  box-shadow: 0 0 10px 0;
  border-radius: 10px;
  padding: 10px;
  button span {
    color: ${W};
  }
  p {
    font-weight: 600;
    padding: 5px 0px;
  }
  h2 {
    padding: 10px 0px;
  }
  .status {
    padding-top: 10px;
    font-size: 1rem;
    background-color: ${z};
    padding: 10px;
    margin: 10px 0;
  }
  .price-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
  .route-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    background-color: ${z};
    padding: 10px;
    margin: 10px 0;
  }
`,We=a((()=>({root:{height:"50px",WebkitBorderRadius:"10px",margin:"0",marginLeft:"5px",backgroundColor:M,"&:hover":{backgroundColor:z}}})))(n),qe=a((()=>({root:{height:"50px",WebkitBorderRadius:"10px",margin:"0",marginLeft:"5px",backgroundColor:q,"&:hover":{backgroundColor:z}}})))(n);function ze({booking:e}){const{status:t,scheduledFlight:a}=e.tickets[0];if(!a)return null;const{date:n,flightNumberId:o,flightNumber:i,time:c}=a,s=l(),m=n.toString().split("");null==m||m.splice(4,0,"-"),null==m||m.splice(7,0,"-");const u=null==m?void 0:m.join("");return r.createElement(Me,null,r.createElement("p",null,o),r.createElement("p",null,u),r.createElement("p",null,c),r.createElement("div",{className:"route-container"},r.createElement("h2",null,i.departureAirportId),r.createElement("h2",null,"to"),r.createElement("h2",null,i.arrivalAirportId)),r.createElement("span",null,"Tickets: ",e.tickets.length," "),r.createElement("div",{className:"price-container"},r.createElement("span",null,"Class: ",e.tickets[0].class),r.createElement("span",null,"Price: £"," ","econ"===e.tickets[0].class?e.tickets.length*a.economicPrice:"first"===e.tickets[0].class?e.tickets.length*a.firstClassPrice:e.tickets.length*a.businessPrice)),r.createElement("p",{className:"status"},"Flight Status: ",a.status),"ONLINECHECKIN"===t?r.createElement(We,null,"View Boarding Pass"):"CHECKIN"===a.status?r.createElement(We,{onClick:()=>s.push(`/onlineCheckIn/${e.id}`)},"Go CheckIn"):r.createElement(qe,{disabled:!0},t))}const Ke=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:O,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n),Ge=t.main`
  padding: 20px 50px;
`,He=t.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 0;
  gap: 20px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;function Ve(){const e=U((e=>e.userBooking)),t=U((e=>e.getUserBooking)),a=U((e=>e.loggedInUser)),n=U((e=>e.setModal));return d.exports.useEffect((()=>{a||n("logIn")}),[a]),d.exports.useEffect((()=>{t()}),[]),r.createElement(Ge,null,r.createElement("h1",null,"My Booking"),r.createElement(He,null,(null==e?void 0:e.length)?e.map((e=>r.createElement(ze,{key:e.id,booking:e}))):null),r.createElement(Ke,{onClick:()=>n("removeAccount")},"Remove Account"))}const Je=a((()=>({root:{height:"50px",WebkitBorderRadius:"10px",margin:"0",marginLeft:"5px",borderRadius:0,color:K,backgroundColor:z,"&:hover":{backgroundColor:q}}})))(n),Xe=t.header`
  display: grid;
  grid-auto-flow: column;
  p {
    font-size: 1.5rem;
  }
`;function _e(){const e=l(),t=U((e=>e.flightSearch)),a=U((e=>e.flightSearchNoDate)),n=U((e=>e.resetSearch));return r.createElement(Xe,null,t||null!==a?null:r.createElement("h1",null,"Loading..."),t||void 0!==a?null:r.createElement("h1",null,"Sorry we dont have the routes"),(null==t?void 0:t.length)?r.createElement("div",null,r.createElement("p",null,t[0].flightNumber.departureAirportId," to"," ",t[0].flightNumber.arrivalAirportId),r.createElement("p",null,"Please Select Flight")):null,(null==a?void 0:a.length)?r.createElement("div",null,r.createElement("p",null,a[0].flightNumber.departureAirportId," to"," ",a[0].flightNumber.arrivalAirportId),r.createElement("span",null,"Please Select Flight")):null,r.createElement(Je,{onClick:()=>(e.push("/"),void n())},"New Search"))}const Qe=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:M,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:z}}})))(n),Ye=t.li`
  box-shadow: 0 0 5px 0px ${O};
  border-radius: 5px;

  .key-info {
    display: grid;
    grid-template-columns: 150px 1fr 10vh;
    padding: 20px 10px;
    background-color: ${z};
  }
  .flightIcon {
    width: 50px;
    height: 50px;
    transform: rotate(90deg);
  }
  .place-center {
    display: grid;
    place-items: center;
  }
  .operation-info {
    display: grid;
    gap: 5px;
    padding: 5px;
  }
  span {
    color: ${K};
  }
  p {
    font-weight: 600;
    font-size: 0.8rem;
  }
  .status {
    padding-top: 10px;
    font-size: 1.3rem;
    color: ${O};
  }
  .card-container {
    display: grid;
    grid-template-columns: 150px 1fr 20vw;
  }
  .togglePrice {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    align-content: space-between;
  }
  .class-price {
    background-color: ${q};
    display: grid;
    gap: 5px;
    place-items: center;
    justify-self: center;
    padding: 20px;
    align-content: space-between;
    text-align-last: center;
    width: 100%;
  }
  .icon {
    fill: ${O};
  }
  .tick {
    fill: green;
  }
  .two-column-space-between {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
`;function Ze({data:e}){const{date:t,flightNumber:a,economicPrice:n,businessPrice:l,firstClassPrice:o}=e,{id:i,arrivalAirportId:c,departureAirportId:s,durationHour:m}=a,u=U((e=>e.airportList)),g=U((e=>e.outboundBooking)),h=U((e=>e.selectOutboundFlight)),E=null==u?void 0:u.find((e=>e.id===s)),f=null==u?void 0:u.find((e=>e.id===c)),[v,b]=d.exports.useState(!1),x=()=>{b(!v)},k=t=>{h({class:t,scheduledFlightId:e.id}),b(!v)};return console.log("outboundBooking",g),g&&(null==g?void 0:g.tickets[0].scheduledFlightId)!==e.id?null:r.createElement(Ye,null,r.createElement("div",{className:"card-container"},r.createElement("div",{className:"operation-info"},r.createElement("span",{className:"status"},i),r.createElement("span",null,"Date: ",t)),r.createElement("div",{className:"key-info place-center"},r.createElement("div",null,r.createElement("h2",null,null==E?void 0:E.id),r.createElement("p",null,null==E?void 0:E.name),r.createElement("p",null,null==E?void 0:E.city)),r.createElement("div",{className:"place-center"},r.createElement(p,{className:"flightIcon"}),r.createElement("p",null,"Duration ",m,"h")),r.createElement("div",null,r.createElement("h2",null,null==f?void 0:f.id),r.createElement("p",null,null==f?void 0:f.name),r.createElement("p",null,null==f?void 0:f.city))),g?r.createElement(Qe,{variant:"contained",onClick:()=>x()},r.createElement("span",null,"Selected: ",g.tickets[0].class)):r.createElement(Qe,{variant:"contained",onClick:()=>x()},r.createElement("span",null,"Show prices from £",n))),r.createElement("div",{className:"togglePrice",style:{display:""+(v?"grid":"none")}},r.createElement("div",{className:"class-price"},r.createElement("h2",null,"First class"),r.createElement("div",{className:"two-column-space-between"},r.createElement(S,{className:"icon"}),r.createElement("span",null,a.airline.firstClassLuggage,"KG")),r.createElement("div",{className:"two-column-space-between"},r.createElement(C,{className:"icon"}),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement("span",null,"Lounge Access"),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement("span",null,"Free rebook"),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement(L,{className:"icon"}),r.createElement("h3",null,"£ ",o)),r.createElement(Qe,{variant:"contained",onClick:()=>k("first")},"Select")),r.createElement("div",{className:"class-price"},r.createElement("h2",null,"Business class"),r.createElement("div",{className:"two-column-space-between"},r.createElement(S,{className:"icon"}),r.createElement("span",null,a.airline.businessLuggage,"KG")),r.createElement("div",{className:"two-column-space-between"},r.createElement(C,{className:"icon"}),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement("span",null,"Lounge Access"),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement(L,{className:"icon"}),r.createElement("h3",null,"£ ",l)),r.createElement(Qe,{variant:"contained",onClick:()=>k("business")},"Select")),r.createElement("div",{className:"class-price"},r.createElement("h2",null,"Econ class"),r.createElement("div",{className:"two-column-space-between"},r.createElement(S,{className:"icon"}),r.createElement("span",null,a.airline.economicLuggage,"KG")),r.createElement("div",{className:"two-column-space-between"},r.createElement(L,{className:"icon"}),r.createElement("h3",null,"£ ",n)),r.createElement(Qe,{variant:"contained",onClick:()=>k("econ")},"Select"))))}const et=t.section`
  display: grid;
  gap: 10px;
  .city-image {
    width: 95vw;
    height: 200px;
    object-fit: cover;
  }
  .bold {
    font-weight: 700;
  }
  .result-list {
    display: grid;
    gap: 20px;
  }
`;function tt(){const e=U((e=>e.flightSearch)),t=U((e=>e.flightSearchNoDate)),a=U((e=>e.airportList)),[n,l]=d.exports.useState(null);return d.exports.useEffect((()=>{if(null==e?void 0:e.length){const t=null==a?void 0:a.find((t=>t.id===e[0].flightNumber.departureAirportId));l(t)}if(null==t?void 0:t.length){const e=null==a?void 0:a.find((e=>e.id===t[0].flightNumber.departureAirportId));l(e)}}),[e,t]),!e&&(null==t?void 0:t.length)&&n?r.createElement(et,null,r.createElement("div",{className:"img-container"},r.createElement("img",{className:"city-image",src:n.cityImage})),r.createElement("p",{className:"bold"},"No scheduled flight on selected date, here are more options ..."),r.createElement("ul",{className:"result-list"},t.map(((e,t)=>r.createElement(Ze,{key:t,data:e}))))):(null==e?void 0:e.length)&&n?r.createElement(et,null,r.createElement("div",{className:"img-container"},r.createElement("img",{className:"city-image",src:n.cityImage})),r.createElement("ul",{className:"result-list"},e.map(((e,t)=>r.createElement(Ze,{key:t,data:e}))))):null}const at=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:M,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:z}}})))(n),nt=t.li`
  box-shadow: 0 0 5px 0px ${O};
  border-radius: 5px;

  .key-info {
    display: grid;
    grid-template-columns: 150px 1fr 10vh;
    padding: 20px 10px;
    background-color: ${z};
  }
  .flightIcon {
    width: 50px;
    height: 50px;
    transform: rotate(90deg);
  }
  .place-center {
    display: grid;
    place-items: center;
  }
  .operation-info {
    display: grid;
    gap: 5px;
    padding: 5px;
  }
  span {
    color: ${K};
  }
  p {
    font-weight: 600;
    font-size: 0.8rem;
  }
  .status {
    padding-top: 10px;
    font-size: 1.3rem;
    color: ${O};
  }
  .card-container {
    display: grid;
    grid-template-columns: 150px 1fr 20vw;
  }
  .togglePrice {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    align-content: space-between;
  }
  .class-price {
    background-color: ${q};
    display: grid;
    gap: 5px;
    place-items: center;
    justify-self: center;
    padding: 20px;
    align-content: space-between;
    text-align-last: center;
    width: 100%;
  }
  .icon {
    fill: ${O};
  }
  .tick {
    fill: green;
  }
  .two-column-space-between {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
`;function lt({data:e}){const{date:t,flightNumber:a,economicPrice:n,businessPrice:l,firstClassPrice:o}=e,{id:i,arrivalAirportId:c,departureAirportId:s,durationHour:m}=a,u=U((e=>e.airportList)),g=U((e=>e.inboundBooking)),h=U((e=>e.selectInboundFlight)),E=null==u?void 0:u.find((e=>e.id===s)),f=null==u?void 0:u.find((e=>e.id===c)),[v,b]=d.exports.useState(!1),x=()=>{b(!v)},k=t=>{h({class:t,scheduledFlightId:e.id}),b(!v)};return console.log("inboundBooking",g),g&&(null==g?void 0:g.tickets[0].scheduledFlightId)!==e.id?null:r.createElement(nt,null,r.createElement("div",{className:"card-container"},r.createElement("div",{className:"operation-info"},r.createElement("span",{className:"status"},i),r.createElement("span",null,"Date: ",t)),r.createElement("div",{className:"key-info place-center"},r.createElement("div",null,r.createElement("h2",null,null==E?void 0:E.id),r.createElement("p",null,null==E?void 0:E.name),r.createElement("p",null,null==E?void 0:E.city)),r.createElement("div",{className:"place-center"},r.createElement(p,{className:"flightIcon"}),r.createElement("p",null,"Duration ",m,"h")),r.createElement("div",null,r.createElement("h2",null,null==f?void 0:f.id),r.createElement("p",null,null==f?void 0:f.name),r.createElement("p",null,null==f?void 0:f.city))),g?r.createElement(at,{variant:"contained",onClick:()=>x()},r.createElement("span",null,"Selected: ",g.tickets[0].class)):r.createElement(at,{variant:"contained",onClick:()=>x()},r.createElement("span",null,"Show prices from £",n))),r.createElement("div",{className:"togglePrice",style:{display:""+(v?"grid":"none")}},r.createElement("div",{className:"class-price"},r.createElement("h2",null,"First class"),r.createElement("div",{className:"two-column-space-between"},r.createElement(S,{className:"icon"}),r.createElement("span",null,a.airline.firstClassLuggage,"KG")),r.createElement("div",{className:"two-column-space-between"},r.createElement(C,{className:"icon"}),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement("span",null,"Lounge Access"),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement("span",null,"Free rebook"),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement(L,{className:"icon"}),r.createElement("h3",null,"£ ",o)),r.createElement(at,{variant:"contained",onClick:()=>k("first")},"Select")),r.createElement("div",{className:"class-price"},r.createElement("h2",null,"Business class"),r.createElement("div",{className:"two-column-space-between"},r.createElement(S,{className:"icon"}),r.createElement("span",null,a.airline.businessLuggage,"KG")),r.createElement("div",{className:"two-column-space-between"},r.createElement(C,{className:"icon"}),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement("span",null,"Lounge Access"),r.createElement(I,{className:"tick"})),r.createElement("div",{className:"two-column-space-between"},r.createElement(L,{className:"icon"}),r.createElement("h3",null,"£ ",l)),r.createElement(at,{variant:"contained",onClick:()=>k("business")},"Select")),r.createElement("div",{className:"class-price"},r.createElement("h2",null,"Econ class"),r.createElement("div",{className:"two-column-space-between"},r.createElement(S,{className:"icon"}),r.createElement("span",null,a.airline.economicLuggage,"KG")),r.createElement("div",{className:"two-column-space-between"},r.createElement(L,{className:"icon"}),r.createElement("h3",null,"£ ",n)),r.createElement(at,{variant:"contained",onClick:()=>k("econ")},"Select"))))}const rt=t.section`
  display: grid;
  gap: 10px;
  .city-image {
    width: 95vw;
    height: 200px;
    object-fit: cover;
  }
  .bold {
    font-weight: 700;
  }
  .result-list {
    display: grid;
    gap: 20px;
  }
`;function ot(){const e=U((e=>e.arrivalFlightSearch)),t=U((e=>e.arrivalFlightSearchNoDate)),a=U((e=>e.airportList)),[n,l]=d.exports.useState(null);return d.exports.useEffect((()=>{if(null==e?void 0:e.length){const t=null==a?void 0:a.find((t=>t.id===e[0].flightNumber.departureAirportId));l(t)}if(null==t?void 0:t.length){const e=null==a?void 0:a.find((e=>e.id===t[0].flightNumber.departureAirportId));l(e)}}),[e,t]),!e&&(null==t?void 0:t.length)&&n?r.createElement(rt,null,r.createElement("div",{className:"img-container"},r.createElement("img",{className:"city-image",src:n.cityImage})),r.createElement("p",{className:"bold"},"No scheduled flight on selected date, here are more options ..."),r.createElement("ul",{className:"result-list"},t.map(((e,t)=>r.createElement(lt,{key:t,data:e}))))):(null==e?void 0:e.length)&&n?r.createElement(rt,null,r.createElement("div",{className:"img-container"},r.createElement("img",{className:"city-image",src:n.cityImage})),r.createElement("ul",{className:"result-list"},e.map(((e,t)=>r.createElement(lt,{key:t,data:e}))))):null}const it=t.main`
  display: grid;
  gap: 20px;
  margin: 20px;
`,ct=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:O,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n);function st(){const e=U((e=>e.flightSearch)),t=U((e=>e.flightSearchNoDate)),a=U((e=>e.setModal)),n=U((e=>e.loggedInUser)),o=l(),i=U((e=>e.outboundBooking));return r.createElement(it,null,r.createElement(_e,null),r.createElement(tt,null),r.createElement(ot,null),e||t?r.createElement(ct,{onClick:()=>(n&&i&&o.push("/bookingForm"),!n&&i&&a("logIn"),void(i||a("selectFlight")))},"Complete Booking Form"):null)}const mt=({valueToShow:e,handleIncrement:t,handleDecrement:a})=>{const l=e>0;return r.createElement(o,{size:"small","aria-label":"small outlined button group"},r.createElement(n,{onClick:t},"+"),l&&r.createElement(n,{disabled:!0},e),l&&r.createElement(n,{onClick:a},"-"))},ut=E((e=>({main:{marginTop:e.spacing(10)},mainHeader:{margin:"20px",textAlign:"center"},form:{},passengersNum:{display:"flex",alignItems:"center"},luggageOptions:{display:"grid",alignItems:"center",background:z,width:"200px",height:"100px",border:"1px, solid black",borderRadius:"5px"},luggageText:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:e.spacing(5)},boxWrapper:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",marginTop:"30px",gridGap:e.spacing(8)},priceWrapper:{display:"grid",alignItems:"center",marginTop:"30px",gridGap:e.spacing(8)}}))),dt=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:O,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n),pt=()=>{const e=ut(),t=l(),[a,n]=d.exports.useState(0),[o,i]=d.exports.useState(0),[c,s]=d.exports.useState(0),[u,p]=d.exports.useState(0);let[g,h]=d.exports.useState(0);U((e=>e.outboundBooking));const E=U((e=>e.inboundBooking)),b=U((e=>e.loggedInUser));console.log("inbound booking",E);return r.createElement(f,{component:"main",maxWidth:"sm"},r.createElement("h1",{className:e.mainHeader},"Booking Form"),r.createElement(v,null),r.createElement("div",{className:e.main},r.createElement("form",{onSubmit:e=>{e.preventDefault();const t={userId:null==b?void 0:b.id,bookExtraLuggage:[],tickets:[]};o&&t.bookExtraLuggage.push({quantity:o,extraLuggageId:1}),c&&t.bookExtraLuggage.push({quantity:c,extraLuggageId:2}),u&&t.bookExtraLuggage.push({quantity:u,extraLuggageId:3});const n={userId:null==b?void 0:b.id,bookExtraLuggage:[],tickets:[{class:"econ",scheduledFlightId:123},{class:"econ",scheduledFlightId:123},{class:"econ",scheduledFlightId:123}]};if(o&&n.bookExtraLuggage.push({quantity:o,extraLuggageId:1}),c&&n.bookExtraLuggage.push({quantity:c,extraLuggageId:2}),u&&n.bookExtraLuggage.push({quantity:u,extraLuggageId:3}),E&&0!==a)for(let l=0;l<a;l++)console.log("inside inbookin",n.tickets),console.log("inside inboundbooking",E.tickets),t.tickets.push(null==E?void 0:E.tickets[0]),console.log("after push",n.tickets);fetch("https://boolean-air.herokuapp.com/booking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newBooking:t})}).then((e=>console.log(e.json())))},className:e.form},r.createElement(m,{container:!0,spacing:2},r.createElement(m,{item:!0,xs:12},r.createElement(m,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center"},r.createElement(k,{component:"h3"},"Number Of Passengers"),r.createElement(k,{component:"p"},"Need to check stock"),r.createElement(mt,{valueToShow:a,handleDecrement:()=>n(a-1),handleIncrement:()=>n(a+1)})),r.createElement(m,null,r.createElement(k,{component:"p"},"Whant more luggage?"),r.createElement(m,{className:e.boxWrapper},r.createElement(m,{container:!0,direction:"column",alignItems:"center",spacing:2,justifyContent:"space-between"},r.createElement("div",{className:e.luggageOptions},r.createElement(k,{className:e.luggageText},"Luggage Option 10kg")),r.createElement(mt,{valueToShow:o,handleDecrement:()=>{i(o-1),0!==g&&h(g-20)},handleIncrement:()=>{i(o+1),h(g+20)}})),r.createElement(m,{container:!0,direction:"column",alignItems:"center",spacing:2,justifyContent:"space-between"},r.createElement("div",{className:e.luggageOptions},r.createElement(k,{className:e.luggageText},"Luggage Option 20kg")),r.createElement(mt,{valueToShow:c,handleDecrement:()=>{s(c-1),0!==g&&h(g-30)},handleIncrement:()=>{s(c+1),h(g+30)}})),r.createElement(m,{container:!0,direction:"column",alignItems:"center",spacing:2,justifyContent:"space-between"},r.createElement("div",{className:e.luggageOptions},r.createElement(k,{className:e.luggageText},"Luggage Option 30kg")),r.createElement(mt,{valueToShow:u,handleDecrement:()=>{p(u-1),0!==g&&h(g-50)},handleIncrement:()=>{p(u+1),h(g+50)}})))))),r.createElement(m,{className:e.priceWrapper},r.createElement(m,null,r.createElement(k,null,"Total Price $",g.toFixed(2)))),r.createElement(dt,{variant:"contained",type:"submit",onClick:()=>t.push("/myBooking")},"PayMent"))))};function gt(){return U((e=>e.outboundBooking)),U((e=>e.flightSearch)),U((e=>e.flightSearchNoDate)),r.createElement("div",null,r.createElement(pt,null))}const ht=a((()=>({root:{height:"auto",width:"15vw",fontSize:"0.8rem",color:W,backgroundColor:O,boxShadow:`0 0 5px 0 ${q}`,placeSelf:"center","&:hover":{backgroundColor:M}}})))(n),Et=t.li`
  padding: 20px;
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
  .mealRequest {
    display: grid;
  }
`;const ft=["A","B","C","D","E","F"];function vt({ticket:e,index:t}){const a=[(i=ft,i[Math.floor(Math.random()*i.length)]),(n=1,o=50,Math.floor(Math.random()*(o-n+1)+n))];var n,o,i;const[c,s]=d.exports.useState(e),[m,u]=d.exports.useState("regular"),[p,h]=d.exports.useState(!!e.passengerFirstName);l();console.log(m);return p?r.createElement(Et,null,r.createElement("h2",null,"Passenger ",t+1),r.createElement("div",{className:"form"},r.createElement("p",null,"First name: ",c.passengerFirstName),r.createElement("p",null,"Last Name: ",c.passengerLastName),r.createElement("p",null,"Passport Number: ",c.passpostNumber),r.createElement("p",null,"Seat Number: ",c.seatNumer),r.createElement("p",null,"Meal Request: ",c.specialMeal),r.createElement(ht,{disabled:!0},"Saved"))):r.createElement(Et,null,r.createElement("h2",null,"Passenger ",t+1),r.createElement("form",{className:"form",onSubmit:t=>(t=>{const a=t.target;t.preventDefault();const n={passengerFirstName:a.firstName.value,passengerLastName:a.lastName.value,passpostNumber:a.passport.value,seatNumer:a.seat.value,specialMeal:m,status:"ONLINECHECKIN"};fetch(`https://boolean-air.herokuapp.com/tickets/${e.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>{if(e.ok)return e.json()})).then((e=>{console.log(e),s(e.data),h(!0)}))})(t)},r.createElement(g,{name:"firstName",label:"First Name",required:!0}),r.createElement(g,{name:"lastName",label:"Last Name",required:!0}),r.createElement(g,{name:"passport",label:"Passport Number",required:!0}),r.createElement(g,{name:"seat",label:"Seat Number",value:a.join("")}),r.createElement("div",{className:"mealRequest"},r.createElement(F,{id:"mealRequest"},"Meal request"),r.createElement(D,{labelId:"mealRequest",name:"meal",value:m,onChange:e=>(e=>{u(e.target.value)})(e)},r.createElement($,{value:"regular",selected:!0},"Regular"),r.createElement($,{value:"vegan"},"Vegan"),r.createElement($,{value:"halal"},"Halal"),r.createElement($,{value:"lowSalt"},"Low Salt"),r.createElement($,{value:"child"},"Child"))),r.createElement(ht,{type:"submit"},"Save")))}const bt=t.main`
  padding: 20px 50px;
  .checkin-container {
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 20px;
    margin-top: 20px;
    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
  h2 {
    font-weight: 400;
    max-width: 650px;
    font-size: 1.2rem;
    margin: 10px 0;
  }
`,xt=t.div`
  min-width: 200px;
  box-shadow: 0 0 10px 0;
  border-radius: 10px;
  padding: 10px;
  button span {
    color: ${W};
  }
  p {
    font-weight: 600;
    padding: 5px 0px;
  }
  h2 {
    padding: 10px 0px;
  }
  .status {
    padding-top: 10px;
    font-size: 1rem;
    background-color: ${z};
    padding: 10px;
    margin: 10px 0;
  }
  .price-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
  .route-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    background-color: ${z};
    padding: 10px;
    margin: 10px 0;
  }
`;function kt(){const{id:e}=j(),[t,a]=d.exports.useState(null),[n,l]=d.exports.useState(null);d.exports.useEffect((()=>{fetch(`https://boolean-air.herokuapp.com/bookings/${parseInt(e)}`).then((e=>e.json())).then((e=>{a(e[0])}))}),[e]),d.exports.useEffect((()=>{(null==t?void 0:t.tickets[0].scheduledFlight)&&l(t.tickets[0].scheduledFlight)}),[t]),console.log(t);const o=null==n?void 0:n.date.toString().split("");null==o||o.splice(4,0,"-"),null==o||o.splice(7,0,"-");const i=null==o?void 0:o.join("");return t&&n?r.createElement(bt,null,r.createElement("h1",null,"Online Check In # ",e),r.createElement("h2",null,"Make sure you check in all passenger before your leave this page. Otherwise you need to check in at airport counter"),r.createElement("div",{className:"checkin-container"},r.createElement(xt,null,r.createElement("p",null,null==n?void 0:n.flightNumberId),r.createElement("p",null,i),r.createElement("p",null,null==n?void 0:n.time),r.createElement("div",{className:"route-container"},r.createElement("h2",null,null==n?void 0:n.flightNumber.departureAirportId),r.createElement("h2",null,"to"),r.createElement("h2",null,null==n?void 0:n.flightNumber.arrivalAirportId)),r.createElement("span",null,"Tickets: ",t.tickets.length," "),r.createElement("div",{className:"price-container"},r.createElement("span",null,"Class: ",t.tickets[0].class),r.createElement("span",null,"Price: £"," ","econ"===t.tickets[0].class&&n?t.tickets.length*n.economicPrice:"first"===t.tickets[0].class&&n?t.tickets.length*n.firstClassPrice:n?t.tickets.length*n.businessPrice:null))),r.createElement("ul",null,t.tickets.map(((e,t)=>r.createElement(vt,{ticket:e,key:e.id,index:t})))))):r.createElement(bt,null,r.createElement("h1",null,"Loading..."))}function Nt(){U((e=>e.airportList));const e=U((e=>e.setAirportList)),t=U((e=>e.loggedInUser));return d.exports.useEffect((()=>{e()}),[]),r.createElement("div",{className:"App"},r.createElement(A,null,r.createElement(B,{path:"/staffpage",exact:!0},r.createElement(Oe,null)),r.createElement(B,{path:"/",exact:!0},t?r.createElement(X,null):r.createElement(be,null),r.createElement(ae,null)),r.createElement(B,{path:"/flightStatus",exact:!0},t?r.createElement(X,null):r.createElement(be,null),r.createElement(Ie,null)),r.createElement(B,{path:"/myBooking",exact:!0},t?r.createElement(X,null):r.createElement(be,null),r.createElement(Ve,null)),r.createElement(B,{path:"/searchResult",exact:!0},t?r.createElement(X,null):r.createElement(be,null),r.createElement(st,null)),r.createElement(B,{path:"/bookingForm",exact:!0},t?r.createElement(X,null):r.createElement(be,null),r.createElement(gt,null)),r.createElement(B,{path:"/onlineCheckIn/:id"},t?r.createElement(X,null):r.createElement(be,null),r.createElement(kt,null)),r.createElement(B,null,r.createElement("h3",null,"Error 404 - mock mock"))),r.createElement(he,null))}T.render(r.createElement(r.StrictMode,null,r.createElement(P,null,r.createElement(Nt,null))),document.getElementById("root"));
