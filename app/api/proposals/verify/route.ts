import { NextRequest, NextResponse } from 'next/server';

// 密碼配置：環境變數格式 PROPOSAL_PASSWORD_[SLUG]
// 例如：PROPOSAL_PASSWORD_TFT_2025_02=your-secret-password
function getPassword(slug: string): string | undefined {
  const envKey = `PROPOSAL_PASSWORD_${slug.toUpperCase().replace(/-/g, '_')}`;
  return process.env[envKey];
}

export async function POST(request: NextRequest) {
  try {
    const { slug, password } = await request.json();

    if (!slug || !password) {
      return NextResponse.json(
        { success: false, message: '缺少必要參數' },
        { status: 400 }
      );
    }

    const correctPassword = getPassword(slug);

    if (!correctPassword) {
      return NextResponse.json(
        { success: false, message: '提案不存在' },
        { status: 404 }
      );
    }

    if (password === correctPassword) {
      // 產生簡單的 token（生產環境建議用 JWT）
      const token = Buffer.from(`${slug}:${Date.now()}`).toString('base64');

      return NextResponse.json({
        success: true,
        token,
        expiresIn: 24 * 60 * 60 * 1000, // 24 小時
      });
    }

    return NextResponse.json(
      { success: false, message: '密碼錯誤' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: '驗證失敗' },
      { status: 500 }
    );
  }
}
