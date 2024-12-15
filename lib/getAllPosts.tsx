export default async function getAllPosts() {
  const posts: Post[] = [
    {
      id: 1,
      category: "Platform",
      title: "Global Trading Academy Platform Launch Timeline",
      content: "We're excited to announce our platform launch timeline. The beta version will be available to early access members in Q2 2024, featuring our core trading courses and AI analysis tools.",
      author: "Sarah Chen",
      authorImage: "/images/author-01.jpg",
      date: "Mar 18"
    },
    {
      id: 2,
      category: "Education",
      title: "New Advanced Options Trading Course",
      content: "Our comprehensive options trading course is now complete, covering advanced strategies, risk management, and market analysis techniques. Available at launch.",
      author: "Michael Rodriguez",
      authorImage: "/images/author-02.jpg",
      date: "Mar 15"
    },
    {
      id: 3,
      category: "Markets",
      title: "Weekly Market Analysis: Global Trends",
      content: "Our expert analysts break down the latest market trends, focusing on emerging opportunities in forex and cryptocurrency markets for the coming quarter.",
      author: "David Kumar",
      authorImage: "/images/author-03.jpg",
      date: "Mar 12"
    },
    {
      id: 4,
      category: "Community",
      title: "Trading Mentorship Program Details",
      content: "Learn about our unique mentorship program connecting you with experienced traders. Get personalized guidance and feedback on your trading strategies.",
      author: "Emma Thompson",
      authorImage: "/images/author-01.jpg",
      date: "Mar 10"
    },
    {
      id: 5,
      category: "Tools",
      title: "AI Trading Assistant Beta Release",
      content: "Preview our AI-powered trading assistant, featuring market sentiment analysis, risk assessment, and personalized trade recommendations.",
      author: "Alex Morgan",
      authorImage: "/images/author-02.jpg",
      date: "Mar 8"
    },
    {
      id: 6,
      category: "Platform",
      title: "Mobile App Development Update",
      content: "Track your progress and access course content on the go. Our mobile app development is in final stages, bringing the full academy experience to your pocket.",
      author: "James Wilson",
      authorImage: "/images/author-03.jpg",
      date: "Mar 5"
    },
    {
      id: 7,
      category: "Education",
      title: "Cryptocurrency Trading Fundamentals",
      content: "New course alert: Master the basics of cryptocurrency trading, including blockchain technology, market analysis, and security best practices.",
      author: "Lisa Chen",
      authorImage: "/images/author-01.jpg",
      date: "Mar 3"
    },
    {
      id: 8,
      category: "Markets",
      title: "Emerging Markets Analysis Workshop",
      content: "Join our upcoming workshop on emerging markets trading opportunities, featuring real-time analysis and practical trading strategies.",
      author: "Robert Zhang",
      authorImage: "/images/author-02.jpg",
      date: "Mar 1"
    }
  ];

  return posts;
}