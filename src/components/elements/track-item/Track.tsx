import type { ITrack } from "@/types/track.types";
import { Ellipsis, Heart } from "lucide-react";

interface Props {
  track: ITrack;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function Track({ track }: Props) {
  return (
    <div className="border-b border-player-bg/50 py-7 flex justify-between items-center">
      <div className="flex items-center gap-3 last:border-0">
        {/* TODO: Circle progress bar */}
        {/* TODO: Play/pause button when hover title or cover */}
        <div className="w-12 h-12 bg-white/5 rounded-full border border-primary"></div>
        <div>
          <div className="text-white text-lg font-medium">{track.name}</div>
          <div className="opacity-65">{formatDuration(track.duration)}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Heart className="text-primary opacity-85 duration-300 hover:opacity-100" />
        </button>
        <button>
          <Ellipsis className="opacity-30 duration-300 hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}
