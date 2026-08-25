import Link from 'next/link'

import  type {
    Challenge,
    ChallengeDifficulty,
    ChallengeStatus
} from "@/data/challenges";

type ChallengeCardPros = {
    challenge: Challenge;
};

const difficultyColors: Record<ChallengeDifficulty, string> = {
    beginner: "bg-green-400/10 text-green-400",
    easy: "bg-cyan-400/10 text-cyan-400",
    medium: "bg-amber-400/10 text-amber-400",
    hard: "bg-rose-400/10 text-rose-400",
};

const difficultyLabels: Record<ChallengeDifficulty, string> = {
    beginner: "Beginner",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
};

const statusLabels: Record<ChallengeStatus, string> = {
    available: "Available",
    locked: "Locked",
    completed: "Completed",
}

export function ChallengeCard({challenge}: {challenge: Challenge}) {
    return (
        <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-neutral-900 p-5 transition-colors hover:border-white/25 hover:bg-neutral-800">
        <div className="flex items-center justify-between gap-4">
            <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${difficultyColors[challenge.difficulty]}`}
            >
                {difficultyColors[challenge.difficulty]}
            </span>
            <span className="text-xs text-neutral-500">
                {statusLabels[challenge.status]}
            </span>
        </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-wide text-neutral-500">
                {challenge.chartType} chart
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                {challenge.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-neutral-400">
            </p>
            
        </article>
    )
}