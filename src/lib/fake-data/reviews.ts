export interface Review {
  title: string
  body: string
  author: string
  rating: number
}

export interface ReviewData {
  title: string
  body: string
  author: string
  rating: number
}

export interface ReviewColumnProps {
  reviews: ReviewData[]
  reviewClassName?: (index: number) => string
  msPerPixel?: number
  className?: string
}

export const reviews: Review[] = [
  {
    title: 'Impressive Investment Tool',
    body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour. This app is a game-changer!',
    author: 'Warren Buffett',
    rating: 5,
  },
  {
    title: 'A Must-Have for Beginners',
    body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now. Thanks, Pocket!',
    author: 'Charlie Munger',
    rating: 5,
  },
  {
    title: 'Financial Miracle!',
    body: "Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal. It's like a financial superpower!",
    author: 'George Soros',
    rating: 5,
  },
  {
    title: 'Doubled My Wealth!',
    body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month. Financial advisors, who?',
    author: 'Peter Lynch',
    rating: 5,
  },
  {
    title: 'Insider Trading Success',
    body: 'I started providing insider information myself, and now I get new insider tips every 5 minutes. This app is a goldmine!',
    author: 'Martha Stewart',
    rating: 5,
  },
  {
    title: 'Unbelievable Results!',
    body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money, and it’s really there, right in my bank account. This app is crazy!',
    author: 'Carl Icahn',
    rating: 5,
  },
  {
    title: 'Life-Changing App!',
    body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
    author: 'Benjamin Graham',
    rating: 5,
  },
  {
    title: 'Changed My Life!',
    body: 'Yeah, you read that right. Want your own island too? Get Pocket and change your life!',
    author: 'Richard Branson',
    rating: 5,
  },
  {
    title: 'Debt-Free in No Time!',
    body: 'After 2 weeks of trading on Pocket, I was debt-free. Why did I even go to school at all when Pocket exists? It’s a financial miracle!',
    author: 'Dave Ramsey',
    rating: 5,
  },
  {
    title: 'Young and Wealthy!',
    body: 'I love that with Pocket’s transaction anonymization, I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
    author: 'Warren Buffett Jr.',
    rating: 5,
  },
  {
    title: 'Easy Money for Advisors!',
    body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money! This app is a game-changer for financial advisors.',
    author: 'Tim Cook',
    rating: 4,
  },
  {
    title: 'Financial Superpower!',
    body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next! This app is a game-changer!',
    author: 'Elon Musk',
    rating: 4,
  },
  {
    title: 'Freed from My Job!',
    body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way! This app is a game-changer!',
    author: 'Steve Jobs',
    rating: 4,
  },
  {
    title: 'Life-Changing App!',
    body: 'Unless you want to have the best life ever! I am literally writing this from a yacht. Thanks, Pocket!',
    author: 'Jeff Bezos',
    rating: 4,
  },
]
