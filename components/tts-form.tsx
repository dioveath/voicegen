"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { VideoAd } from "@/components/ui/video-ad";
import { synthesizeSpeech } from "@/lib/tts";
import { Mic, Loader2 } from "lucide-react";

export function TTSForm() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [showAd, setShowAd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setShowAd(true);
  };

  const handleAdComplete = async () => {
    setIsLoading(true);
    try {
      const url = await synthesizeSpeech(text);
      setAudioUrl(url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setShowAd(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[200px] text-lg resize-none bg-background/50 backdrop-blur-sm focus:bg-background transition-colors"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <Button
          onClick={handleSubmit}
          disabled={!text.trim() || isLoading}
          className="w-full max-w-xs bg-primary/90 hover:bg-primary transition-colors"
          size="lg"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Mic className="mr-2 h-4 w-4" />
          )}
          {isLoading ? "Converting..." : "Convert to Speech"}
        </Button>
      </motion.div>

      {audioUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-lg bg-card/50 backdrop-blur-sm"
        >
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </motion.div>
      )}

      {showAd && <VideoAd onComplete={handleAdComplete} />}
    </div>
  );
}