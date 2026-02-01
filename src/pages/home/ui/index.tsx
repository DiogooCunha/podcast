import { Button } from "@/shared/ui/components/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/components/card";
import { Input } from "@/shared/ui/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/components/select";
import { Separator } from "@/shared/ui/components/separator";
import { Textarea } from "@/shared/ui/components/textarea";
import { useState } from "react";

export default function PodcastGenerator() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [tone, setTone] = useState("neutro");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleGenerate = () => {
    console.log({ text, file, tone });
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-6 bg-gray-50'>
      <Card className='w-full max-w-2xl'>
        <CardHeader className='space-y-2 text-center pb-8'>
          <CardTitle className='text-3xl font-bold'>
            Transforme texto em podcast 🎧
          </CardTitle>
          <CardDescription className='text-base'>
            Cole um texto ou envie um PDF e receba um áudio para ouvir quando
            quiser.
          </CardDescription>
        </CardHeader>

        <div className='px-6 pb-6 space-y-6'>
          <div className='space-y-2'>
            <Textarea
              placeholder='Cole seu texto aqui...'
              value={text}
              onChange={(e) => setText(e.target.value)}
              className='min-h-50 resize-none'
            />
          </div>

          <div className='flex items-center gap-4'>
            <Separator className='flex-1' />
            <span className='text-sm text-gray-500'>ou</span>
            <Separator className='flex-1' />
          </div>

          <div className='space-y-2'>
            <label htmlFor='pdf-upload' className='text-sm font-medium'>
              Enviar PDF
            </label>
            <Input
              id='pdf-upload'
              type='file'
              accept='.pdf'
              onChange={handleFileChange}
              className='cursor-pointer'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='tone-select' className='text-sm font-medium'>
              Tom do áudio
            </label>
            <Select value={tone} onValueChange={setTone}>
              <SelectTrigger id='tone-select'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='neutro'>Neutro</SelectItem>
                <SelectItem value='descontraido'>Descontraído</SelectItem>
                <SelectItem value='educativo'>Educativo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-3 pt-2'>
            <Button onClick={handleGenerate} className='w-full' size='lg'>
              Gerar podcast
            </Button>
            <p className='text-sm text-center text-gray-500'>
              Tempo médio de geração: até 1 minuto
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
