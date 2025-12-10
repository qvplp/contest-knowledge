'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import ResponsiveMediaCard from '@/components/ResponsiveMediaCard';
import { Trophy, Calendar, Users } from 'lucide-react';
import { StaticContestQueryService } from '@/modules/contest/infra/StaticContestQueryService';

const ContestSection: React.FC = () => {
  const contestQuery = useMemo(() => new StaticContestQueryService(), []);
  const activeContests = contestQuery.getActive();
  
  // 開催中または近日開催のコンテストを最大3件表示
  const contests = useMemo(() => {
    const allContests = contestQuery.getAll();
    return allContests
      .filter((c) => c.status === 'active' || c.status === 'upcoming')
      .slice(0, 3)
      .map((contest) => ({
        id: contest.id,
        title: contest.title,
        description: contest.description,
        image: contest.thumbnail,
        deadline: contest.endDate,
        participants: contest.submissions,
        prize: contest.prize,
        link: `/contest/${contest.slug}`,
      }));
  }, [contestQuery]);
  return (
    <section className="mb-8 sm:mb-12 lg:mb-16">
      {/* セクションヘッダー */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          🏆 開催中のコンテスト
        </h2>
        <Link
          href="/contests"
          className="text-sm sm:text-base text-purple-400 hover:text-purple-300 font-medium transition-colors whitespace-nowrap"
        >
          すべて見る →
        </Link>
      </div>

      {/* コンテストグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {contests.map((contest) => (
          <Link key={contest.id} href={contest.link}>
            <div className="group">
              {/* コンテスト画像 */}
              <ResponsiveMediaCard
                type="image"
                src={contest.image}
                alt={contest.title}
                aspectRatio="16/9"
                className="mb-3 sm:mb-4"
              />
              
              {/* コンテスト情報 */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {contest.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                  {contest.description}
                </p>
                
                {/* メタ情報 */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>{contest.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} className="sm:w-4 sm:h-4" />
                    <span>{contest.participants}人</span>
                  </div>
                </div>
                
                {/* 賞金 */}
                <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm font-medium">
                  <Trophy size={14} className="sm:w-4 sm:h-4" />
                  {contest.prize}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContestSection;

