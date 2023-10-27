import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const makeDummy = (size: number, index: number) =>
  Array.from({ length: size }, (_, i) => ({
    id: i + index,
    name: crypto.createHash('md5').update(i.toString()).digest('hex'),
    value: crypto.createHash('sha256').update(i.toString()).digest('hex'),
  }));

const GET = (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const size: number = Number(searchParams.get('size') ?? 0);
  const index: number = Number(searchParams.get('index') ?? 0);
  return NextResponse.json({ data: makeDummy(size, index) });
};

export { GET };
