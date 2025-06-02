import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import TimeEntry from '@/models/TimeEntry';

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();

  const newEntry = await TimeEntry.create({
    whatYouDid: body.whatYouDid,
    startTime: body.startTime,
    endTime: body.endTime,
    category: body.category,
    enjoyed: body.enjoyed,
    note: body.note,
    date: body.date || new Date()
  });

  return NextResponse.json(newEntry);
}

export async function GET() {
  await connectToDB();
  const entries = await TimeEntry.find().sort({ date: -1 });
  return NextResponse.json(entries);
}
