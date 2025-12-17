'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ContestSection from '@/components/home/ContestSection';
import GuidesSection from '@/components/home/GuidesSection';
import WorksSection from '@/components/home/WorksSection';

export default function HomePage() {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // クライアントサイドでのみ実行
    if (typeof window === 'undefined') return;
    
    // 認証状態を確認（localStorageから直接確認）
    const checkAuth = () => {
      const stored = localStorage.getItem('animehub_user');
      if (stored) {
        try {
          const userData = JSON.parse(stored);
          if (userData && userData.id) {
            setIsChecking(false);
            return;
          }
        } catch {
          // パースエラーは無視
        }
      }
      
      // ログインしていない場合
      if (!isLoggedIn && !user) {
        router.push('/login');
        return;
      }
      
      setIsChecking(false);
    };

    // 少し遅延させて認証状態の更新を待つ
    const timer = setTimeout(checkAuth, 100);
    return () => clearTimeout(timer);
  }, [isLoggedIn, user, router]);

  // 認証チェック中はローディング表示
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400">読み込み中...</p>
        </div>
      </div>
    );
  }

  // ログインしていない場合はログインページへ
  if (!isLoggedIn && !user) {
    return null; // リダイレクト中なので何も表示しない
  }

  // ヒーロースライドデータ
  const heroSlides = [
    {
      id: 1,
      type: 'image' as const,
      src: '/images/contests/halloween2025.jpg',
      alt: 'AI動画生成の新時代',
      title: 'AI動画生成の新時代',
      description: 'テキストから映画レベルの動画を数分で生成',
      cta: {
        text: '今すぐ始める',
        link: '/contest/halloween2025/submit',
      },
    },
    {
      id: 2,
      type: 'image' as const,
      src: '/images/banners/halloween2025.jpg',
      alt: 'コンテスト開催中',
      title: 'コンテスト開催中',
      description: 'ハロウィンカップ2025に参加して、豪華賞品をゲット',
      cta: {
        text: 'コンテストを見る',
        link: '/contest/halloween2025',
      },
    },
    {
      id: 3,
      type: 'image' as const,
      src: '/images/banners/halloween2025.jpg',
      alt: '攻略ガイドでスキルアップ',
      title: '攻略ガイドでスキルアップ',
      description: 'プロのテクニックを学んで、作品をレベルアップ',
      cta: {
        text: '攻略を見る',
        link: '/guides',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ヒーローセクション */}
      <HeroSection 
        slides={heroSlides}
        autoPlayInterval={10000}
      />
      
      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        {/* コンテストセクション */}
        <ContestSection />
        
        {/* 攻略セクション */}
        <GuidesSection />
        
        {/* 作品セクション */}
        <WorksSection />
      </div>
    </div>
  );
}
