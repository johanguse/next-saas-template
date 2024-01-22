'use client'

import { useEffect, useState } from 'react'

import { FaqClient } from '@/lib/fake-data/faq-clients'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface faqsClientDataProps {
  faqsClientData: FaqClient[]
}
export default function FaqsClientQuestions({
  faqsClientData,
}: faqsClientDataProps) {
  const [searchInput, setSearchInput] = useState('')

  const [filteredFaqs, setFilteredFaqs] = useState(faqsClientData)

  useEffect(() => {
    if (searchInput) {
      const filtered = faqsClientData.filter((faq) =>
        faq.question.toLowerCase().includes(searchInput.toLowerCase())
      )
      setFilteredFaqs(filtered)
    } else {
      setFilteredFaqs(faqsClientData)
    }
  }, [searchInput, faqsClientData])
  return (
    <section className="py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <h2 className="border-light dark:border-dark m-0 mb-6 border-b pb-6 text-2xl">
            Questions
          </h2>
          <div>
            <input
              placeholder="Search questions asked on this page"
              className="dark:bg-accent-dark border-light dark:border-dark mb-4 w-full rounded-sm border bg-accent px-4 py-3 font-semibold"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <ul className="text-left">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, index) => (
                  <li key={index} className="py-4">
                    <div className="relative mb-3 flex items-center">
                      <span className="border-gray-accent-light absolute left-5 top-1 h-full w-6 translate-y-[55%] rounded-sm border-b border-l border-dashed"></span>
                      <Avatar className="mr-3">
                        <AvatarImage
                          src={item.questionImage}
                          alt={item.questionName}
                        />
                        <AvatarFallback>
                          {item.questionName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <p className="my-3 text-lg">{item.question}</p>
                    </div>
                    <div className="relative ml-12">
                      <div className="relative flex space-x-2">
                        <Avatar>
                          <AvatarImage
                            src={item.answerImage}
                            alt={item.answerName}
                            className="size-8"
                          />
                          <AvatarFallback>
                            {item.answerName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="mb-1 mt-0 text-sm font-bold">
                            {item.answerName}
                          </p>
                          <p className="m-0">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="py-4">No results found...</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
