
'use client';

import React, { useContext } from 'react';
import { BooksContext } from '../../context/BooksContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
} from 'recharts';

const colors = [
  '#6366F1',
  '#06B6D4',
  '#10B981',
  '#F59E0B',
  '#F43F5E',
  '#A855F7',
  '#F97316',
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
  C${x + width / 3},${y + height}
  ${x + width / 2},${y + height / 3}
  ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3}
  ${x + (2 * width) / 3},${y + height}
  ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 3 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: 'all 0.3s ease',
        filter: 'drop-shadow(0px 4px 5px rgba(99,102,241,0.15))',
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadPage = () => {
  const { readBook } = useContext(BooksContext);

  const data = readBook.map((book, index) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: book.totalPages,
    amt: index + 1,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/40 to-cyan-50/50 px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              YOUR PERSONAL LIBRARY
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              My Reading{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Every book takes you somewhere new. Explore your library
              and keep your reading journey going.
            </p>
          </div>

          {/* Book Counter */}
          <div className="flex min-w-48 items-center gap-4 rounded-2xl border border-white bg-white/80 p-4 shadow-lg shadow-indigo-100/50 backdrop-blur">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-2xl text-white shadow-md shadow-indigo-200">
              📚
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Books Read
              </p>
              <p className="text-3xl font-extrabold text-slate-900">
                {readBook.length}
              </p>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <section className="overflow-hidden rounded-3xl border border-white bg-white/90 shadow-xl shadow-slate-200/60 backdrop-blur-sm">

          {/* Card Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xl text-indigo-600">
                ▥
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Reading Overview
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Total pages in each book
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600">
              ● LIBRARY STATISTICS
            </span>
          </div>

          {/* Chart / Empty State */}
          <div className="p-4 sm:p-8">
            {readBook.length > 0 ? (
              <div className="w-full">
                <BarChart
                  responsive
                  style={{
                    width: '100%',
                    height: 420,
                    fontSize: 12,
                  }}
                  data={data}
                  margin={{
                    top: 30,
                    right: 15,
                    left: -15,
                    bottom: 45,
                  }}
                >
                  <CartesianGrid
                    stroke="#E9EDF5"
                    strokeDasharray="4 5"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748B', fontSize: 12 }}
                    angle={-20}
                    textAnchor="end"
                    interval={0}
                    height={65}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                    width={55}
                  />

                  <Tooltip
                    cursor={{ fill: '#EEF2FF', opacity: 0.65 }}
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '12px 16px',
                      boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
                    }}
                    labelStyle={{
                      color: '#1E293B',
                      fontWeight: 700,
                      marginBottom: 5,
                    }}
                    formatter={(value) => [
                      `${value} pages`,
                      'Total Pages',
                    ]}
                  />

                  <Bar
                    dataKey="uv"
                    name="Total Pages"
                    shape={TriangleBar}
                    activeBar
                    maxBarSize={58}
                    radius={[12, 12, 0, 0]}
                  >
                    <LabelList
                      content={CustomColorLabel}
                      position="top"
                    />
                  </Bar>
                </BarChart>
              </div>
            ) : (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-cyan-50/70 px-5 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-lg shadow-indigo-100">
                  📖
                </div>

                <h3 className="text-xl font-bold text-slate-800">
                  Your story starts here
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  No books read yet. Add a book to your reading list
                  and your library statistics will appear here.
                </p>

                <span className="mt-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm">
                  Happy Reading ✨
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col justify-between gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:px-8">
            <p className="text-xs text-slate-500">
              Your library, your journey.
            </p>

            <p className="text-xs font-medium text-slate-400">
              Showing {readBook.length} {readBook.length === 1 ? 'book' : 'books'}
            </p>
          </div>
        </section>

        {/* Bottom Message */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Keep turning pages. Great stories await you. 💜
          </p>
        </div>

      </div>
    </main>
  );
};

export default ReadPage;