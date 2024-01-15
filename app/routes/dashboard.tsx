"use client";
import React, { useState } from "react";

import { Calendar as CalendarIcon, Check, ChevronsUpDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";

type Team = {
  group: string;
  children: Data[];
};

type Data = {
  value: string;
  label: string;
  imageUri: string;
};

const teamList: Team[] = [
  {
    group: "Personal Account",
    children: [
      {
        value: "thossapron",
        label: "Thossapron",
        imageUri: "https://avatar.vercel.sh/acme-inc.png",
      },
    ],
  },
  {
    group: "Teams",
    children: [
      {
        value: "turbox",
        label: "TurboX",
        imageUri: "https://avatar.vercel.sh/acme-inc.png",
      },
    ],
  },
];

const subscribePlanList = [
  {
    value: "free",
    label: "Free",
    desc: "Trial for two weeks",
  },
  {
    value: "pro",
    label: "Pro",
    desc: "$9/month per user",
  },
];

const saleList = [
  {
    fullName: "Olivia Martin",
    email: "olivia.martin@email.com",
    value: "+$1,999.00",
    imageUri: "https://ui.shadcn.com/avatars/01.png",
  },
  {
    fullName: "Jackson Lee",
    email: "jackson.lee@email.com",
    value: "+$39.00",
    imageUri: "https://ui.shadcn.com/avatars/02.png",
  },
  {
    fullName: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    value: "+$299.00",
    imageUri: "https://ui.shadcn.com/avatars/03.png",
  },
  {
    fullName: "William Kim",
    email: "will@email.com",
    value: "+$99.00",
    imageUri: "https://ui.shadcn.com/avatars/04.png",
  },
  {
    fullName: "Sofia Davis",
    email: "sofia.davis@email.com",
    value: "+$39.00",
    imageUri: "https://ui.shadcn.com/avatars/05.png",
  },
];

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("thossapron");
  const [plan, setPlan] = useState<string>();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [valueShow, setValueShow] = useState<Data>({
    value: "thossapron",
    label: "Thossapron",
    imageUri: "https://avatar.vercel.sh/acme-inc.png",
  });
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: new Date(2023, 1, 9),
  });

  const handleSelect = (currentValue: string, valueObject: Data) => {
    setValue(currentValue === value ? "" : currentValue);
    setValueShow(valueObject);
    setOpen(false);
  };

  const getTemplate = () => {
    const planValue = subscribePlanList.find((v) => v.value === plan);
    return (
      <div className="flex">
        <span>
          {planValue?.label}
          {" - "}
          <span className="text-muted-foreground">{planValue?.desc}</span>
        </span>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="header border-b">
        <div className="flex h-16 items-center px-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[200px] justify-between">
                {valueShow && (
                  <div className="flex">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                      <Avatar>
                        <AvatarImage
                          src={valueShow.imageUri}
                          alt="@shadcn"
                          className="aspect-square h-full w-full grayscale"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </span>

                    {valueShow.label}
                  </div>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search team..." />
                <CommandList className="border-b">
                  <CommandEmpty>No team found.</CommandEmpty>

                  {teamList.map((val) => {
                    return (
                      <CommandGroup heading={val.group} key={val.group}>
                        {val?.children?.map((children) => {
                          return (
                            <CommandItem
                              key={children.value}
                              value={children.value}
                              onSelect={(currentValue) =>
                                handleSelect(currentValue, children)
                              }
                            >
                              <div className="flex justify-between flex-1 items-center">
                                <div className="flex">
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                                    <Avatar>
                                      <AvatarImage
                                        src={children.imageUri}
                                        alt="@shadcn"
                                        className="aspect-square h-full w-full grayscale"
                                      />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                  </span>

                                  {children.label}
                                </div>

                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === children.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </div>
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    );
                  })}
                </CommandList>
                <div className="p-1">
                  <CommandItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-5 w-5"
                          >
                            <path
                              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Create Team
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Create team</DialogTitle>
                          <DialogDescription>
                            Add a new team to manage products and customers.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="teamName">Team name</Label>
                          <Input
                            type="email"
                            id="teamName"
                            placeholder="Acme Icn."
                          />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label>Subscription plan</Label>
                          <Popover
                            open={openDropdown}
                            onOpenChange={setOpenDropdown}
                          >
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="justify-between"
                              >
                                {plan ? getTemplate() : "Select a plan"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 w-[375px]">
                              <Command>
                                <CommandGroup>
                                  {subscribePlanList.map((planValue) => (
                                    <CommandItem
                                      key={planValue.value}
                                      value={planValue.value}
                                      onSelect={(currentValue: string) => {
                                        setPlan(
                                          currentValue === value
                                            ? ""
                                            : currentValue
                                        );
                                        setOpenDropdown(false);
                                      }}
                                    >
                                      <div className="flex justify-between">
                                        <div className="flex">
                                          <span>
                                            {planValue.label}
                                            {" - "}
                                            <span className="text-muted-foreground">
                                              {planValue.desc}
                                            </span>
                                          </span>
                                        </div>
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            plan === planValue.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                      </div>
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" variant="ghost">
                              Cancel
                            </Button>
                          </DialogClose>

                          <Button type="submit">Continue</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CommandItem>
                </div>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="bar flex w-full justify-between items-center">
            <div className="menu flex gap-3 mx-6">
              <a
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Overview
              </a>
              <a
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Customers
              </a>
              <a
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Products
              </a>
              <a
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Settings
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Input
                type="search"
                className="w-[300px]"
                placeholder="Search..."
              />
              <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-[32px] w-[32px]">
                <Avatar>
                  <AvatarImage
                    src="https://ui.shadcn.com/avatars/01.png"
                    alt="@shadcn"
                    className="aspect-square h-full w-full grayscale"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="content flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <div className={cn("grid gap-2")}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button>Download</Button>
          </div>
        </div>

        <div>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Overview</TabsTrigger>
              <TabsTrigger value="password" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="password" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="password" disabled>
                Notification
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="flex gap-4 flex-col">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent>
                    <div className="p-6 flex flex-row items-center justify-between pb-2 px-0">
                      <h3 className="tracking-tight text-sm font-medium">
                        Total Revenue
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <div className="p-6 flex flex-row items-center justify-between pb-2 px-0">
                      <h3 className="tracking-tight text-sm font-medium">
                        Subscriptions
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <div className="p-6 flex flex-row items-center justify-between pb-2 px-0">
                      <h3 className="tracking-tight text-sm font-medium">
                        Sales
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <path d="M2 10h20"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <div className="p-6 flex flex-row items-center justify-between pb-2 px-0">
                      <h3 className="tracking-tight text-sm font-medium">
                        Active Now
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="col-span-2">
                  <Card>
                    <CardContent>
                      <div className="p-6 flex flex-row items-center justify-between pb-2 px-0">
                        <h3 className="tracking-tight text-sm font-medium">
                          Overview
                        </h3>
                      </div>
                      <svg
                        width="685"
                        height="350"
                        className="recharts-surface"
                        viewBox="0 0 685 350"
                      >
                        <defs>
                          <clipPath>
                            <path d="M65 5H680V315H65z"></path>
                          </clipPath>
                        </defs>
                        <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="90.625"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="90.625" dy=".71em">
                                  Jan
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="141.875"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="141.875" dy=".71em">
                                  Feb
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="193.125"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="193.125" dy=".71em">
                                  Mar
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="244.375"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="244.375" dy=".71em">
                                  Apr
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="295.625"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="295.625" dy=".71em">
                                  May
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="346.875"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="346.875" dy=".71em">
                                  Jun
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="398.125"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="398.125" dy=".71em">
                                  Jul
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="449.375"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="449.375" dy=".71em">
                                  Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="500.625"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="500.625" dy=".71em">
                                  Sep
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="551.875"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="551.875" dy=".71em">
                                  Oct
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="603.125"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="603.125" dy=".71em">
                                  Nov
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="654.375"
                                y="323"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="middle"
                              >
                                <tspan x="654.375" dy=".71em">
                                  Dec
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="57"
                                y="315"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="end"
                              >
                                <tspan x="57" dy=".355em">
                                  $0
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="57"
                                y="237.5"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="end"
                              >
                                <tspan x="57" dy=".355em">
                                  $1500
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="57"
                                y="160"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="end"
                              >
                                <tspan x="57" dy=".355em">
                                  $3000
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="57"
                                y="82.5"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="end"
                              >
                                <tspan x="57" dy=".355em">
                                  $4500
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                x="57"
                                y="9"
                                fill="#888"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                fontSize="12"
                                textAnchor="end"
                              >
                                <tspan x="57" dy=".355em">
                                  $6000
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-bar fill-primary">
                          <g className="recharts-layer recharts-bar-rectangles">
                            <g className="recharts-layer">
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M70.125 166.997a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M121.375 88.773a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M172.625 184.305a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M223.875 33.645a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M275.125 173.817a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M326.375 189.11a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M377.625 196.653a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M428.875 19.643a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M480.125 230.185a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M531.375 123.7a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M582.625 264.44a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  fill="currentColor"
                                  d="M633.875 217.423a4 4 0 014-4h33a4 4 0 014 4V315h-41z"
                                  className="recharts-rectangle fill-primary"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-1 h-full">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex flex-col">
                        <h3 className="font-semibold leading-none tracking-tight">
                          Recent Sales
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          You made 265 sales this month.
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {saleList.map((sale) => {
                        return (
                          <div
                            className="flex items-center"
                            key={sale.fullName}
                          >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                              <img
                                className="aspect-square h-full w-full"
                                alt="Avatar"
                                src={sale.imageUri}
                              />
                            </span>
                            <div className="ml-4 space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {sale.fullName}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {sale.email}
                              </p>
                            </div>
                            <div className="ml-auto font-medium">
                              {sale.value}
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
