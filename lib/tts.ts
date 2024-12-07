export async function synthesizeSpeech(text: string): Promise<string> {
  // Using the free TTS API from VoiceRSS
  const API_KEY = 'temporary_demo_key'; // In production, use environment variables
  const API_URL = `https://api.voicerss.org/?key=${API_KEY}&hl=en-us&src=${encodeURIComponent(text)}`;
  
  try {
    const response = await fetch(API_URL);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error synthesizing speech:', error);
    throw new Error('Failed to synthesize speech');
  }
}