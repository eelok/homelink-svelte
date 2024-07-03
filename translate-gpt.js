import { promises as fs } from 'fs';
import { join, relative, dirname } from 'path';
import OpenAI from 'openai';
import {config} from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceLanguage = 'en';
const targetLanguages = ['de', 'es'];
const sourceDir = join(__dirname, 'src', 'routes', sourceLanguage);
const excludedFiles = ['layout.svelte', '+layout.svelte', '+page.js', '+layout.js'];

async function translateContent(content, targetLanguage) {
    const prompt = `Translate the following English text to ${targetLanguage}. Use informal friendly language. Assume you communicate with a couple. Maintain the original formatting, including HTML tags, don't use code blocks:
  
  ${content}
  
  Translated text:`;
  
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{"role": "user", "content": prompt}],
      max_tokens: 2000,  // Adjust based on your content length
      temperature: 0.3,  // Lower temperature for more consistent translations
    });
  
    return completion.choices[0].message.content.trim();
  }

async function processFile(filePath, targetLanguage) {
  const content = await fs.readFile(filePath, 'utf-8');
  const translatedContent = await translateContent(content, targetLanguage);
  
  const relativePath = relative(sourceDir, filePath);
  const targetPath = join(__dirname, 'src', 'routes', targetLanguage, relativePath);
  
  await fs.mkdir(dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, translatedContent);
}

async function translateFiles(dir, targetLanguage) {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = join(dir, file.name);
    
    if (file.isDirectory()) {
      await translateFiles(filePath, targetLanguage);
    } else if (file.isFile() && !excludedFiles.includes(file.name)) {
      await processFile(filePath, targetLanguage);
    }
  }
}

async function main() {
  for (const language of targetLanguages) {
    console.log(`Translating to ${language}...`);
    await translateFiles(sourceDir, language);
  }
  console.log('Translation complete!');
}

main().catch(console.error);