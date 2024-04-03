import React from "react";

export default function Pricing() {
  return (
    <>
      <div class="relative font-inter antialiased">
        <main class="relative min-h-screen flex flex-col justify-cente overflow-hidden">
          <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div x-data="{ isAnnual: true }">
              <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
                <div class="dark h-full">
                  <div class="relative flex flex-col h-full p-10 rounded-xl bg-white dark:bg-[#242A3B] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="absolute top-0 right-0 mr-6 -mt-4">
                      <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                        Most Popular
                      </div>
                    </div>
                    <div class="mb-5">
                      <div class="text-2xl text-slate-900 dark:text-slate-200 font-semibold mb-1">
                        Essential
                      </div>
                      <div class="text-sm text-slate-900 dark:text-slate-200 mb-1">
                        Starts at $14. Includes 2 users
                      </div>
                      <div class="inline-flex items-baseline mb-2 mt-10">
                        <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                          $39
                        </span>
                        <span
                          class="text-slate-900 dark:text-slate-200 font-bold text-4xl"
                          x-text="isAnnual ? '49' : '55'"
                        ></span>
                        <span class="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div class="text-sm text-slate-500 mb-5">
                        There are many variations available, but the majority
                        have suffered.
                      </div>
                    </div>
                    <div class="text-[#16DBAA] dark:text-[#16DBAA] font-medium mb-3">
                      All Basic Services Included:
                    </div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited placeholder texts</span>
                      </li>
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Consectetur adipiscing elit</span>
                      </li>
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-[#797979]">
                          Excepteur sint occaecat cupidatat
                        </span>
                      </li>
                      <li class="flex flex-col border-b border-[#797979] pb-3">
                        <div className="flex flex-row items-center">
                          <svg
                            class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                          <span className="text-[#797979]">
                            Officia deserunt mollit anim
                          </span>
                        </div>
                      </li>
                    </ul>
                    <a
                      class="mt-8 w-[70%] inline-flex justify-center whitespace-nowrap rounded-xl border-[4px] border-emerald-500 p-2 text-bold"
                      href="#0"
                    >
                      Purchase Plan
                    </a>
                  </div>
                </div>
                <div class="dark h-full">
                  <div class="relative flex flex-col h-full p-10 rounded-xl bg-white dark:bg-[#242A3B] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="absolute top-0 right-0 mr-6 -mt-4">
                      <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                        Most Popular
                      </div>
                    </div>
                    <div class="mb-5">
                      <div class="text-2xl text-slate-900 dark:text-slate-200 font-semibold mb-1">
                        Essential
                      </div>
                      <div class="text-sm text-slate-900 dark:text-slate-200 mb-1">
                        Starts at $14. Includes 2 users
                      </div>
                      <div class="inline-flex items-baseline mb-2 mt-10">
                        <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                          $39
                        </span>
                        <span
                          class="text-slate-900 dark:text-slate-200 font-bold text-4xl"
                          x-text="isAnnual ? '49' : '55'"
                        ></span>
                        <span class="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div class="text-sm text-slate-500 mb-5">
                        There are many variations available, but the majority
                        have suffered.
                      </div>
                    </div>
                    <div class="text-[#16DBAA] dark:text-[#16DBAA] font-medium mb-3">
                      All Basic Services Included:
                    </div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited placeholder texts</span>
                      </li>
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Consectetur adipiscing elit</span>
                      </li>
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-[#797979]">
                          Excepteur sint occaecat cupidatat
                        </span>
                      </li>
                      <li class="flex flex-col border-b border-[#797979] pb-3">
                        <div className="flex flex-row items-center">
                          <svg
                            class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                          <span className="text-[#797979]">
                            Officia deserunt mollit anim
                          </span>
                        </div>
                      </li>
                    </ul>
                    <a
                      class="mt-8 w-[70%] inline-flex justify-center whitespace-nowrap rounded-xl border-[4px] border-emerald-500 p-2 text-bold"
                      href="#0"
                    >
                      Purchase Plan
                    </a>
                  </div>
                </div>
                <div class="dark h-full">
                  <div class="relative flex flex-col h-full p-10 rounded-xl bg-white dark:bg-[#242A3B] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="absolute top-0 right-0 mr-6 -mt-4">
                      <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                        Most Popular
                      </div>
                    </div>
                    <div class="mb-5">
                      <div class="text-2xl text-slate-900 dark:text-slate-200 font-semibold mb-1">
                        Essential
                      </div>
                      <div class="text-sm text-slate-900 dark:text-slate-200 mb-1">
                        Starts at $14. Includes 2 users
                      </div>
                      <div class="inline-flex items-baseline mb-2 mt-10">
                        <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                          $39
                        </span>
                        <span
                          class="text-slate-900 dark:text-slate-200 font-bold text-4xl"
                          x-text="isAnnual ? '49' : '55'"
                        ></span>
                        <span class="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div class="text-sm text-slate-500 mb-5">
                        There are many variations available, but the majority
                        have suffered.
                      </div>
                    </div>
                    <div class="text-[#16DBAA] dark:text-[#16DBAA] font-medium mb-3">
                      All Basic Services Included:
                    </div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited placeholder texts</span>
                      </li>
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Consectetur adipiscing elit</span>
                      </li>
                      <li class="flex items-center border-b border-[#797979] pb-3">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-[#797979]">
                          Excepteur sint occaecat cupidatat
                        </span>
                      </li>
                      <li class="flex flex-col border-b border-[#797979] pb-3">
                        <div className="flex flex-row items-center">
                          <svg
                            class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                          <span className="text-[#797979]">
                            Officia deserunt mollit anim
                          </span>
                        </div>
                      </li>
                    </ul>
                    <a
                      class="mt-8 w-[70%] inline-flex justify-center whitespace-nowrap rounded-xl border-[4px] border-emerald-500 p-2 text-bold"
                      href="#0"
                    >
                      Purchase Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
