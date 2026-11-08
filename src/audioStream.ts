import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export interface PushStreamAudioConfigResult {
  pushStream: sdk.PushAudioInputStream;
  audioConfig: sdk.AudioConfig;
}

/**
 * creates an Azure PushAudioInputStream and corresponding AudioConfig
 * for streaming external PCM audio buffers into speech recognition.
 */
export function createPushStreamAudioConfig(
  sampleRate = 16000,
  channels = 1,
  bitsPerSample = 16
): PushStreamAudioConfigResult {
  const format = sdk.AudioStreamFormat.getWaveFormatPCM(
    sampleRate,
    bitsPerSample,
    channels
  );
  const pushStream = sdk.AudioInputStream.createPushStream(format);
  const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
  return { pushStream, audioConfig };
}
