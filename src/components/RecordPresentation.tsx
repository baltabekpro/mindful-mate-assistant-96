import React, { useState } from 'react';
import RecordRTC from 'recordrtc';
import { Button } from '@/components/ui/button';
import { Video, StopCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RecordPresentation = () => {
  const [recorder, setRecorder] = useState<RecordRTC | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: 'browser',
        },
      });

      const newRecorder = new RecordRTC(stream, {
        type: 'video',
        mimeType: 'video/webm',
        bitsPerSecond: 128000,
      });

      newRecorder.startRecording();
      setRecorder(newRecorder);
      setIsRecording(true);

      toast({
        title: "Запись началась",
        description: "Презентация записывается в видео",
      });
    } catch (error) {
      console.error('Error starting recording:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось начать запись",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'presentation.webm';
        a.click();
        
        setRecorder(null);
        setIsRecording(false);

        toast({
          title: "Запись завершена",
          description: "Видео сохранено",
        });
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isRecording ? (
        <Button
          onClick={startRecording}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          <Video className="mr-2 h-4 w-4" />
          Записать презентацию
        </Button>
      ) : (
        <Button
          onClick={stopRecording}
          variant="destructive"
        >
          <StopCircle className="mr-2 h-4 w-4" />
          Остановить запись
        </Button>
      )}
    </div>
  );
};

export default RecordPresentation;