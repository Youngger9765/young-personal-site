'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProposalPasswordGateProps {
  slug: string;
  clientName: string;
  theme: {
    primary: string;
    primaryLight: string;
    accent: string;
  };
  children: React.ReactNode;
}

const STORAGE_KEY_PREFIX = 'proposal_access_';

export default function ProposalPasswordGate({
  slug,
  clientName,
  theme,
  children,
}: ProposalPasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // 檢查是否已有有效 token
  useEffect(() => {
    const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}${slug}`);
    if (stored) {
      try {
        const { token, expiry } = JSON.parse(stored);
        if (token && expiry && Date.now() < expiry) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(`${STORAGE_KEY_PREFIX}${slug}`);
        }
      } catch {
        localStorage.removeItem(`${STORAGE_KEY_PREFIX}${slug}`);
      }
    }
    setIsLoading(false);
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsVerifying(true);

    try {
      const res = await fetch('/api/proposals/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password }),
      });

      const data = await res.json();

      if (data.success) {
        const expiry = Date.now() + data.expiresIn;
        localStorage.setItem(
          `${STORAGE_KEY_PREFIX}${slug}`,
          JSON.stringify({ token: data.token, expiry })
        );
        setIsAuthenticated(true);
      } else {
        setError(data.message || '驗證失敗');
      }
    } catch {
      setError('網路錯誤，請稍後再試');
    } finally {
      setIsVerifying(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-400">載入中...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: theme.primary }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke={theme.primary}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: theme.primary }}
            >
              {clientName}
            </h1>
            <p className="text-gray-500 text-sm">
              此提案內容需要密碼才能檢視
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                請輸入密碼
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 transition-shadow"
                style={{
                  // @ts-expect-error CSS custom property
                  '--tw-ring-color': theme.primary
                }}
                autoFocus
                required
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isVerifying || !password}
              className="w-full py-3 px-4 rounded-xl text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
              style={{ backgroundColor: theme.primary }}
            >
              {isVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  驗證中...
                </span>
              ) : (
                '進入提案'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            如需密碼，請聯繫提案人
          </p>
        </div>
      </motion.div>
    </div>
  );
}
