import React from "react";
import MenuBarMusic from "./menu-bar";
import SidebarMusic from "./sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const BundleMusic = () => {
  return (
    <React.Fragment>
      <MenuBarMusic />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <SidebarMusic />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="music">
                  <div className="justify-between flex items-center">
                    <TabsList>
                      <TabsTrigger value="music">Music</TabsTrigger>
                      <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                      <TabsTrigger value="live" disabled>
                        Live
                      </TabsTrigger>
                    </TabsList>

                    <Button>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                      >
                        <path
                          d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Add music
                    </Button>
                  </div>

                  <TabsContent value="music">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Listen Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-3">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md"></div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <img
                            src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75"
                            alt="Ethan Byte"
                            className="h-[330px] w-[250px] rounded-md object-cover w-[250px]"
                          ></img>
                          <h3 className="font-medium leading-none">
                            React Rendezvous
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Ethan Byte
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md"></div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <img
                            src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75"
                            alt="Nina Netcode"
                            className="h-[330px] w-[250px] rounded-md object-cover"
                          ></img>
                          <h3 className="font-medium leading-none">
                            Async Awakenings
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Nina Netcode
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md"></div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <img
                            src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75"
                            alt="Lena Logic"
                            className="h-[330px] w-[250px] rounded-md object-cover"
                          ></img>
                          <h3 className="font-medium leading-none">
                            The Art of Reusability
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Lena Logic
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md"></div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <img
                            src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75"
                            alt="Beth Binary"
                            className="h-[330px] w-[250px] rounded-md object-cover"
                          ></img>
                          <h3 className="font-medium leading-none">
                            Stateful Symphony
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Beth Binary
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Made for You
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Your personal playlists. Updated daily.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
                      <div className="space-y-3 w-[150px]">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md">
                            <img
                              alt="Thinking Components"
                              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
                              className="w-[150px] h-[150px] object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-md"
                            />
                          </div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">
                            Thinking Components
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Lena Logic
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 w-[150px]">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md">
                            <img
                              alt="Functional Fury"
                              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
                              className="w-[150px] h-[150px] object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-md"
                            />
                          </div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">
                            Functional Fury
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Beth Binary
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 w-[150px]">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md">
                            <img
                              alt="React Rendezvous"
                              className="w-[150px] h-[150px] object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-md"
                              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
                            />
                          </div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">
                            React Rendezvous
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Ethan Byte
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md">
                            <img
                              alt="Stateful Symphony"
                              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
                              className="w-[150px] h-[150px] object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-md"
                            />
                          </div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">
                            Stateful Symphony
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Beth Binary
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 w-[150px]">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md">
                            <img
                              alt="Async Awakenings"
                              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
                              className="w-[150px] h-[150px] object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-md"
                            />
                          </div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">
                            Async Awakenings
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Nina Netcode
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 w-[150px]">
                        <span data-state="closed">
                          <div className="overflow-hidden rounded-md">
                            <img
                              alt="The Art of Reusability"
                              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
                              className="w-[150px] h-[150px] object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-md"
                            />
                          </div>
                        </span>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">
                            The Art of Reusability
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Lena Logic
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="podcasts">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          New Episodes
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your favorite podcasts. Updated daily.
                        </p>
                      </div>
                    </div>

                    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
                      <div className="mx-auto flex flex-col items-center justify-center text-center">
                        <svg
                          className="h-10 w-10 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="11" r="1" />
                          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
                          <path d="M17 18.5a9 9 0 1 0-10 0" />
                        </svg>
                        <h3 className="mt-4 text-lg font-semibold">
                          No episodes added
                        </h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground">
                          You have not added any podcasts. Add one below.
                        </p>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>Add Podcast</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Podcast</DialogTitle>
                              <DialogDescription>
                                Copy and paste the podcast feed URL to import.
                              </DialogDescription>
                            </DialogHeader>
                            <div>
                              <Label htmlFor="name" className="text-right">
                                Podcast URL
                              </Label>
                              <Input
                                id="name"
                                className="col-span-3"
                                placeholder="https://example.com/feed.xml"
                              />
                            </div>
                            <DialogFooter>
                              <Button type="submit">Import Podcast</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BundleMusic;
