import fs from 'node:fs';
import path from 'node:path';
import {notFound} from 'next/navigation';
import {Markdown} from '@/components/Markdown';
import {docs} from '@/content/navigation';
export const dynamicParams=false;
export function generateStaticParams(){return docs.map(d=>({slug:d.slug}))}
export default function Page({params}:{params:{slug:string}}){const item=docs.find(d=>d.slug===params.slug);if(!item)notFound();const file=path.join(process.cwd(),'content','docs',params.slug+'.md');if(!fs.existsSync(file))notFound();const source=fs.readFileSync(file,'utf8');return <main className="wide"><a href="/">④🧰 CAGE</a><p className="eyebrow">{item.group}</p><article className="doc"><Markdown source={source}/></article></main>}
