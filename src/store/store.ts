import { TRACKS } from "@/data/tracks.data";
import type { ITrack } from "@/types/track.types";
import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: ITrack | null = TRACKS[0]; // Изначально устанавливаем первый трек из списка
  volume: number = 85;

  // Позволяет автоматически отслеживать изменения состояния
  constructor() {
    makeAutoObservable(this);
  }

  // Вызываем метод для воспроизведения трека
  play(track: ITrack) {
    this.currentTrack = track;
    this.isPlaying = true;
    console.log(`Playing track: ${track.name}`);
  }
}

export const musicPlayerStore = new MusicPlayerStore();
