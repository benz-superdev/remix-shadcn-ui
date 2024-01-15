import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export type MailDetail = {
  author: string;
  timestamp: string;
  timePeriod: string;
  title: string;
  content: string;
  tags: string[];
  email: string;
  isRead: boolean;
};

const mailDetailList: MailDetail[] = [
  {
    author: "William Smith",
    title: "Meeting Tomorrow",
    email: "williamsmith@example.com",
    timestamp: "Oct 22, 2023, 9:00:00 AM",
    timePeriod: "3 months ago",
    content:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.Please come prepared with any questions or insights you may have. Looking forward to our meeting!Best regards, William",
    tags: ["meeting", "work", "important"],
    isRead: true,
  },
  {
    author: "Alice Smith",
    title: "Re: Project Update",
    email: "alicesmith@example.com",
    timestamp: "Oct 22, 2023, 10:30:00 AM",
    timePeriod: "3 months ago",
    content:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in. I have a few minor suggestions that I'll include in the attached document. Let's discuss these during our next meeting. Keep up the excellent work! Best regards, Alice",
    tags: ["work", "important"],
    isRead: true,
  },
  {
    author: "Bob Johnson",
    title: "Weekend Plans",
    email: "bobjohnson@example.com",
    timestamp: "Apr 10, 2023, 11:45:00 AM",
    timePeriod: "9 months ago",
    content: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

      If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.
      
      Looking forward to your response!
      
      Best, Bob`,
    tags: ["personal"],
    isRead: true,
  },
  {
    author: "Emily Davis",
    title: "Question about Budget",
    email: "emilydavis@example.com",
    timestamp: "Mar 25, 2023, 1:15:00 PM",
    timePeriod: "10 months ago",
    content: `I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.

    I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.
    
    I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.
    
    Thanks, Emily`,
    tags: ["work", "budget"],
    isRead: false,
  },
  {
    author: "Michael Wilson",
    title: "Important Announcement",
    email: "michaelwilson@example.com",
    timestamp: "Mar 10, 2023, 3:00:00 PM",
    timePeriod: "10 months ago",
    content: `I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.

    This change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.
    
    Regards, Michael`,
    tags: ["meeting", "work", "important"],
    isRead: false,
  },
  {
    author: "Sarah Brown",
    title: "Feedback on Proposal",
    email: "sarahbrown@example.com",
    timestamp: "Feb 15, 2023, 4:30:00 PM",
    timePeriod: "11 months ago",
    content: `Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.

    I've attached the revised proposal for your review.
    
    Please let me know if you have any further comments or suggestions. Looking forward to your response.
    
    Best regards, Sarah`,
    tags: ["work"],
    isRead: true,
  },
  {
    author: "David Lee",
    title: "New Project Idea",
    email: "davidlee@example.com",
    timestamp: "Jan 28, 2023, 5:45:00 PM",
    timePeriod: "12 months ago",
    content: `I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.

    I've prepared a detailed proposal outlining the potential benefits and the strategy for execution.
    
    This project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.
    
    Best regards, David`,
    tags: ["work"],
    isRead: false,
  },
];

export type MailListProps = {
  onMailChange: Function;
};

const MailList = (props: MailListProps) => {
  const { onMailChange } = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderCard = (mail: MailDetail, index: number) => (
    <button
      key={mail.author}
      className={`flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ${
        index === activeIndex && "bg-accent"
      }`}
      onClick={() => {
        setActiveIndex(index);
        onMailChange(mail);
      }}
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{mail.author}</div>
            {!mail.isRead && (
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            )}
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {mail.timePeriod}
          </div>
        </div>
        <div className="text-xs font-medium">{mail.title}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {mail.content}
      </div>
      <div className="flex items-center gap-2">
        {mail.tags.map((tag) => (
          <div
            key={tag}
            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
            ${
              tag === "work" && "bg-primary text-primary-foreground"
            } shadow hover:bg-primary/80`}
          >
            {tag}
          </div>
        ))}
      </div>
    </button>
  );

  return (
    <div>
      <Tabs defaultValue="all">
        <div className="flex items-center px-4 py-2 justify-between">
          <h1 className="text-xl font-bold">Inbox</h1>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="all">All mail</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>
        </div>

        <div className="shrink-0 bg-border h-[1px] w-full" />

        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <svg
                className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                placeholder="Search"
              />
            </div>
          </form>
        </div>

        <TabsContent value="all">
          <div className="rounded-[inherit]">
            <div className="flex flex-col gap-4 p-4">
              {mailDetailList.map((mail: MailDetail, index: number) => {
                return renderCard(mail, index);
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="unread">
          <div className="rounded-[inherit]">
            <div className="flex flex-col gap-4 p-4">
              {mailDetailList
                .filter((v) => !v.isRead)
                .map((mail: MailDetail, index: number) => {
                  return renderCard(mail, index);
                })}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MailList;
