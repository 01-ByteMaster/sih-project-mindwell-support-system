// src/components/MainContent.jsx

import React from 'react';
import Post from './Post';

const postData = [
  {
    id: 1,
    author: 'Student_456',
    profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwX3E1Pm2pm4EqZyspqSOZl6MYVGUYzcPIL7fKOoSXhuHQdJvmEIU199gUkfoUReo7Klp4y7vU0vZwC8WEP68Q8tbPChQjkvdF3HxZ7DTi5GwwDFNQudnNJ_zHPcIR5d8FGpi-u6N2WedjLTLW5nTV01vE8t9HeEpZG190tqyqkQhB1I9ldy7iLjJV1g4Q2oLVOEv9q6El7W6NUASjt1ae-AiW_f7uaHO3yMVmUicoGkW-_G3XCcyXJkByhHxtWpuss1Gkv84biA',
    time: '2 hours ago',
    content: "I've been feeling overwhelmed with my coursework lately. It's hard to keep up with everything, and I'm starting to feel burnt out. Any advice on managing stress and staying motivated?",
    likes: 12,
    smiles: 5,
    comments: 8,
    replies: [
      {
        id: 11,
        author: 'Student_789',
        profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY_yFNBHeioqe7SgfduKjeDf8IdMTLZH9qgKdCYI2c6jidt4y5gQYs1V4WgPoTOXiHBvh2Vh9Rg5DAuJnnGyL7x2C34zFcxc_ahMI1sVnCr6uTA6DYDFiXaJgtto7aan2Gcdi6Z62rdfFr_YOTe78T9Wr-tiAVG3UHpaWWGuqtuI82YCFRiT3V6suJDhTw--S5H7vxCJkzI-0TCSZHpGRNQHynIwzgR4lGiA-Ciydtxml79GeHu9Rve9MjSjGTQKuu5IShSnC_Vg',
        time: '1 hour ago',
        text: 'I totally get it! Try breaking down your tasks into smaller, manageable chunks. Also, remember to take breaks and do things you enjoy to recharge.'
      },
      {
        id: 12,
        author: 'Student_101',
        profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8I2Xve4OKuX0MUuJLCqn_uheq6YSHKeo_qFDS-ntxT1WEqBNI8-sifB32UMhUDyvNkMpwlESd91cQqL1m0VN7V2pnhAc_rv6uzF1OgjOtsvyoS2XbhCUxiYPVfh4f-9bxIeJ9_crkch4-Xa61pux8a8hRP7HwtpGU6QromSAIWJulvfXNFv88g0RGQvLFbzZpMJeEsq3WGejZCt2EMezcz0Dlmmv9MLnkfr7qhobXzuqoN8Me2nyHpBg6uga5qZffT1JckV1llg',
        time: '45 minutes ago',
        text: 'Exercise and mindfulness have helped me a lot. Even a short walk or meditation can make a difference. You\'re not alone in this!'
      },
    ],
  },
  {
    id: 2,
    author: 'Student_123',
    profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAASDfWJHoXJNJ9A8trV2ZwKZSHN9eo2e8fv9k5YUpT-gPcOhMNVR8Ru-2qfWs8vUVxR6FjeIEWfpwfi2tpOCx8CJhtqZiA4XQzPEOnR6p7eODUdgeSpnEQFzW0d0ItVwEc0Pc2-WIV63FVQrkQtj2wbaKCJkcgJBvtPYcOGxb6hWLP2rpBE0q4lqUo7q6MRvSgvTRydMRdiXif8pA3vJ-32WGwAQmDbuVnhcseMu15HYjJWf5zX0wyzKdCFg6hhlfZWCKGAxC7Kw',
    time: '1 day ago',
    content: "I'm struggling with anxiety about upcoming exams. It's affecting my sleep and concentration. How do you cope with exam stress?",
    likes: 15,
    smiles: 7,
    comments: 10,
    replies: [
      {
        id: 21,
        author: 'Student_234',
        profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBW-d8xwnWvKPA9hkW3CnfdpfhUejT9g1pBpdVigBvTv9MME2UfIEit1QQOsJt8Y41VHUgZHEY_nVNbSHh09fpIPq8Xz2VptZwE3R1wGggzVwVwuq0w3PazDuLdFkjhUQOllMcI0UTxYojR2Z9djxRe76AU1GmpG6mBSTdGWZ53yN8ifVZKyM3trZkMHkAI6Yg3fYHSGjUDZCxWBmQ_kppDO-v02qCwqEFTxAjMoZDOWy_yGoo5y4-ta2Bsh3aeVQavtji58mTsg',
        time: '12 hours ago',
        text: 'Deep breathing exercises and visualization techniques can help calm your nerves. Also, make sure you\'re getting enough rest and eating well.'
      },
      {
        id: 22,
        author: 'Student_567',
        profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5waFlOMj7D2or-fiijlA7CSFDPU163Wf6suF8FLWREBdHJGSGhkWWgmz1366S02buGbD1VF1joffPZYaOV7xKt-kiNr-MaWr-Rjlzc0F_vuFcwAWJvC7cv7pGYJsPkFcj1cBPE1yJgKYANUk7srZaT6n2TK9c4lvtETzuLoxe1LHlo_0lWhPZEQCS740jE0Dsdc8HVeJs9jTKepv_6zoeabzVqm6DJ-c84eHgMLW7GQfEQdvNinjNzL91wwThvygxgInBGkw1dA',
        time: '8 hours ago',
        text: "Try studying in short bursts with breaks in between. It's more effective than long, continuous sessions. And remember, your worth isn't defined by your exam results!"
      },
    ],
  },
  {
    id: 3,
    author: 'Student_890',
    profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKjrzXUJkHgWwHMxgwGepVHpJ8emxK_xxTYxviof5A6IN1S5kzLH6k73F18Rvfa0fk-H2xIiCA6AugfOzezEVBC7jZLIzzRT9H8n9XPMJRrFgCxtrAF9B0OfmMuVf0MKlN4CEi3BdeVcex-ijlLfFalRp5roiMQUwlnBYRJ5iLS4tq6ekIa4AiMcSqsp-M8EZ_jCzA3tntQxXXluckruaw2Z-yiAV5OeZu0XLc5N3lb2n4EYhOVHOEo3xC4vFmLbtTjYJdkdCHsw',
    time: '3 days ago',
    content: "I'm having trouble making friends on campus. It feels isolating, and I'm starting to doubt myself. Any tips for connecting with others?",
    likes: 10,
    smiles: 4,
    comments: 6,
    replies: [
      {
        id: 31,
        author: 'Student_321',
        profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAycyEJ3wzP4EmQgcfFa_ATxhb_BMUXS5OD8xAfcAkauyLASqJEApeJ4f1z5Wi7mSEoJ-y8XNnOQxgHv9S6VcDChLiI1CWfHam5Zw-N_FTDoCrqwx59cerEKJkrYi-KnzzjE10NtlzCIctg-DE-5wgZyCIIvBCcCu7k-_t4WUWn-v-eK4KXc3_Pj4jO9uRLW2Au_ayadXzjeaz1uB3siwSKBr9sLqemCZZrdDPSfOGZ8Beb4neZ_GXIAn2vxF8Q6NvLZu3ea_P-UA',
        time: '2 days ago',
        text: 'Join clubs or groups that align with your interests. It\'s a great way to meet people who share your passions. Don\'t be afraid to strike up conversations!'
      },
      {
        id: 32,
        author: 'Student_654',
        profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATxCl6biCLUnRFGZS8xTBlMeqnrerfwOzygNulrz9C_qAYXm0haxWnmTh_ZwaYopPIQmxwRo1BIP2OYzCewzNQDgdrklJABCo6z28KpsT7soPMLT5rhNbqsOqbVB6SV0ujLU0qiDiuxihoTyvEMmqHzZJ3H-m0Z63r_xg5Oo8yJB5tpag3Ri3C4MKpqNtykdjBCBijH-IBZCnu6OjligIIdO2ZzFpE-COKqgmjeScCX7cLSgzcEXlpgQ6a1Wg12YGdpFgcq58fgg',
        time: '1 day ago',
        text: 'Attend campus events and activities. Even if you feel shy, putting yourself out there can lead to unexpected connections. Remember, many students are in the same boat!'
      },
    ],
  },
];

const MainContent = () => (
  <main className="flex-grow">
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Anonymous Peer Support Forum</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A safe and confidential space to connect with fellow students. Share your experiences, seek advice, and offer support.
          </p>
        </div>
        <div className="space-y-6">
          {postData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-[#ea2a33] text-white font-bold rounded-full hover:bg-opacity-90 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default MainContent;