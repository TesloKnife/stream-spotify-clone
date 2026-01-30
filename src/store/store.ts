import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: string | null = null;

  // Позволяет автоматически отслеживать изменения состояния
  constructor() {
    makeAutoObservable(this);
  }

  // Вызываем метод для воспроизведения трека
  play(track: string) {
    this.currentTrack = track;
    this.isPlaying = true;
    console.log(`Playing: ${track}`);
  }
}

export const musicPlayerStore = new MusicPlayerStore();
