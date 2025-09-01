import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { TiltEffect } from "./ui/tilt-effect";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const blogs = [
  {
    title: "Differences between interfaces and types in TypeScript",
    markdown: `We know TypeScript is a superset of JavaScript language. The main advantage of this language rests in type safety, where type safety means that variables should contain the type of data which was defined or assigned at first. This safety features can be implemented using interfaces and types in TypeScript. Here are some differences mentioned between them.

a. Types can be used as a primitive type but interface cannot. That means types can be used to declare any kind of variable but interfaces are only limited for object declaration.

\`\`\`typescript
type Roll = number;
interface RollObj{
  roll:number;
}

const myRoll : Roll = 123;
const myObj : RollObj = {
  roll:123
} 
\`\`\`

b. Interfaces can be extended further to add more properties. But types cannot extend its properties, instead they can use intersection for object types.

\`\`\`typescript
type Roll = {roll: number};
type Name = {name: string};
type NameRoll = Roll & Name;
const nameRoll : NameRoll = {name: 'Sakin', roll: 123};

interface NameRollObj extends RollObj{
  name: string;
}
const studentObj : NameRollObj = {
  roll: 123,
  name: 'sakin'
}
\`\`\`

c. Types can be converted to union type where one of the given types can be assigned to the variable. Interfaces can also be converted to union types which is not a common practice.

\`\`\`typescript
type Height = string | number | null;
let height : Height = 'Five feet Five inches';
height = 5.5;

interface IName {
  name: string;
}
interface IRoll {
  roll: number;
}
type NameOrRoll = IName | IRoll;
const nameOrRoll = {
  name: 'Sakin'
}
\`\`\`

Talking about the use cases, interfaces can be used to bigger and scalable projects where classes needs to be extended. And types can be used in smaller projects for easier and faster implementation.`,
    slug: "typescript-interfaces-vs-types",
    category: "TypeScript",
    date: "2024-12-15",
    readTime: "5 min read",
    excerpt:
      "Explore the key differences between interfaces and types in TypeScript, their use cases, and when to use each approach for better type safety.",
  },
  {
    title: "Union and Intersection Types in TypeScript",
    markdown: `Two types as well as interfaces can be converted to union and intersection types in TypeScript.

\`\`\`typescript
type Name = {name: string};
type Roll = {roll: number};
type  Id = number;
interface IName {name: string};
interface IRoll {roll: number};

type UnionType1 = Name | Roll | Id;
type UnionType2 = IName | IRoll;

type IntersectionType1 = Name & Roll;
type IntersectionType2 = IName & IRoll;
\`\`\`

Through the example we can look into two points. First, we can use union type on object type as well as any primitive type like Id(number) which is not applicable for intersections. Intersection type must be used for object types. Second, because of assigning to the union and intersection type both the interfaces are converted to types and be implemented as type.`,
    slug: "typescript-union-intersection-types",
    category: "TypeScript",
    date: "2024-12-10",
    readTime: "3 min read",
    excerpt:
      "Learn how to effectively use union and intersection types in TypeScript to create flexible and powerful type definitions.",
  },
  {
    title: "Database Schema Purpose in PostgreSQL",
    markdown: `Database Schema বলতে আমরা বুঝতে পারি একটা ডাটাবেসের ব্লুপ্রিন্ট বা কাঠামো। আমরা সাধারণত ডাটাবেসের টেবিলগুলোতে বিভিন্ন ধরনের ডাটা স্ট্রাকচারড ওয়েতে স্টোর করি এবং দরকারে তা রিট্রিভ করি। বড় ধরণের এপ্লিকেশনের ক্ষেত্রে এই ডাটাবেসের স্ট্রাকচার অনেক জটিল হওয়ার সম্ভবনা থাকে, তখন ডাটাবেস ম্যানেজ করা অনেকটা কষ্টসাধ্য হয়ে যায়।

![Entity-diagram](https://raw.githubusercontent.com/sakincse21/L2B5-Assignment2/refs/heads/main/image/1748184936467.png)

এই সমস্যা থেকে মুক্ত হতে database schema এর কনসেপ্ট ব্যবহার হয়। একটা ডেটাবেসের টেবিলগুলো তৈরির সময়, সেগুলা কি কি ডাটা স্টোর করবে এবং ডাটাগুলোর ধরণ কি হবে তা এই স্কিমার মাধ্যমে ঠিক করে দেওয়া হয়। আবার বিভিন্ন টেবিলগুলোর মধ্যে সম্পর্ক স্থাপনের জন্য নির্দেশনা দেওয়া হয়, যেমন প্রাইমারি কি ও ফরেইন কি গুলো এবং তাদের মধ্যকার রিলেশন ঠিক করা হয়। তাহলে এই ডাটাবেস ইমপ্লিমেন্ট ও ম্যানেজ করা সহজ থেকে সহজতর হয়।`,
    slug: "postgresql-database-schema",
    category: "PostgreSQL",
    date: "2024-12-05",
    readTime: "4 min read",
    excerpt:
      "Understanding the importance of database schema in PostgreSQL and how it helps organize and manage complex database structures.",
  },
  {
    title: "Primary Key and Foreign Key in PostgreSQL",
    markdown: `আমরা ইন্ডাস্ট্রি লেভেলের প্রজেক্টগুলোতে যখন ডাটাবেস ব্যবহার করি তখন দেখা যায় অনেক সংখ্যক টেবিলের প্রয়োজন হয়। আর এই টেবিলগুলোও নিজেদের মধ্যে ইন্টারকানেক্টেড থাকে। এই ইন্টারকানেক্টিভিটি তৈরি করতে আমাদের সাধারণত দুই ধরণের key প্রয়োজন হয়, যেগুলো হল Primary Key এবং Foreign Key।

Primary Key হল একটি টেবিলের প্রত্যেক সারি এর জন্য ইউনিক আইডেন্টিফায়ার। প্রাইমারি কি সাধারণত একটা কলাম অথবা একাধিক কলামের সেট আকারে ধরা হয়। যখন একটা কলাম এর ডাটা দিয়ে ওই সারিকে নির্দিষ্ট করে আইডেন্টফাই করা যায় না তখন একাধিক কলাম এর দরকার হয়। তবে যদি একাধিক কলামের ব্যবহার হয় তখন তাকে Composite Key ও বলা হয়।

Foreign Key সাধারণত একটি টেবিলের মধে অন্য একটি টেবিলের প্রাইমারি কি কে নির্দেশ করে। ফলে দুইটি টেবিলের মধে সম্পর্ক স্থাপন করা যায় এবং একটা ডাটার সাথে ম্যাচ করে অন্য টেবিল থেকে প্রয়োজনীয় ডাটা রিট্রিভ করা যায়। একটি টেবিলের মধ্যে এক বা একাধিক ফরেইন কি থাকতে পারে আবার নাও থাকতে থাকতে পারে।

![Entity-diagram](https://raw.githubusercontent.com/sakincse21/L2B5-Assignment2/refs/heads/main/image/1748184936467.png)

উপরের এন্টিটি ডায়াগ্রামে, student_id ও department_id হল দুইটা টেবিলের প্রাইমারি কি এবং department_id এইক্ষেত্রে students টেবিলের জন্য ফরেইন কি। উদাহরণ হিসেবে যদি আমরা একজন স্টুডেন্টের ডিপার্ট্মেন্ট সম্পর্কে জানতে চাই তাহলে তার প্রাইমারি কি student_id দিয়ে তাকে ইউনিকলি আইডেন্টিফাই করতে পারব। এবার department_id ব্যবহার করে আমরা departments টেবিল থেকে তার department_name সহজেই বের করে ফেলতে পারব।`,
    slug: "postgresql-primary-foreign-key",
    category: "PostgreSQL",
    date: "2024-12-01",
    readTime: "6 min read",
    excerpt:
      "Learn about Primary Key and Foreign Key concepts in PostgreSQL and how they establish relationships between tables.",
  },
  {
    title: "VARCHAR vs CHAR Data Types in PostgreSQL",
    markdown: `SQL ভিত্তিক ডাটাবেস এ বিভিন্ন ধরণের ডাটা টাইপ ব্যবহার হয়, যার মধ্যে স্ট্রিং জাতীয় ডাটা স্টোর করতে VARCHAR ও CHAR এই দুই ধরণের ডাটা টাইপ ব্যবহৃত হয়। যদিও এরা একই ধরণের ডাটা স্টোর করে, কিন্তু এদের স্টোর করার টেকনিকের মধ্যে অত্যন্ত গুরুত্বপূর্ণ পার্থক্য বিদ্যমান।

CHAR ডাটাটাইপের ক্ষেত্রে শুরুতেই একটি নির্দিষ্ট সাইজ লিমিট দিয়ে দেওয়া হয়। এই কলামে স্টোর করা সকল ডাটার সাইজ লিমিটের মধ্যে হতে হয় নাহলে স্টোর হয়না। তবে যদি ডাটার সাইজ লিমিটের থেকে ছোট হয় সেক্ষত্রে বাকি যেই অব্যবহৃত সাইজটুকু থাকে তা প্যাডিং হয়ে ঐ কলামেই স্টোর হয়। যা প্রয়োজনের অতিরিক্ত স্টোরেজ ব্যবহার করে এবং ভবিষ্যতে সমস্যা তৈরি করতে পারে।

![Char-varchar](https://raw.githubusercontent.com/sakincse21/L2B5-Assignment2/refs/heads/main/image/1748206000683.png)

CHAR এর এই সমস্যা নিরসনে VARCHAR ব্যবহার করা হয়। VARCHAR শব্দটি ভেঙে আমরা Variable CHAR ধরতে পারি তাহলে এর মর্মার্থ বুঝতে পারব। যার অর্থ দাঁড়ায় এই ডাটা টাইপের মধ্যে স্টোরেজের ভেরিয়েশন হয়। স্টোরেজ ভেরিয়েশন বলতে আমরা বুঝতে পারি যে স্টোরকৃত ডাটার সাইজ যদি লিমিট থেকে ছোট হয় সেইক্ষেত্রে ডাটার সমপরিমাণ স্টোরেজ স্পেসই ব্যবহৃত হয়। VARCHAR এ CHAR এর মত সম্পূর্ণ ডাটা লিমিট স্পেস ব্যবহৃত হয়না। এক্ষেত্রে আমাদের স্টোরেজ স্পেস প্রয়োজনের অতিরিক্ত ব্যবহৃত হয়না।`,
    slug: "postgresql-varchar-vs-char",
    category: "PostgreSQL",
    date: "2024-11-28",
    readTime: "4 min read",
    excerpt:
      "Understand the key differences between VARCHAR and CHAR data types in PostgreSQL and their storage mechanisms.",
  },
  {
    title: "WHERE Clause in PostgreSQL SELECT Statement",
    markdown: `SELECT স্টেটমেন্ট ব্যবহৃত কুয়েরিগুলোর মাধ্যমে আমরা একটা ডেটাবেস থেকে আমাদের প্রয়োজনীয় ডাটা রিট্রিভ করে থাকি। যেমন,

\`\`\`pgsql
SELECT * FROM STUDENTS;
\`\`\`

এই স্টেটমেন্টের মাধ্যমে স্টুডেন্ট টেবিলের সব ডাটা রিট্রিভ করা সম্ভব। কিন্তু আমরা যদি সব ডাটা রিট্রিভ না করে একজন নির্দিষ্ট ছাত্রের ডাটা বের করতে চাই সেইক্ষেত্রে এই কুয়েরি স্টেটমেন্ট ব্যবহার করলে সব ছাত্রের ডাটা চলে আসবে এবং পরবর্তীতে সেখান থেকে ঐ ছাত্রের তথ্য আলাদা করতে হবে। যা অত্যন্ত সময় সাপেক্ষ এবং অনেক বেশি প্রসেসিং দরকার হবে। এই সমস্যা থেকে বাঁচতে আমরা WHERE ক্লজ ব্যবহার করতে পারি।

\`\`\`pgsql
SELECT * FROM STUDENTS WHERE student_id = 2107103 OR score > 76;
\`\`\`

WHERE ক্লজের পরের অংশে একটা শর্ত দেওয়া হয়। কেবল এই শর্ত পূরণ হইলে সেই ডাটা পাস করা হবে। এক্ষেত্রে কুয়েরিটি রান হলে সবগুলো সারিতে অপারেশন চলবে এবং যেই সারিতে student_id এর ভ্যালু 2107103 পাবে অথবা যেসব সারির score এর মান 76 থেকে বেশি হবে সেইসকল সারি রিটার্ন করা হবে। \`=, >, <, in, between\` সহ বিভিন্ন রিলেশনাল অপারেটরের মাধ্যমে শর্ত যুক্ত করা এবং \`and, or, not\` সহ আরও অপারেটর ব্যবহার করে এক বা একাধিক শর্ত যুক্ত করা যেতে পারে। এইভাবে কোনো একটি নির্দিষ্ট ডাটা একটা ডাতাবেস থেকে রিট্রিভ করা সম্ভব কোনো অতিরিক্ত ও সময় সাপেক্ষ প্রসেসিং ছাড়াই।`,
    slug: "postgresql-where-clause",
    category: "PostgreSQL",
    date: "2024-11-25",
    readTime: "5 min read",
    excerpt:
      "Learn how to use the WHERE clause in PostgreSQL SELECT statements to filter and retrieve specific data efficiently.",
  },
  {
    title: "Modifying Data with UPDATE Statements in PostgreSQL",
    markdown: `ডাটাবেসগুলোতে কেবল ডাটা স্টোর ও রিট্রিভ করা ছাড়াও বিভিন্ন ধরণের অপারেশন করা যায় তার মধ্যে অন্যতম হল আপডেট বা পরিবর্তন। এই আপডেট ফাংশনালিটি অনেক বেশি গুরুত্বপূর্ণ হয়ে পরে যখন কোনো স্টোরড ডাটা পরিবর্তন করার প্রয়োজন হয়। যেমন, একজন ছাত্রের ক্ষেত্রে প্রতি সেমিস্টারে তার সিজিপিএ পরিবর্তন হয়। তখন তার পুরাতন সিজিপিএ পরিবর্তন করে নতুন সিজিপিএ স্টোর করার জন্য আমরা এই কুয়েরিটি ব্যবহার করতে পারি।

\`\`\`pgsql
UPDATE Students SET cgpa = 3.52, phone='01700001111' WHERE student_id = 2107103;
\`\`\`

এই কুয়েরি স্টেটমেন্টের ক্ষেত্রে দেখা যাচ্ছে, UPDATE কিওয়ার্ডের পরে টেবিলের নাম দিতে হবে যেই টেবিলের ডাটা পরিবর্তন করা হবে। এরপর SET কিওয়ার্ড দিয়ে COLUMN এর নাম এবং সমান চিহ্ন দিয়ে নতুন ভ্যালু দিতে হবে অর্থাৎ এই cgpa কলামের ভ্যালু 3.52 বসবে এবং চাইলে একাধিক কলামের ও তার ভ্যালু কমা দিয়ে আলাদা করে সেট করা যাবে। এরপরে আসবে WHERE ক্লজ যার মাধ্যমে কোন সারি বা ছাত্রের ডাটা পরিবর্তন করা হবে তা সুনির্দিষ্ট করে দিতে হবে। WHERE ক্লজের মাধ্যমে কোনো নির্দিষ্ট ছাত্রকে সিলেক্ট না করলে ঐ টেবিলের সকল ছাত্রের সিজিপিএ ভ্যালু চেঞ্জ করে নতুন ভ্যালু সেট করে দিবে। এভাবেই UPDATE স্টেটমেন্টের মাধ্যমে একটা নির্দিষ্ট সারির নির্দিষ্ট এক বা একাধিক কলামের ডাটা আপডেট করা হয়।`,
    slug: "postgresql-update-statements",
    category: "PostgreSQL",
    date: "2024-11-22",
    readTime: "4 min read",
    excerpt:
      "Master the UPDATE statement in PostgreSQL to modify existing data efficiently and safely with proper WHERE clause usage.",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogs)[0] | null>(
    null
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReadMore = (blog: (typeof blogs)[0]) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    return (
      <section className="py-20 px-6 bg-surface/30 backdrop-blur-sm min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={handleBackToList}
            variant="outline"
            className="mb-8 border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
          >
            ← Back to Blogs
          </Button>

          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-text-light text-sm">
              <span className="bg-hero-accent/10 text-hero-accent px-3 py-1 rounded-full">
                {selectedBlog.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedBlog.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedBlog.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedBlog.title}
            </h1>
          </div>

          {/* Blog Content */}
          <Card className="cosmic-card">
            <div className="p-8">
              <Markdown
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="body-text mb-4 leading-relaxed">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="body-text mb-4 ml-6 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="list-disc">{children}</li>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="w-full max-w-2xl mx-auto my-6 rounded-lg shadow-lg"
                    />
                  ),
                }}
              >
                {selectedBlog.markdown}
              </Markdown>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-surface/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-8 border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
        >
          ← Back to Portfolio
        </Button>
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-heading">Blog Articles</h2>
          <p className="body-text max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and modern tech
            stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <TiltEffect key={blog.slug}>
              <Card className="cosmic-card group h-full">
                <div
                  className={`p-6 h-full flex flex-col fade-in ${
                    isVisible ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Blog Category & Meta */}
                  <div className="flex items-center gap-2 mb-4 text-text-light text-xs flex-wrap">
                    <span className="bg-hero-accent/10 text-hero-accent px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-hero-accent transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Blog Excerpt */}
                  <p className="body-text text-sm mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button
                    onClick={() => handleReadMore(blog)}
                    variant="outline"
                    className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface transition-all duration-300 group"
                    size="sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            </TiltEffect>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center fade-in ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="cosmic-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Want to Know About Me?
            </h3>
            <p className="body-text mb-6">
              I regularly write about web development and modern technologies.
              Follow me for more insights and tutorials.
            </p>
            <a
              href="https://www.linkedin.com/in/saleheen-sakin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-hero-accent text-surface hover:bg-hero-accent/90 transition-all duration-300">
                Follow on Linkedin
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
