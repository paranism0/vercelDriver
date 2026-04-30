export const config={runtime:"edge"};

const _0x1a=(process.env.OK||"").replace(/\/$/,"");

const _0x2b=new Set([
"host","connection","keep-alive","proxy-authenticate",
"proxy-authorization","te","trailer","transfer-encoding",
"upgrade","forwarded","x-forwarded-host",
"x-forwarded-proto","x-forwarded-port"
]);

export default async function _0x3c(_0x4d){
if(!_0x1a)return new Response("Misconfigured",{status:500});
try{
const _0x5e=new URL(_0x4d.url),
_0x6f=_0x1a+_0x5e.pathname+_0x5e.search,
_0x7a=new Headers();

let _0x8b=null;

for(const[_0x9c,_0xaa]of _0x4d.headers){
const _0xbb=_0x9c.toLowerCase();
if(_0x2b.has(_0xbb)||_0xbb.startsWith("x-vercel-"))continue;
if(_0xbb==="x-real-ip"){_0x8b=_0xaa;continue;}
if(_0xbb==="x-forwarded-for"){if(!_0x8b)_0x8b=_0xaa;continue;}
_0x7a.set(_0xbb,_0xaa);
}

if(_0x8b)_0x7a.set("x-forwarded-for",_0x8b);

const _0xcc=_0x4d.method,
_0xdd=_0xcc!=="GET"&&_0xcc!=="HEAD";

const _0xee={method:_0xcc,headers:_0x7a,redirect:"manual"};

if(_0xdd){
_0xee.body=_0x4d.body;
_0xee.duplex="half";
}

const _0xff=await fetch(_0x6f,_0xee),
_0x11=new Headers();

for(const[_0x22,_0x33]of _0xff.headers){
if(_0x22.toLowerCase()==="transfer-encoding")continue;
_0x11.set(_0x22,_0x33);
}

return new Response(_0xff.body,{
status:_0xff.status,
headers:_0x11
});

}catch(_0x44){
return new Response("App Failed",{status:502});
}
}
