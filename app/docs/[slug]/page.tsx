import fs from 'node:fs';
import path from 'node:path';
import {notFound} from 'next/navigation';
import {Markdown} from '@/components/Markdown';
import {docs} from '@/content/navigation';
export const dynamicParams=false;
export function generateStaticParams(){return docs.map(d=>({slug:d.slug}))}
export default function Page({params}:{params:{slug:string}}){const item=docs.find(d=>d.slug===params.slug);if(!item)notFound();const file=path.join(process.cwd(),'content','docs',params.slug+'.md');const source=fs.existsSync(file)?fs.readFileSync(file,'utf8'):'# '+item.title+'\n\n'+item.summary+'\n\nThis chapter is part of the CAGE V4 reference and is expanded alongside the open-source compiler and examples in this repository.';return <main className="wide"><a href="/">④🧰 CAGE</a><p className="eyebrow">{item.group}</p><article className="doc"><Markdown source={source}/></article></main>}
