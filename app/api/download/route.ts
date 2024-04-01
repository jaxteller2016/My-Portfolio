import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), 'public', 'Sorin-Craciunescu-CV.pdf')
  );

  const headers = new Headers();
  headers.append(
    'Content-Disposition',
    'attachment; filename="Sorin-Craciunescu-CV.pdf"'
  );
  headers.append('Content-Type', 'application/pdf');

  return new Response(buffer, {
    headers
  });
}
