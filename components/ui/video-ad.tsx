"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface VideoAdProps {
  onComplete: () => void;
}

export function VideoAd({ onComplete }: VideoAdProps) {
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          setIsOpen(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // 10 seconds total

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Ad Content</span>
          </div>
          <Progress value={progress} className="w-full" />
          <p className="text-center text-sm text-muted-foreground">
            Please wait {Math.ceil((100 - progress) / 10)} seconds
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}