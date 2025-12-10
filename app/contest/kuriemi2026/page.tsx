'use client';

import { useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Trophy,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Heart,
  Upload,
  Clock,
  Film,
  Video,
  Tag,
} from 'lucide-react';
import ContestGuidesViewer from '@/components/ContestGuidesViewer';
import { StaticContestQueryService } from '@/modules/contest/infra/StaticContestQueryService';

export default function KuriemiContestPage() {
  const { isLoggedIn } = useAuth();
  const contestQuery = useMemo(() => new StaticContestQueryService(), []);

  const prizes = [
    {
      rank: '最優秀賞',
      prize: '10,000クレジット（仮）',
      description: '15分前後の本格ショートムービー制作サポート → どこかで上映（会場/配信は後日告知）',
      icon: '👑',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      rank: '優秀賞',
      prize: '複数',
      description: 'くりえみ賞／脚本賞／インパクト賞 など',
      icon: '🥈',
      color: 'from-gray-400 to-gray-600',
    },
    {
      rank: '観客賞',
      prize: 'TBD',
      description: 'コンテストプラットフォーム内の「投票数＋審査で総合決定（賞金の有無は後日告知）',
      icon: '🎬',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  const categories = [
    'くりえみ賞',
    '脚本賞',
    'インパクト賞',
  ];

  const tags = [
    '#くりえみAIショート',
    '#KuriemiContest',
    '#ぴにょぐらむ',
  ];

  const departments = [
    {
      name: '🎥 10秒チャレンジ部門（カジュアル）',
      description: 'アイデア勝負・拡散狙い',
      format: '10秒固定／縦9:16（1080×1920推奨）',
      icon: '🎥',
    },
    {
      name: '🎞️ ショートフィルム部門（本格派）',
      description: '物語/世界観/完成度勝負',
      format: '30〜90秒',
      icon: '🎞️',
    },
  ];

  const rules = [
    'オリジナル作品であり、著作権侵害に当たらないもの、未発表の新作であること。',
    '映像：H.264 / .mp4、可変ビットレート8–12 Mbps（1080p目安）。',
    'フレームレート：30fps推奨。',
    '音：権利クリアのBGM/SEのみ、音量目安 14 LUFS。',
    '生成AI：モデル自由（使用モデル名をフォームに記載）。',
    '※上記尺・比率は推奨規格。最終審査は画質・完成度・テーマ適合を総合判断します。',
  ];

  const timeline = [
    { date: '2026年1月5日（月）', event: 'コンテスト開始・作品応募受付開始', status: 'upcoming' },
    { date: '2026年1月25日（日）', event: '応募締切', status: 'upcoming' },
    { date: '2026年1月26日 - 2月5日', event: '審査期間', status: 'upcoming' },
    { date: '2026年2月10日', event: '結果発表', status: 'upcoming' },
  ];

  // 応募中の作品（モック）
  const currentSubmissions = [
    { id: 1, imageUrl: '/images/samples/sample1.jpg', title: 'AIショート作品1' },
    { id: 2, imageUrl: '/images/samples/sample2.jpg', title: 'AIショート作品2' },
    { id: 3, imageUrl: '/images/samples/sample3.jpg', title: 'AIショート作品3' },
    { id: 4, imageUrl: '/images/samples/sample5.jpg', title: 'AIショート作品4' },
    { id: 5, imageUrl: '/images/samples/sample7.jpg', title: 'AIショート作品5' },
    { id: 6, imageUrl: '/images/samples/sample8.jpg', title: 'AIショート作品6' },
  ];

  // コンテスト情報を取得
  const contestInfo = contestQuery.getBySlug('kuriemi2026');

  // このコンテストに関連する攻略記事（モック）
  const relatedGuides = [
    {
      id: 1,
      title: 'AIショートフィルム制作のプロンプトテクニック',
      author: 'AIマスター',
      authorAvatar: '/images/avatars/user1.jpg',
      thumbnail: '/images/samples/sample1.jpg',
      excerpt: '10秒から90秒のショートフィルムを制作するためのプロンプトのコツを解説します。',
      category: 'プロンプト技術',
      likes: 342,
      comments: 45,
      views: 2345,
      createdAt: '2025-12-20T10:00:00Z',
    },
    {
      id: 2,
      title: '縦9:16フォーマットで魅力的な動画を作る方法',
      author: 'クリエイター123',
      authorAvatar: '/images/avatars/user2.jpg',
      thumbnail: '/images/samples/sample2.jpg',
      excerpt: 'スマートフォン向けの縦型動画を制作する際のポイントを紹介します。',
      category: 'フォーマット別攻略',
      likes: 278,
      comments: 32,
      views: 1876,
      createdAt: '2025-12-19T14:30:00Z',
    },
    {
      id: 3,
      title: 'ショートフィルムの脚本構成のコツ',
      author: '脚本マスター',
      authorAvatar: '/images/avatars/user3.jpg',
      thumbnail: '/images/samples/sample3.jpg',
      excerpt: '30〜90秒のショートフィルムで物語を完結させる脚本テクニック。',
      category: '脚本技術',
      likes: 234,
      comments: 28,
      views: 1654,
      createdAt: '2025-12-18T11:20:00Z',
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* ヒーローセクション - バナー画像のみ */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] overflow-hidden">
        {/* バナー画像 - フル表示 */}
        <div className="absolute inset-0">
          <Image
            src="/images/contests/kuriemi2026.jpg"
            alt="KURIEMI AI Short Film Contest"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* コンテスト情報セクション */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* タイトルとキャッチコピー */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base lg:text-lg font-bold mb-4 sm:mb-6 animate-pulse">
              🎬 KURIEMI AI Short Film Contest 🎬
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              KURIEMI AI Short Film Contest
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
              AIがひらく、実在のヒロインとの新しい創作。
            </p>

            {/* 指定タグ */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600/50 text-purple-100 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold border border-purple-400/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/contest/kuriemi2026/vote"
                    className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                    作品に投票する
                  </Link>
                  <Link
                    href="/contest/kuriemi2026/submit"
                    className="bg-pink-600 hover:bg-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition flex items-center justify-center gap-2"
                  >
                    <Upload className="w-5 h-5 sm:w-6 sm:h-6" />
                    作品を応募する
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-pink-600 hover:bg-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition flex items-center justify-center gap-2"
                >
                  ログインして参加する
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              )}
            </div>

            {/* 統計情報 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-8 max-w-4xl mx-auto px-2">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700 text-center">
                <Trophy className="text-yellow-400 mb-2 mx-auto w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                <div className="text-2xl sm:text-3xl font-bold mb-1">10,000</div>
                <div className="text-sm sm:text-base text-gray-300">クレジット（仮）</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700 text-center">
                <Users className="text-purple-400 mb-2 mx-auto w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                <div className="text-2xl sm:text-3xl font-bold mb-1">0</div>
                <div className="text-sm sm:text-base text-gray-300">応募作品数</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700 text-center">
                <Heart className="text-pink-400 mb-2 mx-auto w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                <div className="text-2xl sm:text-3xl font-bold mb-1">0</div>
                <div className="text-sm sm:text-base text-gray-300">総投票数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 開催期間 */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 sm:p-8 border border-purple-700/50">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Calendar className="text-purple-400" size={28} />
            開催期間
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-200">
            【2026/01/05(月) 00:00 〜 2026/01/25(日) 23:59 JST】（４週間）
          </p>
        </div>
      </section>

      {/* 募集部門 */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-gradient-to-b from-transparent to-purple-900/20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-12 flex items-center justify-center gap-3">
          <Film className="text-purple-400 sm:w-7 sm:h-7" size={24} />
          募集部門
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 sm:p-8 border border-purple-700/50 hover:border-purple-500 transition"
            >
              <div className="text-4xl sm:text-5xl mb-4">{dept.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{dept.name}</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">{dept.description}</p>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Video className="text-purple-400" size={20} />
                  <span className="font-semibold text-sm sm:text-base">想定フォーマット</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{dept.format}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* タイムライン */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-12 flex items-center justify-center gap-3">
          <Clock className="text-purple-400 sm:w-7 sm:h-7" size={24} />
          スケジュール
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6 mb-8 relative">
              {/* タイムラインの線 */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-700" />
              )}
              
              {/* アイコン */}
              <div className="flex-shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                    item.status === 'completed'
                      ? 'bg-green-600'
                      : item.status === 'active'
                      ? 'bg-purple-600 animate-pulse'
                      : 'bg-gray-700'
                  }`}
                >
                  {item.status === 'completed' && <CheckCircle size={16} />}
                  {item.status === 'active' && <Clock size={16} />}
                </div>
              </div>
              
              {/* コンテンツ */}
              <div className="flex-1 bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700">
                <div className="font-bold text-base sm:text-lg mb-2">{item.date}</div>
                <div className="text-sm sm:text-base text-gray-300">{item.event}</div>
                {item.status === 'active' && (
                  <div className="mt-2 inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    開催中
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 賞・特典の情報 */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-gradient-to-b from-transparent to-purple-900/20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-12 flex items-center justify-center gap-3">
          <Trophy className="text-yellow-400 sm:w-7 sm:h-7" size={24} />
          賞・特典（各部門ごとに表彰）
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${prize.color} rounded-xl p-6 sm:p-8 text-center transform hover:scale-105 transition`}
            >
              <div className="text-5xl sm:text-6xl mb-4">{prize.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{prize.rank}</h3>
              <div className="text-2xl sm:text-3xl font-bold mb-3">{prize.prize}</div>
              <p className="text-sm sm:text-base text-gray-100/90">{prize.description}</p>
            </div>
          ))}
        </div>

        {/* カテゴリー賞 */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">優秀賞カテゴリー</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 border border-purple-700/50 flex items-center gap-3"
              >
                <Sparkles className="text-purple-400 flex-shrink-0" size={24} />
                <span className="font-semibold text-sm sm:text-base">{category}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm sm:text-base mt-6">
            ※賞の内容・数は最終告知で確定します（景品表示法に準拠）。
          </p>
        </div>
      </section>

      {/* 作品投稿規定 */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-12">作品投稿規定</h2>
        
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-700">
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <li key={index} className="flex gap-4">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-sm sm:text-base">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 関連する攻略記事 */}
      {contestInfo && (
        <ContestGuidesViewer
          guides={relatedGuides}
          contestSlug={contestInfo.slug}
          contestDisplayName={contestInfo.displayName}
        />
      )}

      {/* 応募中の作品グリッド */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-gradient-to-b from-transparent to-gray-900/50">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-12">応募中の作品</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {currentSubmissions.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition cursor-pointer relative group"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-sm font-semibold truncate w-full">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA セクション */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-purple-800/50">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            準備はできましたか？
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
            AIがひらく、実在のヒロインとの新しい創作を始めましょう！
          </p>
          
          {isLoggedIn ? (
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link
                href="/contest/kuriemi2026/submit"
                className="bg-pink-600 hover:bg-pink-700 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition inline-flex items-center justify-center gap-2"
              >
                <Upload className="sm:w-6 sm:h-6" size={20} />
                作品を応募する
              </Link>
              <Link
                href="/contest/kuriemi2026/vote"
                className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition inline-flex items-center justify-center gap-2"
              >
                <Heart className="sm:w-6 sm:h-6" size={20} />
                作品に投票する
              </Link>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-pink-600 hover:bg-pink-700 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition inline-flex items-center justify-center gap-2"
            >
              ログインして参加する
              <ArrowRight className="sm:w-6 sm:h-6" size={20} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

